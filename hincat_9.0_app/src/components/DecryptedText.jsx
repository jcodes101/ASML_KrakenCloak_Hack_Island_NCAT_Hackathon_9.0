import { useState, useEffect, useRef, useCallback } from 'react';

const DEFAULT_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!?@#$%';

function DecryptedText({
  text,
  speed = 50,
  maxIterations = 10,
  characters = DEFAULT_CHARS,
  className = '',
  parentClassName = '',
  encryptedClassName = '',
  animateOn = 'hover',
  clickMode = 'once',
  revealDirection = 'end',
  sequential = false,
  useOriginalCharsOnly = true,
}) {
  const [display, setDisplay] = useState('');
  const [isRevealed, setIsRevealed] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const containerRef = useRef(null);
  const intervalRef = useRef(null);

  const charset = useOriginalCharsOnly
    ? [...new Set(text)].join('') || DEFAULT_CHARS
    : characters;

  const getRandomChar = useCallback(() => {
    return charset[Math.floor(Math.random() * charset.length)] || '?';
  }, [charset]);

  const runAnimation = useCallback(() => {
    if (!text || hasStarted) return;
    setHasStarted(true);

    const len = text.length;
    const indices = Array.from({ length: len }, (_, i) => i);
    if (revealDirection === 'end') indices.reverse();

    if (sequential) {
      let step = 0;
      const run = () => {
        const revealedCount = Math.min(step, len);
        let str = '';
        for (let i = 0; i < len; i++) {
          const orderIndex = indices.indexOf(i);
          if (orderIndex < revealedCount) str += text[i];
          else str += getRandomChar();
        }
        setDisplay(str);
        if (revealedCount >= len) {
          setIsRevealed(true);
          return;
        }
        step++;
        intervalRef.current = setTimeout(run, speed);
      };
      run();
    } else {
      let iteration = 0;
      const run = () => {
        if (iteration >= maxIterations) {
          setDisplay(text);
          setIsRevealed(true);
          return;
        }
        setDisplay(
          text
            .split('')
            .map(() => getRandomChar())
            .join('')
        );
        iteration++;
        intervalRef.current = setTimeout(run, speed);
      };
      run();
    }
  }, [
    text,
    hasStarted,
    sequential,
    revealDirection,
    maxIterations,
    speed,
    getRandomChar,
  ]);

  useEffect(() => {
    if (!text) return;
    setDisplay(
      text
        .split('')
        .map(() => getRandomChar())
        .join('')
    );
  }, [text, getRandomChar]);

  useEffect(() => {
    if (animateOn === 'view' && containerRef.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) runAnimation();
        },
        { threshold: 0.2 }
      );
      observer.observe(containerRef.current);
      return () => observer.disconnect();
    }
  }, [animateOn, runAnimation]);

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearTimeout(intervalRef.current);
    };
  }, []);

  const handleClick = () => {
    if (animateOn === 'click' && (clickMode !== 'once' || !isRevealed)) {
      if (clickMode === 'toggle' && isRevealed) {
        setIsRevealed(false);
        setHasStarted(false);
        setDisplay(
          text
            .split('')
            .map(() => getRandomChar())
            .join('')
        );
      } else {
        runAnimation();
      }
    }
  };

  const handleMouseEnter = () => {
    if (animateOn === 'hover' && !hasStarted) runAnimation();
  };

  const wrapperClass = [parentClassName, isRevealed ? className : encryptedClassName]
    .filter(Boolean)
    .join(' ');

  return (
    <span
      ref={containerRef}
      className={wrapperClass}
      onMouseEnter={handleMouseEnter}
      onClick={handleClick}
      style={
        animateOn === 'click' ? { cursor: 'pointer' } : undefined
      }
      role={animateOn === 'click' ? 'button' : undefined}
      tabIndex={animateOn === 'click' ? 0 : undefined}
      onKeyDown={(e) => {
        if (animateOn === 'click' && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          handleClick();
        }
      }}
    >
      {display || text}
    </span>
  );
}

export default DecryptedText;

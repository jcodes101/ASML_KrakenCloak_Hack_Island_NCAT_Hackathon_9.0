import asmlFactory from '../../assets/asml_factory.jpg';

function Login_Background() {
  return (
    <>
      <div className="absolute inset-0 z-0" aria-hidden>
        <img
          src={asmlFactory}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background-light/75 dark:bg-background-dark/75" aria-hidden />
      </div>
      <div
        className="absolute inset-0 z-0 bg-[length:40px_40px] bg-[image:linear-gradient(to_right,rgba(0,94,184,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,94,184,0.05)_1px,transparent_1px)]"
        aria-hidden
      />
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center bg-[radial-gradient(circle_at_50%_50%,rgba(0,94,184,0.03)_0%,transparent_70%)]" aria-hidden>
        <svg className="w-full h-full opacity-10" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <circle cx="400" cy="400" fill="none" r="150" stroke="#005EB8" strokeDasharray="10 5" strokeWidth="0.5" />
          <circle cx="400" cy="400" fill="none" r="250" stroke="#005EB8" strokeWidth="0.2" />
          <path d="M100 400 L700 400 M400 100 L400 700" stroke="#005EB8" strokeWidth="0.2" />
          <rect fill="none" height="100" stroke="#005EB8" strokeWidth="1" width="100" x="350" y="350" />
          <circle cx="350" cy="350" fill="#005EB8" r="2" />
          <circle cx="450" cy="350" fill="#005EB8" r="2" />
          <circle cx="350" cy="450" fill="#005EB8" r="2" />
          <circle cx="450" cy="450" fill="#005EB8" r="2" />
        </svg>
      </div>
    </>
  );
}

export default Login_Background;

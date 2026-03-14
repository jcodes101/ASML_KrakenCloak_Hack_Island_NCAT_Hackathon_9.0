import { Link } from 'react-router-dom';

const ASML = {
  technology: 'https://www.asml.com/en/technology',
  investors: 'https://www.asml.com/en/investors',
  company: 'https://www.asml.com/en/company',
  privacy: 'https://www.asml.com/en/privacy',
  terms: 'https://www.asml.com/en/terms-of-use',
  sustainability: 'https://www.asml.com/en/company/sustainability',
  careers: 'https://www.asml.com/careers/working-at-asml',
  home: 'https://www.asml.com',
};

function Footer() {
  const productLinks = [
    { label: 'Documentation', href: ASML.investors, external: true },
    { label: 'Vision Dashboard', href: '/dashboard', external: false },
    { label: 'Sync Engine', href: ASML.technology, external: true },
    { label: 'API Reference', href: ASML.technology, external: true },
  ];
  const resourceLinks = [
    { label: 'GitHub Repository', href: 'https://github.com', external: true },
    { label: 'Community Forum', href: ASML.careers, external: true },
    { label: 'System Status', href: ASML.home, external: true },
    { label: 'Open Source', href: ASML.technology, external: true },
  ];
  const legalLinks = [
    { label: 'Privacy Policy', href: ASML.privacy, external: true },
    { label: 'Terms of Service', href: ASML.terms, external: true },
    { label: 'Ethics Guidelines', href: ASML.sustainability, external: true },
    { label: 'Security', href: ASML.privacy, external: true },
  ];

  return (
    <footer className="bg-deep-tech dark:bg-slate-950 text-white/80 py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <span className="material-symbols-outlined text-primary text-3xl">lens_blur</span>
            <span className="text-xl font-black uppercase tracking-tighter text-white">Kraken Cloak</span>
          </div>
          <p className="text-sm leading-relaxed text-slate-400">
            Next-generation AI vision platform for industrial synchronization and neural privacy.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-6">Product</h4>
          <ul className="space-y-4 text-sm">
            {productLinks.map((link) => (
              <li key={link.label}>
                {link.external ? (
                  <a className="hover:text-primary transition-colors" href={link.href} target="_blank" rel="noopener noreferrer">{link.label}</a>
                ) : (
                  <Link className="hover:text-primary transition-colors" to={link.href}>{link.label}</Link>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-6">Resources</h4>
          <ul className="space-y-4 text-sm">
            {resourceLinks.map((link) => (
              <li key={link.label}>
                <a className="hover:text-primary transition-colors" href={link.href} target="_blank" rel="noopener noreferrer">{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-6">Legal</h4>
          <ul className="space-y-4 text-sm">
            {legalLinks.map((link) => (
              <li key={link.label}>
                <a className="hover:text-primary transition-colors" href={link.href} target="_blank" rel="noopener noreferrer">{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono uppercase tracking-widest text-slate-500">
        <span>Kraken Cloak Vision Platform v9.2.0-STABLE</span>
        <span>© 2026 Engineering & Vision Labs.</span>
      </div>
    </footer>
  );
}

export default Footer;

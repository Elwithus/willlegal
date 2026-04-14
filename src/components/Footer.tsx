import { Link } from "@tanstack/react-router";

const footerLinks = {
  firm: [
    { to: "/about" as const, label: "About Us" },
    { to: "/team" as const, label: "Our People" },
    { to: "/practice-areas" as const, label: "Practice Areas" },
    { to: "/insights" as const, label: "Insights" },
  ],
  practices: [
    { label: "Corporate & M&A" },
    { label: "Litigation" },
    { label: "Finance & Banking" },
    { label: "Intellectual Property" },
  ],
  offices: [
    { label: "New York" },
    { label: "London" },
    { label: "Hong Kong" },
    { label: "San Francisco" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-navy text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="font-serif text-xl font-semibold mb-2">Deborah Williams Legal</h3>
            <p className="text-label text-primary-foreground/40 text-[9px] tracking-[0.25em] mb-6">
              Attorneys at Law
            </p>
            <p className="text-sm text-primary-foreground/60 leading-relaxed">
              A global law firm advising the world's leading companies and financial institutions on their most complex transactions and disputes.
            </p>
          </div>

          {/* Firm Links */}
          <div>
            <h4 className="text-label text-gold mb-6">The Firm</h4>
            <ul className="space-y-3">
              {footerLinks.firm.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-primary-foreground/60 hover:text-gold transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="text-label text-gold mb-6">Practices</h4>
            <ul className="space-y-3">
              {footerLinks.practices.map((link) => (
                <li key={link.label}>
                  <span className="text-sm text-primary-foreground/60">
                    {link.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Offices */}
          <div>
            <h4 className="text-label text-gold mb-6">Offices</h4>
            <ul className="space-y-3">
              {footerLinks.offices.map((link) => (
                <li key={link.label}>
                  <span className="text-sm text-primary-foreground/60">
                    {link.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} Caldwell & Sterling LLP. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs text-primary-foreground/40 hover:text-primary-foreground/60 cursor-pointer transition-colors">
              Privacy Policy
            </span>
            <span className="text-xs text-primary-foreground/40 hover:text-primary-foreground/60 cursor-pointer transition-colors">
              Terms of Use
            </span>
            <span className="text-xs text-primary-foreground/40 hover:text-primary-foreground/60 cursor-pointer transition-colors">
              Cookie Policy
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

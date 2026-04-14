import { Link, useLocation } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const navItems = [
  { to: "/practice-areas" as const, label: "Practice Areas" },
  { to: "/team" as const, label: "Our People" },
  { to: "/insights" as const, label: "Insights" },
  { to: "/about" as const, label: "About" },
  { to: "/contact" as const, label: "Contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isHome ? "bg-navy/90 backdrop-blur-md" : "bg-navy shadow-lg"}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-semibold tracking-tight text-primary-foreground">
                Deborah Williams Legal
              </span>
              <span className="text-label text-primary-foreground/50 text-[9px] tracking-[0.25em]">
                Attorneys at Law
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="nav-link text-primary-foreground/70 hover:text-gold"
                activeProps={{ className: "nav-link text-gold" }}
              >
                {item.label}
              </Link>
            ))}
            <Link to="/contact">
              <Button variant="navCta">Get in Touch</Button>
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <motion.span
              className="w-6 h-0.5 bg-primary-foreground block"
              animate={mobileOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            />
            <motion.span
              className="w-6 h-0.5 bg-primary-foreground block"
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            />
            <motion.span
              className="w-6 h-0.5 bg-primary-foreground block"
              animate={mobileOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-navy border-t border-primary-foreground/10 overflow-hidden"
          >
            <nav className="flex flex-col px-6 py-6 gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="nav-link text-primary-foreground/70 hover:text-gold py-2"
                  activeProps={{ className: "nav-link text-gold py-2" }}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link to="/contact" onClick={() => setMobileOpen(false)}>
                <Button variant="navCta" className="w-full mt-2">Get in Touch</Button>
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

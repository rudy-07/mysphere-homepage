import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Cloud, Camera, Music, Link as LinkIcon, Wallet, ArrowUpRight, Menu, X } from "lucide-react";

const products = [
  { name: "myCloud", icon: Cloud, path: "/products/mycloud", status: "Active" },
  { name: "myCam", icon: Camera, path: "/products/mycam", status: "In Development" },
  { name: "myTune", icon: Music, path: "/products/mytune", status: "Desktop App" },
  { name: "myLink", icon: LinkIcon, path: "/products/mylink", status: "Planned" },
  { name: "myMoney", icon: Wallet, path: "/products/mymoney", status: "Planned" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/70 backdrop-blur-xl border-b border-border/50 shadow-lg shadow-background/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 h-16">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold tracking-tight">
          <span className="gradient-text">my</span>
          <span className="text-foreground">Sphere</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {/* Products dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
              Products
              <ChevronDown className={`w-4 h-4 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
            </button>

            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 glass-card p-2 rounded-xl"
                >
                  {products.map((p) => (
                    <Link
                      key={p.name}
                      to={p.path}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-muted/50 transition-colors group"
                      onClick={() => setDropdownOpen(false)}
                    >
                      <p.icon className="w-4 h-4 text-primary" />
                      <div>
                        <div className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">{p.name}</div>
                        <div className="text-xs text-muted-foreground">{p.status}</div>
                      </div>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            About
          </Link>

          <a
            href="https://cloud.mysphere.co.in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold transition-all duration-300 hover:shadow-[0_0_20px_-5px_hsl(var(--primary)/0.5)] hover:scale-105"
          >
            Open myCloud
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {products.map((p) => (
                <Link
                  key={p.name}
                  to={p.path}
                  className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-muted/50 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  <p.icon className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">{p.name}</span>
                </Link>
              ))}
              <Link
                to="/about"
                className="block px-3 py-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                About
              </Link>
              <a
                href="https://cloud.mysphere.co.in"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-3 text-sm font-semibold text-primary"
              >
                Open myCloud <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Moon, Sun } from "lucide-react";

const NavLink = [
  { name: "Home", path: "/" },
  { name: "About me", path: "/#about" },
  { name: "Services", path: "/#services" },
  { name: "My work", path: "/#work" },
  { name: "Testimonials", path: "/#testimonials" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);


  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 dark:bg-zinc-950/95 backdrop-blur-md shadow-sm py-2 border-b border-transparent dark:border-zinc-800" : "py-4"
        }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6">
        <motion.a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-2xl font-serif font-bold text-gray-900 dark:text-white hover:opacity-80 transition-opacity duration-300 z-10"
        >
          Bima Dolma<span className="text-red-500">.</span>
        </motion.a>

        <nav className="hidden md:flex items-center space-x-1 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm border border-gray-100 dark:border-zinc-800 rounded-full px-2 py-1.5 shadow-sm absolute left-1/2 -translate-x-1/2">
          {NavLink.map((link) => {
            const isActive =
              (link.path === "/" && activeSection === "home") ||
              (link.path !== "/" && link.path.includes(activeSection));

            return (
              <motion.a
                key={link.path}
                href={link.path}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full ${isActive
                  ? "text-gray-900 dark:text-white bg-gray-100 dark:bg-zinc-800"
                  : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-zinc-800/50"
                  }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavPill"
                    className="absolute inset-0 bg-gray-100 dark:bg-zinc-800 rounded-full"
                    transition={{ type: "spring", duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </motion.a>
            );
          })}
        </nav>
        <div className="hidden md:flex items-center gap-4 z-10">
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              aria-label="Toggle Dark Mode"
              className="p-2 text-gray-400 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white transition-colors rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          )}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 border border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-50 dark:hover:bg-zinc-800 transition-all text-gray-900 dark:text-white shadow-sm group"
          >
            Connect
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </motion.a>
        </div>

        <div className="flex items-center gap-4 md:hidden z-10">
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              aria-label="Toggle Dark Mode"
              className="p-2 text-gray-400 dark:text-zinc-400 hover:opacity-80 transition-colors duration-300 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          )}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-900 dark:text-white p-2 hover:opacity-80 transition-colors duration-300 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 bg-black/10 md:hidden"
                onClick={() => setIsMobileMenuOpen(false)}
              />

              {/* Menu */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-0 w-full md:hidden bg-white dark:bg-zinc-950 shadow-lg border-t border-gray-100 dark:border-zinc-800"
              >
                <nav className="container mx-auto px-6 py-4 flex flex-col space-y-1">
                  {NavLink.map((link, index) => {
                    const isActive =
                      (link.path === "/" && activeSection === "home") ||
                      (link.path !== "/" && link.path.includes(activeSection));

                    return (
                      <motion.div
                        key={link.path}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <motion.a
                          href={link.path}
                          onClick={() => setIsMobileMenuOpen(false)}
                          whileTap={{ scale: 0.95 }}
                          className={`block px-4 py-3 text-lg font-medium rounded-2xl transition-all duration-300 ${isActive
                            ? "bg-gray-100 dark:bg-zinc-900 text-gray-900 dark:text-white"
                            : "text-gray-500 dark:text-zinc-400 hover:bg-gray-50 dark:hover:bg-zinc-900/50 hover:text-gray-900 dark:hover:text-white"
                            }`}
                        >
                          {link.name}
                        </motion.a>
                      </motion.div>
                    );
                  })}

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: NavLink.length * 0.05 }}
                    className="pt-3 mt-3 border-t border-gray-100 dark:border-zinc-800"
                  >
                    <motion.a
                      href="#contact"
                      onClick={() => setIsMobileMenuOpen(false)}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center justify-center gap-2 bg-gray-900 dark:bg-white text-white dark:text-black px-5 py-3 rounded-2xl text-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-all group"
                    >
                      Connect
                      <ArrowRight
                        size={18}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </motion.a>
                  </motion.div>
                </nav>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

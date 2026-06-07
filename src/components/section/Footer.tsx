"use client";

import { Code2, Briefcase, AtSign, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white dark:bg-zinc-950 border-t border-gray-100 dark:border-zinc-800 mt-auto py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Brand / Logo */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="text-3xl font-serif font-bold text-gray-900 dark:text-white mb-2 inline-block hover:opacity-80 transition-opacity"
          >
            Bima Dolma<span className="text-red-500">.</span>
          </a>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Frontend web developer based in Kathmandu.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
          {[
            { name: "Home", href: "#" },
            { name: "About", href: "#about" },
            { name: "Services", href: "#services" },
            { name: "Work", href: "#work" }
          ].map((link) => (
            <motion.a 
              key={link.name}
              href={link.href}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-600 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          {[
            { icon: Code2, href: "#", label: "Github" },
            { icon: Briefcase, href: "#", label: "LinkedIn" },
            { icon: AtSign, href: "#", label: "Twitter" },
            { icon: Mail, href: "#contact", label: "Email" }
          ].map((social, index) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={index}
                href={social.href}
                aria-label={social.label}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-full bg-gray-50 dark:bg-zinc-900 flex items-center justify-center text-gray-600 dark:text-zinc-400 border border-gray-100 dark:border-zinc-800 hover:bg-gray-100 dark:hover:bg-zinc-800 hover:text-gray-900 dark:hover:text-white transition-colors shadow-sm"
              >
                <Icon size={18} />
              </motion.a>
            );
          })}
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-gray-100 dark:border-zinc-800/50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400 dark:text-zinc-500">
        <p>&copy; {currentYear} Bima Dolma Lama. All rights reserved.</p>
        <p>Built with Next.js, Tailwind CSS & Framer Motion.</p>
      </div>
    </footer>
  );
}

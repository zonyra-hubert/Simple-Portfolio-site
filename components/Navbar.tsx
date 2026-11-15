"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { ease } from "./motion";
import { Logo } from "./ui";
import { navLinks } from "./content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.15, ease }}
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow] duration-500 ${
        scrolled || open ? "bg-ink shadow-lg shadow-black/20" : "bg-ink md:bg-transparent"
      }`}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-8 md:h-20"
      >
        <a
          href="#top"
          onClick={close}
          aria-label="Hubert Zonyra, back to top"
          className={`transition-colors ${
            scrolled ? "text-white" : "text-white md:text-ink"
          }`}
        >
          <Logo className="h-7 w-9 md:h-8 md:w-10" />
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-10 font-display text-[11px] font-semibold text-white md:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative py-1 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-white after:transition-transform hover:after:scale-x-100"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="rounded-full border-2 border-white bg-white px-5 py-2 text-[10px] font-bold uppercase tracking-wider text-ink transition-colors hover:bg-transparent hover:text-white"
            >
              Contact me
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          className="-mr-2 p-2 text-white md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={open ? "close" : "open"}
              className="block"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.span>
          </AnimatePresence>
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence initial={false}>
        {open && (
      <motion.div
        id="mobile-menu"
        key="mobile-menu"
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "auto", opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.4, ease }}
        className="overflow-hidden border-t border-white/10 bg-charcoal md:hidden"
      >
        <ul className="font-display text-xs font-semibold text-white">
          {navLinks.map((l, i) => (
            <motion.li
              key={l.href}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 + i * 0.05, duration: 0.3 }}
            >
              <a
                href={l.href}
                onClick={close}
                className="block py-4 text-center transition-colors hover:bg-white/5"
              >
                {l.label}
              </a>
            </motion.li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={close}
              className="block bg-white py-4 text-center text-[11px] font-bold uppercase tracking-wider text-ink"
            >
              Contact me
            </a>
          </li>
        </ul>
      </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

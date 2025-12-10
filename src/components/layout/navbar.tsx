"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Menu, X, Code2, Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/80 backdrop-blur-md transition-colors duration-300">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl md:text-2xl text-foreground">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Code2 className="h-5 w-5" />
            </div>
            <span className="tracking-tight hover:scale-105 transition-transform duration-300">
              <span className="text-foreground font-extrabold tracking-wide">Shahi</span>
              <span className="bg-clip-text text-transparent bg-[linear-gradient(110deg,#3b82f6,45%,#ffffff,55%,#3b82f6)] bg-[length:250%_100%] animate-shimmer font-extrabold tracking-wide">
                Solution
              </span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base font-medium text-muted-foreground hover:text-primary transition-colors"
                scroll={true}
              >
                {link.label}
              </Link>
            ))}
            
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-full hover:bg-accent/10 text-foreground transition-colors"
                aria-label="Toggle Theme"
              >
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
            )}

            <Button 
                variant="tech" 
                size="sm" 
                className="bg-[linear-gradient(110deg,#3b82f6,45%,#93c5fd,55%,#3b82f6)] bg-[length:200%_100%] animate-shimmer text-white hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] border-0 uppercase tracking-wider font-semibold"
                asChild
            >
              <Link href="/contact">Start Learning</Link>
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-4 md:hidden">
             {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-full hover:bg-accent/10 text-foreground transition-colors"
              >
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
            )}
            <button
                className="p-2 text-foreground"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-white/10 bg-background"
          >
            <Container className="py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-base font-medium text-foreground py-2 hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button 
                className="w-full bg-[linear-gradient(110deg,#3b82f6,45%,#93c5fd,55%,#3b82f6)] bg-[length:200%_100%] animate-shimmer text-white border-0" 
                variant="tech" 
                asChild
              >
                <Link href="/contact" onClick={() => setIsOpen(false)}>Start Learning</Link>
              </Button>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { GraduationCap, Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Courses", href: "#courses" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-primary-foreground/10">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <GraduationCap className="h-8 w-8 text-primary-foreground" />
            <span className="font-bold text-lg text-primary-foreground">
              Sharma Coaching
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
            <Button variant="secondary" size="sm" asChild>
              <a href="#contact">Enroll Now</a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-primary-foreground/10">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button variant="secondary" size="sm" className="w-fit" asChild>
                <a href="#contact" onClick={() => setIsMenuOpen(false)}>
                  Enroll Now
                </a>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

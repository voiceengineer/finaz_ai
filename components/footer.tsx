"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function Footer() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const Logo = () => (
    <div className="flex items-center gap-2 cursor-pointer">
      <Link href="/" className="flex items-center gap-2 group cursor-pointer">
        <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center font-bold text-background text-sm">
          F
        </div>
        <div className="flex flex-col leading-tight">
          <span className="text-xs font-black uppercase tracking-widest text-foreground">
            Finaz
          </span>
          <span className="text-xs font-bold uppercase tracking-widest text-accent">
            AI
          </span>
        </div>
      </Link>
    </div>
  );

  return (
    <footer className="py-24 border-t border-border bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          <div className="lg:col-span-6 space-y-10">
            <Logo />
            <p className="text-xs text-muted-foreground uppercase tracking-widest leading-relaxed max-w-xs">
              Intelligent financial infrastructure for the next generation of
              global institutions.
            </p>
            <p className="text-xs uppercase tracking-widest text-accent font-semibold">
              Building the future of finance
            </p>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-foreground mb-6">
              Platform
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/#solutions"
                  className="text-sm text-muted-foreground hover:text-accent transition-colors cursor-pointer"
                >
                  Lending
                </Link>
              </li>
              <li>
                <Link
                  href="/#solutions"
                  className="text-sm text-muted-foreground hover:text-accent transition-colors cursor-pointer"
                >
                  Real Estate
                </Link>
              </li>
              <li>
                <Link
                  href="/#solutions"
                  className="text-sm text-muted-foreground hover:text-accent transition-colors cursor-pointer"
                >
                  CRM Suite
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-foreground mb-6">
              Company
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-muted-foreground hover:text-accent transition-colors cursor-pointer"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-muted-foreground hover:text-accent transition-colors cursor-pointer"
                >
                  Privacy
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-foreground mb-6">
              Resources
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-muted-foreground hover:text-accent transition-colors cursor-pointer"
                >
                  Support
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-muted-foreground hover:text-accent transition-colors cursor-pointer"
                >
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground uppercase tracking-widest">
            © 2025 Finaz.ai. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="hover:bg-transparent cursor-pointer flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground hover:text-accent transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <>
                  <Sun className="h-4 w-4" />
                  <span>Light</span>
                </>
              ) : (
                <>
                  <Moon className="h-4 w-4" />
                  <span>Dark</span>
                </>
              )}
            </Button>
            <Link
              href="#"
              className="text-xs text-muted-foreground hover:text-accent transition-colors uppercase tracking-widest cursor-pointer"
            >
              Twitter
            </Link>
            <Link
              href="#"
              className="text-xs text-muted-foreground hover:text-accent transition-colors uppercase tracking-widest cursor-pointer"
            >
              LinkedIn
            </Link>
            <Link
              href="#"
              className="text-xs text-muted-foreground hover:text-accent transition-colors uppercase tracking-widest cursor-pointer"
            >
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

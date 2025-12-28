"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const Logo = () => (
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
  );

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Solutions", href: "/#solutions" },
    { name: "About", href: "/about" },
    // { name: "Privacy", href: "/privacy" },
    { name: "Contact", href: "/contact" },
  ];

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Logo />

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xs font-semibold uppercase tracking-widest text-muted-foreground hover:text-accent transition-colors cursor-pointer"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3 lg:gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="hover:bg-transparent cursor-pointer relative w-10 h-10 flex items-center justify-center"
            aria-label="Toggle theme"
          >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-foreground" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-foreground" />
          </Button>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden cursor-pointer"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[280px] border-l border-border bg-background p-0"
            >
              <SheetHeader className="p-6 border-b border-border">
                <SheetTitle>
                  <Logo />
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col p-6 gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-xs font-semibold uppercase tracking-widest text-muted-foreground hover:text-accent transition-colors py-3 px-2 cursor-pointer border-b border-border/30 last:border-b-0"
                  >
                    {link.name}
                  </Link>
                ))}

                <div className="flex items-center gap-3 pt-4 mt-4 border-t border-border/30">
                  <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Theme:
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={toggleTheme}
                    className="cursor-pointer flex items-center gap-2 bg-transparent"
                  >
                    {theme === "dark" ? (
                      <>
                        <Sun className="h-3 w-3" />
                        <span className="text-xs">Light</span>
                      </>
                    ) : (
                      <>
                        <Moon className="h-3 w-3" />
                        <span className="text-xs">Dark</span>
                      </>
                    )}
                  </Button>
                </div>

                <Button className="w-full mt-6 text-xs uppercase tracking-widest font-bold h-12 cursor-pointer">
                  Get Started
                </Button>
              </div>
            </SheetContent>
          </Sheet>

          <Button className="hidden lg:flex text-xs uppercase tracking-widest font-bold h-10 px-6 cursor-pointer">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
}

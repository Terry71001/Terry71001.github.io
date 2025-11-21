import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Navigation() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "首頁" },
    { href: "/projects", label: "作品集" },
    { href: "/about", label: "關於我" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" data-testid="link-home">
            <span className="text-xl font-bold tracking-tight hover-elevate active-elevate-2 px-3 py-2 rounded-md cursor-pointer">
              作品集
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} data-testid={`link-nav-${link.label}`}>
                <Button
                  variant={location === link.href ? "secondary" : "ghost"}
                  className="text-sm"
                >
                  {link.label}
                </Button>
              </Link>
            ))}
          </div>

          <Button
            size="icon"
            variant="ghost"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <div className="px-6 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} data-testid={`link-mobile-${link.label}`}>
                <Button
                  variant={location === link.href ? "secondary" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

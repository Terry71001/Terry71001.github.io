import { SiGithub, SiLinkedin } from "react-icons/si";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="border-t py-12 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">作品集</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              展示創意與技術的完美結合，打造令人印象深刻的數位作品。
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">快速連結</h3>
            <div className="space-y-2">
              <a href="/" className="block text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-home">
                首頁
              </a>
              <a href="/projects" className="block text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-projects">
                作品集
              </a>
              <a href="/about" className="block text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-about">
                關於我
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">聯絡方式</h3>
            <div className="flex gap-2">
              <Button size="icon" variant="ghost" data-testid="button-social-github">
                <SiGithub className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" data-testid="button-social-linkedin">
                <SiLinkedin className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" data-testid="button-social-email">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t pt-8 text-center text-sm text-muted-foreground">
          © 2024 學生作品集. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  onViewProjects?: () => void;
  onLearnMore?: () => void;
}

export default function Hero({ title, subtitle, backgroundImage, onViewProjects, onLearnMore }: HeroProps) {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6" data-testid="text-hero-title">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed" data-testid="text-hero-subtitle">
          {subtitle}
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            variant="default"
            className="backdrop-blur-md bg-primary/90 hover:bg-primary text-lg px-8 py-6"
            onClick={onViewProjects}
            data-testid="button-view-projects"
          >
            查看作品
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="backdrop-blur-md bg-background/10 border-white/30 text-white hover:bg-background/20 text-lg px-8 py-6"
            onClick={onLearnMore}
            data-testid="button-learn-more"
          >
            了解更多
          </Button>
        </div>
      </div>
    </section>
  );
}

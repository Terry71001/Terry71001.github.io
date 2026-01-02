import { useRoute, Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import TagPill from "@/components/TagPill";
import MarkdownContent from "@/components/MarkdownContent";
import { ArrowLeft } from "lucide-react";
import { portfolio } from "@/data/content";

export default function ProjectDetail() {
  const [, params] = useRoute("/projects/:slug");
  const slug = params?.slug;

  const project = portfolio.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1 pt-16">
          <div className="max-w-7xl mx-auto px-6 py-12 text-center">
            <p className="text-muted-foreground text-lg mb-4">找不到這個作品</p>
            <Link href="/projects">
              <Button variant="outline" data-testid="button-back-projects">
                <ArrowLeft className="w-4 h-4 mr-2" />
                返回作品集
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-16">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <Link href="/projects">
            <Button variant="ghost" className="mb-8 gap-2" data-testid="button-back">
              <ArrowLeft className="w-4 h-4" />
              返回作品集
            </Button>
          </Link>

          <article className="space-y-8">
            <div className="aspect-video overflow-hidden rounded-2xl bg-muted">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground font-mono uppercase tracking-wider">
                    {project.category}
                  </span>
                  <span className="text-sm text-muted-foreground font-mono">{project.year}</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight" data-testid="text-project-title">
                  {project.title}
                </h1>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <TagPill key={tag} label={tag} />
                ))}
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <MarkdownContent content={project.content} />
            </div>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
}


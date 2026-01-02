import { useState, useMemo } from "react";
import Navigation from "@/components/Navigation";
import ProjectCard from "@/components/ProjectCard";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { portfolio } from "@/data/content";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("全部");

  const allProjects = portfolio;
  const categories = ["全部", ...Array.from(new Set(allProjects.map((p) => p.category)))];

  const filteredProjects = useMemo(() => {
    return activeCategory === "全部"
      ? allProjects
      : allProjects.filter((p) => p.category === activeCategory);
  }, [activeCategory, allProjects]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-16">
        <div className="py-12 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6" data-testid="text-page-title">
              作品集
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl">
              探索我的創作歷程，每個作品都代表著對技術與設計的熱情追求
            </p>

            <div className="sticky top-16 z-40 bg-background/95 backdrop-blur-sm py-4 -mx-6 px-6 border-b mb-12">
              <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={activeCategory === category ? "default" : "outline"}
                    onClick={() => setActiveCategory(category)}
                    className="whitespace-nowrap"
                    data-testid={`button-category-${category}`}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                />
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

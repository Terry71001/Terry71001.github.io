import { useState } from "react";
import Navigation from "@/components/Navigation";
import ProjectCard from "@/components/ProjectCard";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import project1 from '@assets/generated_images/3D_geometric_art_project_31648183.png';
import project2 from '@assets/generated_images/Web_design_project_mockup_fa6abe07.png';
import project3 from '@assets/generated_images/Mobile_app_UI_design_f894005c.png';
import project4 from '@assets/generated_images/Code_visualization_artwork_3f4c5353.png';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("全部");

  const categories = ["全部", "Web Design", "3D Art", "Mobile App", "Creative Code"];

  const allProjects = [
    {
      id: "1",
      title: "幾何藝術創作",
      category: "3D Art",
      tags: ["Blender", "3D", "Design"],
      imageUrl: project1,
      year: "2024",
    },
    {
      id: "2",
      title: "現代網頁設計",
      category: "Web Design",
      tags: ["React", "Tailwind", "UI/UX"],
      imageUrl: project2,
      year: "2024",
    },
    {
      id: "3",
      title: "行動應用介面",
      category: "Mobile App",
      tags: ["Flutter", "UI", "Design"],
      imageUrl: project3,
      year: "2023",
    },
    {
      id: "4",
      title: "程式視覺化",
      category: "Creative Code",
      tags: ["P5.js", "WebGL", "Art"],
      imageUrl: project4,
      year: "2024",
    },
    {
      id: "5",
      title: "響應式網站",
      category: "Web Design",
      tags: ["HTML", "CSS", "JavaScript"],
      imageUrl: project2,
      year: "2023",
    },
    {
      id: "6",
      title: "3D 角色建模",
      category: "3D Art",
      tags: ["Blender", "Modeling", "Rendering"],
      imageUrl: project1,
      year: "2024",
    },
  ];

  const filteredProjects =
    activeCategory === "全部"
      ? allProjects
      : allProjects.filter((p) => p.category === activeCategory);

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
                  {...project}
                  onClick={() => console.log(`Navigate to project ${project.id}`)}
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

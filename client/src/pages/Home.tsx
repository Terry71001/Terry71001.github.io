import { Link } from "wouter";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import SkillCard from "@/components/SkillCard";
import Footer from "@/components/Footer";
import { Code2, Palette, Database, Layers, Cpu, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from '@assets/generated_images/Hero_workspace_tech_setup_88c109c8.png';
import project1 from '@assets/generated_images/3D_geometric_art_project_31648183.png';
import project2 from '@assets/generated_images/Web_design_project_mockup_fa6abe07.png';
import project3 from '@assets/generated_images/Mobile_app_UI_design_f894005c.png';
import project4 from '@assets/generated_images/Code_visualization_artwork_3f4c5353.png';

export default function Home() {
  const featuredProjects = [
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
  ];

  const skills = [
    { icon: Code2, name: "程式開發" },
    { icon: Palette, name: "視覺設計" },
    { icon: Database, name: "資料庫" },
    { icon: Layers, name: "前端框架" },
    { icon: Cpu, name: "演算法" },
    { icon: Smartphone, name: "行動開發" },
  ];

  const handleViewProjects = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  const handleLearnMore = () => {
    window.location.href = '/about';
  };

  return (
    <div className="min-h-screen">
      <Hero
        title="學生開發者 & 設計師"
        subtitle="探索我的創意作品集，展現設計與技術的完美結合"
        backgroundImage={heroImage}
        onViewProjects={handleViewProjects}
        onLearnMore={handleLearnMore}
      />

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4" data-testid="text-featured-title">
                精選作品
              </h2>
              <p className="text-lg text-muted-foreground">
                展示我最引以為傲的專案與創作
              </p>
            </div>
            <Link href="/projects">
              <Button variant="outline" className="hidden md:inline-flex" data-testid="button-view-all">
                查看全部
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                {...project}
                onClick={() => console.log(`Navigate to project ${project.id}`)}
              />
            ))}
          </div>

          <div className="mt-8 md:hidden text-center">
            <Link href="/projects">
              <Button variant="outline" data-testid="button-view-all-mobile">
                查看全部作品
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-12 text-center" data-testid="text-skills-title">
            技能專長
          </h2>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {skills.map((skill) => (
              <SkillCard key={skill.name} {...skill} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6" data-testid="text-about-title">
                關於我
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-muted-foreground mb-6">
                我是一名熱愛科技與設計的學生，專注於創造兼具美感與功能的數位作品。透過不斷學習與實踐，我致力於將創意想法轉化為實際的專案成果。
              </p>
              <p className="text-base md:text-lg leading-relaxed text-muted-foreground mb-8">
                我的作品涵蓋網頁開發、3D 設計、使用者介面設計等多個領域，每個專案都是我對技術與藝術追求的體現。
              </p>
              <Link href="/about">
                <Button data-testid="button-learn-more-about">
                  了解更多
                </Button>
              </Link>
            </div>
            <div className="order-1 lg:order-2">
              <div className="aspect-square rounded-lg overflow-hidden bg-muted">
                <img
                  src={project1}
                  alt="About preview"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

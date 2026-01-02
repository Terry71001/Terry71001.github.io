import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SkillCard from "@/components/SkillCard";
import { Code2, Palette, Database, Layers, Cpu, Smartphone, Globe, Boxes, Zap } from "lucide-react";

const profileImage = "/attached_assets/generated_images/Professional_student_portrait_633262b7.png";

export default function About() {
  const skills = [
    { icon: Code2, name: "程式開發" },
    { icon: Palette, name: "視覺設計" },
    { icon: Database, name: "資料庫" },
    { icon: Layers, name: "前端框架" },
    { icon: Cpu, name: "演算法" },
    { icon: Smartphone, name: "行動開發" },
    { icon: Globe, name: "網頁技術" },
    { icon: Boxes, name: "3D 設計" },
    { icon: Zap, name: "效能優化" },
  ];

  const experiences = [
    {
      title: "前端開發實習",
      company: "科技公司",
      period: "2023 - 2024",
      description: "參與多個網頁專案開發，使用 React 和 TypeScript 建立現代化的使用者介面。",
    },
    {
      title: "設計工作室助理",
      company: "創意工作室",
      period: "2022 - 2023",
      description: "協助設計團隊進行品牌視覺設計與 UI/UX 相關工作。",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-16">
        <div className="py-20 bg-background">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div className="order-2 lg:order-1">
                <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6" data-testid="text-about-heading">
                  關於我
                </h1>
                <div className="space-y-4 text-base md:text-lg leading-relaxed text-muted-foreground">
                  <p>
                    你好！我是一名熱愛科技與設計的學生，目前專注於網頁開發、3D 設計與使用者體驗設計。我相信好的設計不僅要美觀，更要能解決實際問題。
                  </p>
                  <p>
                    在學習的過程中，我不斷探索新技術，從前端框架到 3D 建模軟體，每一項技能都讓我能夠更好地實現創意想法。我享受將抽象的概念轉化為具體作品的過程。
                  </p>
                  <p>
                    除了技術能力，我也重視團隊合作與溝通。我相信透過交流與協作，能夠創造出更優秀的成果。期待與更多志同道合的人一起學習成長。
                  </p>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="aspect-square rounded-lg overflow-hidden bg-muted">
                  <img
                    src={profileImage}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="mb-20">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-12" data-testid="text-skills-heading">
                技能專長
              </h2>
              <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {skills.map((skill) => (
                  <SkillCard key={skill.name} {...skill} />
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-12" data-testid="text-experience-heading">
                經歷
              </h2>
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className="border-l-4 border-primary pl-6 py-4"
                    data-testid={`card-experience-${index}`}
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-2xl font-semibold">{exp.title}</h3>
                      <span className="text-sm font-mono text-muted-foreground">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-lg text-primary mb-2">{exp.company}</p>
                    <p className="text-base leading-relaxed text-muted-foreground">
                      {exp.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

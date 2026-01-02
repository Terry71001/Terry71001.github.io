import Hero from '../Hero';

const heroImage = "/attached_assets/generated_images/Hero_workspace_tech_setup_88c109c8.png";

export default function HeroExample() {
  return (
    <Hero
      title="學生開發者 & 設計師"
      subtitle="探索我的創意作品集，展現設計與技術的完美結合"
      backgroundImage={heroImage}
      onViewProjects={() => console.log('View Projects clicked')}
      onLearnMore={() => console.log('Learn More clicked')}
    />
  );
}

import ProjectCard from '../ProjectCard';

export default function ProjectCardExample() {
  const mockProject = {
    id: "1",
    slug: "幾何藝術創作",
    title: "幾何藝術創作",
    category: "3D Art",
    tags: ["Blender", "3D", "Design"],
    year: "2024",
    imageUrl: "/attached_assets/generated_images/3D_geometric_art_project_31648183.png",
    content: "# 幾何藝術創作\n\n這是一個使用 Blender 創作的 3D 幾何藝術作品。"
  };

  return (
    <div className="p-8 max-w-md">
      <ProjectCard project={mockProject} />
    </div>
  );
}

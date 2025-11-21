import ProjectCard from '../ProjectCard';
import projectImage from '@assets/generated_images/3D_geometric_art_project_31648183.png';

export default function ProjectCardExample() {
  return (
    <div className="p-8 max-w-md">
      <ProjectCard
        title="幾何藝術創作"
        category="3D Art"
        tags={["Blender", "3D", "Design"]}
        imageUrl={projectImage}
        year="2024"
        onClick={() => console.log('Project clicked')}
      />
    </div>
  );
}

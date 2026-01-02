import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import TagPill from "./TagPill";
import type { Portfolio } from "@/types/content";

interface ProjectCardProps {
  project: Portfolio;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { title, category, tags, imageUrl, year, slug } = project;
  
  return (
    <Link href={`/projects/${slug}`}>
      <Card
        className="group cursor-pointer overflow-hidden hover-elevate active-elevate-2 transition-transform duration-300 hover:scale-105"
        data-testid={`card-project-${title}`}
      >
      <div className="aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground font-mono uppercase tracking-wider">
              {category}
            </span>
            <span className="text-sm text-muted-foreground font-mono">{year}</span>
          </div>
          <h3 className="text-2xl font-semibold tracking-tight" data-testid={`text-project-title-${title}`}>
            {title}
          </h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <TagPill key={tag} label={tag} />
          ))}
        </div>
      </div>
    </Card>
    </Link>
  );
}

import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface SkillCardProps {
  icon: LucideIcon;
  name: string;
}

export default function SkillCard({ icon: Icon, name }: SkillCardProps) {
  return (
    <Card className="p-6 flex flex-col items-center gap-3 hover-elevate active-elevate-2 transition-transform duration-300 hover:scale-105">
      <Icon className="h-8 w-8 text-primary" />
      <span className="text-sm font-medium text-center" data-testid={`text-skill-${name}`}>{name}</span>
    </Card>
  );
}

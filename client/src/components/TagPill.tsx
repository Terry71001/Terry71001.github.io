import { Badge } from "@/components/ui/badge";

interface TagPillProps {
  label: string;
}

export default function TagPill({ label }: TagPillProps) {
  return (
    <Badge variant="secondary" className="font-mono text-xs uppercase tracking-wider px-3 py-1">
      {label}
    </Badge>
  );
}

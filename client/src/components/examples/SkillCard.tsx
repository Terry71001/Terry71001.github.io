import SkillCard from '../SkillCard';
import { Code2, Palette, Database } from 'lucide-react';

export default function SkillCardExample() {
  return (
    <div className="p-8 grid grid-cols-3 gap-4 max-w-md">
      <SkillCard icon={Code2} name="程式開發" />
      <SkillCard icon={Palette} name="視覺設計" />
      <SkillCard icon={Database} name="資料庫" />
    </div>
  );
}

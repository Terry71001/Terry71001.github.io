import TagPill from '../TagPill';

export default function TagPillExample() {
  return (
    <div className="flex gap-2 flex-wrap p-8">
      <TagPill label="React" />
      <TagPill label="TypeScript" />
      <TagPill label="3D Art" />
      <TagPill label="Web Design" />
    </div>
  );
}

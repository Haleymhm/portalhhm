export interface Skill {
  name: string;
  value: number;
  category: "frontend" | "backend" | "tools";
}

export const skills: Skill[] = [
  { name: "HTML", value: 100, category: "frontend" },
  { name: "CSS", value: 90, category: "frontend" },
  { name: "JavaScript", value: 75, category: "frontend" },
  { name: "PHP", value: 80, category: "backend" },
  { name: "WordPress/CMS", value: 90, category: "backend" },
  { name: "Photoshop", value: 55, category: "tools" },
];

export interface Service {
  slug: string;
  title: string;
  icon: string;
  description: string;
  fullDescription?: string;
}

export const services: Service[] = [
  {
    slug: "lorem-ipsum",
    title: "Lorem Ipsum",
    icon: "bi-briefcase",
    description:
      "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident",
  },
  {
    slug: "dolor-sitema",
    title: "Dolor Sitema",
    icon: "bi-card-checklist",
    description:
      "Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata",
  },
  {
    slug: "sed-ut-perspiciatis",
    title: "Sed ut perspiciatis",
    icon: "bi-bar-chart",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
  },
  {
    slug: "magni-dolores",
    title: "Magni Dolores",
    icon: "bi-binoculars",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
  },
  {
    slug: "nemo-enim",
    title: "Nemo Enim",
    icon: "bi-brightness-high",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque",
  },
  {
    slug: "eiusmod-tempor",
    title: "Eiusmod Tempor",
    icon: "bi-calendar4-week",
    description:
      "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

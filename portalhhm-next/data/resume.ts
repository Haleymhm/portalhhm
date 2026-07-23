export interface ResumeItem {
  title: string;
  subtitle: string;
  period: string;
  location?: string;
  description?: string;
  bullets?: string[];
}

export interface ResumeGroup {
  heading: string;
  items: ResumeItem[];
}

export interface Summary {
  name: string;
  intro: string;
  bullets: string[];
}

export interface Resume {
  intro: string;
  summary: Summary;
  groups: ResumeGroup[];
}

export const resume: Resume = {
  intro:
    "Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.",
  summary: {
    name: "Brandon Johnson",
    intro:
      "Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.",
    bullets: ["Portland par 127,Orlando, FL", "(123) 456-7891", "alice.barkley@example.com"],
  },
  groups: [
    {
      heading: "Education",
      items: [
        {
          title: "Master of Fine Arts & Graphic Design",
          subtitle: "Rochester Institute of Technology, Rochester, NY",
          period: "2015 - 2016",
          description:
            "Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend",
        },
        {
          title: "Bachelor of Fine Arts & Graphic Design",
          subtitle: "Rochester Institute of Technology, Rochester, NY",
          period: "2010 - 2014",
          description:
            "Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila",
        },
      ],
    },
    {
      heading: "Professional Experience",
      items: [
        {
          title: "Senior graphic design specialist",
          subtitle: "Experion, New York, NY",
          period: "2019 - Present",
          bullets: [
            "Lead in the design, development, and implementation of the graphic, layout, and production communication materials",
            "Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project.",
            "Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design",
            "Oversee the efficient use of production project budgets ranging from $2,000 - $25,000",
          ],
        },
        {
          title: "Graphic design specialist",
          subtitle: "Stepping Stone Advertising, New York, NY",
          period: "2017 - 2018",
          bullets: [
            "Developed numerous marketing programs (logos, brochures,infographics, presentations, and advertisements).",
            "Managed up to 5 projects or tasks at a given time while under pressure",
            "Recommended and consulted with clients on the most appropriate graphic design",
            "Created 4+ design presentations and proposals a month for clients and account managers",
          ],
        },
      ],
    },
  ],
};

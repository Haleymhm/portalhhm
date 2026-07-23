export interface Stat {
  icon: string;
  end: number;
  duration: number;
  label: string;
  description: string;
}

export const stats: Stat[] = [
  {
    icon: "bi-emoji-smile",
    end: 232,
    duration: 1,
    label: "Happy Clients",
    description: "consequuntur quae",
  },
  {
    icon: "bi-journal-richtext",
    end: 521,
    duration: 1,
    label: "Projects",
    description: "adipisci atque cum quia aut",
  },
  {
    icon: "bi-headset",
    end: 1453,
    duration: 1,
    label: "Hours Of Support",
    description: "aut commodi quaerat",
  },
  {
    icon: "bi-people",
    end: 32,
    duration: 1,
    label: "Hard Workers",
    description: "rerum asperiores dolor",
  },
];

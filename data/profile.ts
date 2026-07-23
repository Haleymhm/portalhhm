export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface InfoItem {
  label: string;
  value: string;
  icon: string;
}

export interface Profile {
  name: string;
  tagline: string;
  typedRoles: string[];
  title: string;
  city: string;
  bio: string[];
  birthday: string;
  age: string;
  website: string;
  phone: string;
  email: string;
  degree: string;
  freelance: string;
  profileImage: string;
  heroBackground: string;
  social: SocialLink[];
  info: InfoItem[];
  contact: {
    address: string;
    phone: string;
    email: string;
    mapEmbedUrl: string;
  };
}

export const profile: Profile = {
  name: "Haleym Hidalgo M",
  tagline: "Lead Tech, Full stack Developer, Freelancer",
  typedRoles: ["Lead Tech", "Full stack Developer", "Freelancer"],
  title: "UI/UX Designer & Web Developer.",
  city: "New York, USA",
  bio: [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque.",
  ],
  birthday: "1 May 1995",
  age: "30",
  website: "www.example.com",
  phone: "+123 456 7890",
  email: "email@example.com",
  degree: "Master",
  freelance: "Available",
  profileImage: "/img/my-profile-img.jpg",
  heroBackground: "/img/hero-bg.jpg",
  social: [
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/haleymhidalgomoyetones/",
      icon: "bi-linkedin",
    },
    {
      name: "twitter",
      url: "https://x.com/haleymhm",
      icon: "bi-twitter-x",
    },
    {
      name: "instagram",
      url: "https://www.instagram.com/haleymhidalgom/",
      icon: "bi-instagram",
    },
    {
      name: "github",
      url: "https://github.com/Haleymhm/",
      icon: "bi-github",
    },
  ],
  info: [
    { label: "Birthday", value: "1 May 1995", icon: "bi-chevron-right" },
    { label: "Website", value: "www.example.com", icon: "bi-chevron-right" },
    { label: "Phone", value: "+123 456 7890", icon: "bi-chevron-right" },
    { label: "City", value: "New York, USA", icon: "bi-chevron-right" },
    { label: "Age", value: "30", icon: "bi-chevron-right" },
    { label: "Degree", value: "Master", icon: "bi-chevron-right" },
    { label: "Email", value: "email@example.com", icon: "bi-chevron-right" },
    { label: "Freelance", value: "Available", icon: "bi-chevron-right" },
  ],
  contact: {
    address: "A108 Adam Street, New York, NY 535022",
    phone: "+1 5589 55488 55",
    email: "info@example.com",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.78314118045!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1676961268712!5m2!1sen!2sus",
  },
};

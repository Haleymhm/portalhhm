export interface NavItem {
  href: string;
  label: string;
  icon?: string;
  children?: NavItem[];
}

export const navigation: NavItem[] = [
  { href: "#hero", label: "Home", icon: "bi-house navicon" },
  { href: "#about", label: "About", icon: "bi-person navicon" },
  { href: "#resume", label: "Resume", icon: "bi-file-earmark-text navicon" },
  { href: "#portfolio", label: "Portfolio", icon: "bi-images navicon" },
  { href: "#services", label: "Services", icon: "bi-hdd-stack navicon" },
  { href: "#contact", label: "Contact", icon: "bi-envelope navicon" },
  {
    href: "/blog",
    label: "Blog",
    icon: "bi-menu-button navicon",
    children: [
      { href: "#", label: "Dropdown 1" },
      {
        href: "#",
        label: "Deep Dropdown",
        children: [
          { href: "#", label: "Deep Dropdown 1" },
          { href: "#", label: "Deep Dropdown 2" },
          { href: "#", label: "Deep Dropdown 3" },
          { href: "#", label: "Deep Dropdown 4" },
          { href: "#", label: "Deep Dropdown 5" },
        ],
      },
      { href: "#", label: "Dropdown 2" },
      { href: "#", label: "Dropdown 3" },
      { href: "#", label: "Dropdown 4" },
    ],
  },  
];

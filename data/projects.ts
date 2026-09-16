export type PortfolioCategory = "app" | "product" | "branding" | "books";

export interface PortfolioItem {
  slug: string;
  title: string;
  category: PortfolioCategory;
  description: string;
  image: string;
  gallery: string;
  details?: {
    client?: string;
    projectDate?: string;
    projectUrl?: string;
    fullDescription?: string;
  };
}

export const portfolio: PortfolioItem[] = [
  {
    slug: "app-1",
    title: "App 1",
    category: "app",
    description: "Lorem ipsum, dolor sit amet consectetur",
    image: "/img/portfolio/app-1.jpg",
    gallery: "portfolio-gallery-app",
  },
  {
    slug: "product-1",
    title: "Product 1",
    category: "product",
    description: "Lorem ipsum, dolor sit amet consectetur",
    image: "/img/portfolio/product-1.jpg",
    gallery: "portfolio-gallery-product",
  },
  {
    slug: "branding-1",
    title: "Branding 1",
    category: "branding",
    description: "Lorem ipsum, dolor sit amet consectetur",
    image: "/img/portfolio/branding-1.jpg",
    gallery: "portfolio-gallery-branding",
  },
  {
    slug: "books-1",
    title: "Books 1",
    category: "books",
    description: "Lorem ipsum, dolor sit amet consectetur",
    image: "/img/portfolio/books-1.jpg",
    gallery: "portfolio-gallery-book",
  },
  {
    slug: "app-2",
    title: "App 2",
    category: "app",
    description: "Lorem ipsum, dolor sit amet consectetur",
    image: "/img/portfolio/app-2.jpg",
    gallery: "portfolio-gallery-app",
  },
  {
    slug: "product-2",
    title: "Product 2",
    category: "product",
    description: "Lorem ipsum, dolor sit amet consectetur",
    image: "/img/portfolio/product-2.jpg",
    gallery: "portfolio-gallery-product",
  },
  {
    slug: "branding-2",
    title: "Branding 2",
    category: "branding",
    description: "Lorem ipsum, dolor sit amet consectetur",
    image: "/img/portfolio/branding-2.jpg",
    gallery: "portfolio-gallery-branding",
  },
  {
    slug: "books-2",
    title: "Books 2",
    category: "books",
    description: "Lorem ipsum, dolor sit amet consectetur",
    image: "/img/portfolio/books-2.jpg",
    gallery: "portfolio-gallery-book",
  },
  {
    slug: "app-3",
    title: "App 3",
    category: "app",
    description: "Lorem ipsum, dolor sit amet consectetur",
    image: "/img/portfolio/app-3.jpg",
    gallery: "portfolio-gallery-app",
  },
  {
    slug: "product-3",
    title: "Product 3",
    category: "product",
    description: "Lorem ipsum, dolor sit amet consectetur",
    image: "/img/portfolio/product-3.jpg",
    gallery: "portfolio-gallery-product",
  },
  {
    slug: "branding-3",
    title: "Branding 3",
    category: "branding",
    description: "Lorem ipsum, dolor sit amet consectetur",
    image: "/img/portfolio/branding-3.jpg",
    gallery: "portfolio-gallery-branding",
  },
  {
    slug: "books-3",
    title: "Books 3",
    category: "books",
    description: "Lorem ipsum, dolor sit amet consectetur",
    image: "/img/portfolio/books-3.jpg",
    gallery: "portfolio-gallery-book",
  },
];

export const portfolioCategories: { id: PortfolioCategory | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "app", label: "App" },
  { id: "product", label: "Product" },
  { id: "branding", label: "Branding" },
  { id: "books", label: "Books" },
];

export function getProjectBySlug(slug: string): PortfolioItem | undefined {
  return portfolio.find((p) => p.slug === slug);
}

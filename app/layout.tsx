import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollTop from "@/components/layout/ScrollTop";
import Preloader from "@/components/layout/Preloader";
import "./globals.css";

const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-raleway",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://haleymhidalgom.vercel.app"),
  title: "Haleym Hidalgo M — Lead Tech, Full stack Developer, Freelancer",
  description:
    "Personal portfolio of Haleym Hidalgo M. UI/UX Designer & Web Developer showcasing resume, projects, services, and contact information.",
  keywords: ["portfolio", "developer", "full stack", "lead tech", "haleym hildago"],
  openGraph: {
    title: "Haleym Hidalgo M — Portfolio",
    description: "Lead Tech, Full stack Developer, Freelancer",
    type: "website",
    images: [{ url: "/img/my-profile-img.jpg" }],
  },
  icons: {
    icon: "/img/favicon.png",
    apple: "/img/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={raleway.variable}>
      <body className="bg-background text-foreground antialiased">
        <Preloader />
        <Header />
        <main className="main xl:ml-[300px]">{children}</main>
        <Footer />
        <ScrollTop />
      </body>
    </html>
  );
}

// Importing necessary dependencies and components
import type { Metadata, Viewport } from "next";
import { DM_Sans } from "next/font/google";

import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

import "@/app/globals.css";

// Loading the DM Sans font with a Latin subset
const dmSans = DM_Sans({ subsets: ["latin"] });

// Viewport data for the page
export const viewport: Viewport = {
  themeColor: "#ff5956",
  colorScheme: "dark",
};

// Metadata for the page
export const metadata: Metadata = {
  title: "Anime Vault",
  description: "Your favorite anime, all in one place.",
  authors: {
    name: "Sanidhya Kumar Verma",
    url: "sanidhy.me",
  },
  keywords: [
    "html",
    "css",
    "react",
    "reactjs",
    "anime",
    "anime website",
    "infinite scroll",
    "api",
    "framer motion",
    "3d animations",
    "modern",
    "modern ui",
    "modern ux",
    "tailwindcss",
    "javascript",
    "js",
  ],
};

// Root layout component for the entire application
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // HTML document structure
    <html lang="en">
      {/* Body of the HTML document */}
      <body className={dmSans.className}>
        {/* Main content container */}
        <main className="max-w-7xl mx-auto bg-[#0F1117]">
          {/* Hero section at the top of the page */}
          <Hero />
          {/* Children components - the dynamic content of the page */}
          {children}
          {/* Footer section at the bottom of the page */}
          <Footer />
        </main>
      </body>
    </html>
  );
}

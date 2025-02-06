import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@heroui/link";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

// export const metadata: Metadata = {
//   title: {
//     default: siteConfig.name,
//     template: `%s - ${siteConfig.name}`,
//   },
//   description: siteConfig.description,
//   icons: {
//     icon: "/favicon.ico",
//   },
// };


export const metadata = {
  title:
    "Prymal Livestock Solutions Ltd - Best Services for Livestock Management",
  description:
    "Manage your livestock efficiently with real-time health tracking, financial insights, and breeding management. Stay ahead with smart farm management tools.",
  keywords: [
    "livestock",
    "livestock management",
    "farm management software",
    "cattle tracking",
    "animal health monitoring",
    "financial insights for farms",
  ],
  authors: [
    {
      name: "Prymal Livestock Solutions Ltd. ",
      url: "https://yourwebsite.com",
    },
    {
      name: "Kwesi Hervie",
      url: "https://khervie00.vercel.app",
    },
  ],
  openGraph: {
    title: "Prymal Livestock Solutions Ltd - Best Livestock Management Tool",
    description:
      "Optimize your farm with cutting-edge livestock management features. Track health, breeding, and finances all in one place.",
    url: "https://yourwebsite.com",
    siteName: "Prymal Livestock Solutions Ltd",
    images: [
      {
        url: "https://yourwebsite.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Livestock management dashboard preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prymal Livestock Solutions Ltd - Manage Your Livestock Smarter",
    description:
      "Track and manage your farm with ease using our advanced livestock management software.",
    images: ["https://yourwebsite.com/twitter-image.jpg"],
    creator: "@yourtwitterhandle",
  },
  metadataBase: new URL("https://yourwebsite.com"),
  alternates: {
    canonical: "https://yourwebsite.com",
  },
};


export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-white font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className="container mx-auto max-w-7xl px-6 flex-grow">
              {children}
            </main>
     <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}

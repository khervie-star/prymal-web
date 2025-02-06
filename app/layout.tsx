import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
// import { Link } from "@heroui/link";
import clsx from "clsx";

import { Providers } from "./providers";

// import { siteConfig } from "@/config/site";
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

// export const metadata = {
//   title:
//     "Prymal Livestock Solutions Ltd - Best Services for Livestock Management",
//   description:
//     "Manage your livestock efficiently with real-time health tracking, financial insights, and breeding management. Stay ahead with smart farm management tools.",
//   keywords: [
//     "livestock",
//     "livestock management",
//     "farm management software",
//     "cattle tracking",
//     "animal health monitoring",
//     "financial insights for farms",
//   ],
//   authors: [
//     {
//       name: "Prymal Livestock Solutions Ltd. ",
//       url: "https://yourwebsite.com",
//     },
//     {
//       name: "Kwesi Hervie",
//       url: "https://khervie00.vercel.app",
//     },
//   ],
//   openGraph: {
//     title: "Prymal Livestock Solutions Ltd - Best Livestock Management Tool",
//     description:
//       "Optimize your farm with cutting-edge livestock management features. Track health, breeding, and finances all in one place.",
//     url: "https://yourwebsite.com",
//     siteName: "Prymal Livestock Solutions Ltd",
//     images: [
//       {
//         url: "/og.jpg",
//         width: 1200,
//         height: 630,
//         alt: "Livestock management dashboard preview",
//       },
//     ],
//     type: "website",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Prymal Livestock Solutions Ltd - Manage Your Livestock Smarter",
//     description:
//       "Track and manage your farm with ease using our advanced livestock management software.",
//     images: ["https://yourwebsite.com/twitter-image.jpg"],
//     creator: "@yourtwitterhandle",
//   },
//   metadataBase: new URL("https://yourwebsite.com"),
//   alternates: {
//     canonical: "https://yourwebsite.com",
//   },
// };

export const metadata: Metadata = {
  title: "Prymal Livestock Solutions Ltd - Streamline Your Farm Operations",
  description:
    "Revolutionize your livestock management with our cutting-edge app. Monitor herd health, track finances, and make data-driven decisions for your farm in Nigeria.",
  keywords: [
    "livestock",
    "livestock management",
    "farm management app",
    "Nigeria farming",
    "herd health tracking",
    "agricultural technology",
    "livestock productivity",
  ],
  authors: [
    {
      name: "Prymal Livestock Solutions Ltd",
      url: "https://prymal-livestock-solutions.vercel.app",
    },
  ],
  openGraph: {
    title: "Prymal Livestock Solutions Ltd - Streamline Your Farm Operations",
    description:
      "Revolutionize your livestock management with our cutting-edge app. Monitor herd health, track finances, and make data-driven decisions for your farm in Nigeria.",
    url: "https://prymal-livestock-solutions.vercel.app",
    siteName: "Prymal Livestock Solutions Ltd",
    images: [
      {
        url: "https://prymal-livestock-solutions.vercel.app/og.jpg", // Replace with your OpenGraph image URL
        width: 1200,
        height: 630,
        alt: "Prymal Livestock Solutions Ltd - Streamline Your Farm Operations",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prymal Livestock Solutions Ltd - Streamline Your Farm Operations",
    description:
      "Revolutionize your livestock management with our cutting-edge app. Monitor herd health, track finances, and make data-driven decisions for your farm in Nigeria.",
    images: ["https://prymal-livestock-solutions.vercel.app/og.jpg"], // Replace with your Twitter image URL
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico", // Replace with your favicon path
    shortcut: "/favicon-16x16.png", // Replace with your shortcut icon path
    apple: "/apple-touch-icon.png", // Replace with your Apple touch icon path
  },
  manifest: "https://prymal-livestock-solutions.vercel.app/site.webmanifest", // Replace with your manifest file URL
  metadataBase: new URL("https://prymal-livestock-solutions.vercel.app"), // Replace with your website URL
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
          fontSans.variable
        )}>
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          {children}
   
        </Providers>
      </body>
    </html>
  );
}

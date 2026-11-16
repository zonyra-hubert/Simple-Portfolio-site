import type { Metadata, Viewport } from "next";
import { Montserrat, Open_Sans, Raleway } from "next/font/google";
import { seo, siteUrl } from "@/components/site";
import { profile } from "@/components/content";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-open-sans",
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-raleway",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: seo.title,
    template: `%s | ${seo.shortTitle}`,
  },
  description: seo.description,
  keywords: seo.keywords,
  applicationName: seo.shortTitle,
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: "/",
    siteName: seo.shortTitle,
    title: seo.title,
    description: seo.description,
    locale: "en_GB",
    firstName: profile.firstName,
    lastName: "Zonyra",
    username: "zonyra-hubert",
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    creator: "@ZonyraHubert",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/profile1.jpg", // Path relative to /public
    apple: "/profile1.jpg",
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0b0b",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${openSans.variable} ${raleway.variable} scroll-smooth`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}

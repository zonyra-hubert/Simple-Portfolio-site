import type { Metadata } from "next";
import { Montserrat, Open_Sans, Raleway } from "next/font/google";
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
  title: "Hubert | Portfolio",
  description: "Zonyra Hubert - Frontend Engineer & Full-Stack Developer",
  icons: {
    icon: "/profile1.jpg", // Path relative to /public
  },
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

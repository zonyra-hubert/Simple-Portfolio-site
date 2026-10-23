import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body className="antialiased bg-[#1c2b3a]">{children}</body>
    </html>
  );
}

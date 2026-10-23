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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-[#1c2b3a]">{children}</body>
    </html>
  );
}

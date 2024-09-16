import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
// import Image from "next/image";
import Header from "./components/Header";
import Footer from './components/footer'
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Samuel's Portfolio",
  description: "portfolio",
};

const logoUrl = "/app/images/logo.png";
const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Projects", href: "/projects" },
  { label: "Resume", href: "/resume" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header logo={logoUrl} navItems={navItems} />

        {children}
      <Footer />
      </body>
    </html>
  );
}

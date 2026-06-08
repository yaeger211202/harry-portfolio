import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Harry Kakadiya — Backend Engineer & AI Developer",
  description:
    "Computer Science student at San Francisco State University focused on backend engineering, distributed systems, cloud infrastructure, and AI applications.",
  keywords: [
    "Harry Kakadiya",
    "Harekrishna Kakadiya",
    "Backend Engineer",
    "AI Developer",
    "SFSU",
    "Software Engineer",
    "Portfolio",
    "Node.js",
    "TypeScript",
    "PostgreSQL",
  ],
  authors: [{ name: "Harry Kakadiya" }],
  openGraph: {
    title: "Harry Kakadiya — Backend Engineer & AI Developer",
    description:
      "CS @ SFSU '26 | Building scalable backend systems and AI-powered applications.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harry Kakadiya — Backend Engineer & AI Developer",
    description: "CS @ SFSU '26 | Backend Engineer | AI Developer",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-white`}
        style={{ background: "#070b14" }}
      >
        {children}
      </body>
    </html>
  );
}

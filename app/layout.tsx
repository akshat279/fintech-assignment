import type { Metadata } from "next";
import { Inter } from "next/font/google"; // 1. Import the font
import "./globals.css";

const inter = Inter({ subsets: ["latin"] }); // 2. Configure it

export const metadata: Metadata = {
  title: "Fintech App",
  description: "Financial Infrastructure for the Future",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* 3. Apply it to the body */}
      <body className={inter.className}>{children}</body>
    </html>
  );
}
import Navbar from "@/Components/Navbar";
import { Inter } from "next/font/google";
import "slick-carousel/slick/slick.css";
import type { Metadata } from "next";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Full Stack Next E-Commerce Sanity App",
  description: "Full Stack Next E-Commerce Sanity App"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
};
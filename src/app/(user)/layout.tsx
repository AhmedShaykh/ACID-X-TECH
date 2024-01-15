import PageButton from "@/Components/PageButton";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "slick-carousel/slick/slick.css";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Full Stack Next E-Commerce Sanity App"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <PageButton />
        {children}
        <Footer />
      </body>
    </html>
  )
};
import PageButton from "@/Components/PageButton";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import { Inter } from "next/font/google";
import Layout from "@/Components/Layout";
import { Toaster } from "react-hot-toast";
import "slick-carousel/slick/slick.css";
import type { Metadata } from "next";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Full Stack Next E-Commerce Sanity App",
  description: "Full Stack Next E-Commerce Sanity App"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>
          <Navbar />
          <PageButton />
          <Toaster
            position="bottom-right"
            reverseOrder={true}
            toastOptions={{
              style: {
                background: "#000",
                color: "#fff"
              }
            }}
          />
          {children}
          <Footer />
        </Layout>
      </body>
    </html >
  )
};
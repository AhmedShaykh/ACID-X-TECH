import Provider from "@/Providers/Provider";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import ToasterProvider from "@/Providers/ToasterProvider";
import type { Metadata } from "next";
import "./../globals.css";

export const metadata: Metadata = {
  title: "ACID X TECH 🚀",
  description: "ACID X TECH",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <link href="https://fonts.googleapis.com/css2?family=Orbitron&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet" />
      <body>
        <Provider>
          <ToasterProvider />
          <Navbar />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  )
};
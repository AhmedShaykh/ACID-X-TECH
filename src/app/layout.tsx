import Provider from "@/Components/Provider";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ACID X TECH",
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
      <body className="dark:bg-gray-900">
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  )
};
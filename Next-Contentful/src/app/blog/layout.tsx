import Provider from "@/Providers/Provider";
import Nav from "@/Components/Nav";
import type { Metadata } from "next";
import "./../globals.css";

export const metadata: Metadata = {
    title: "Next.JS Contentful",
    description: "Next.JS Contentful"
};

export default function BlogLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet" />
            <body>
                <Provider>
                    <Nav>
                        {children}
                    </Nav>
                </Provider>
            </body>
        </html>
    )
};
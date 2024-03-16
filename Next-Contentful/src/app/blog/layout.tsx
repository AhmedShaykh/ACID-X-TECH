import Provider from "@/Providers/Provider";
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
            <body>
                <Provider>
                    {children}
                </Provider>
            </body>
        </html>
    )
};
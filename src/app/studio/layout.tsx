export const metadata = {
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
      <body>{children}</body>
    </html>
  )
};
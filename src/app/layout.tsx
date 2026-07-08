import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alin Zohari | Geospatial Portfolio",
  description: "Geospatial projects, software engineering work, and applied machine learning case studies."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

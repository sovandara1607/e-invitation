import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wedding Invitation",
  description: "You are invited to celebrate the wedding of Sophia and Andre",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}

import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "សុគ្រីវ & ចំលើយ | Wedding Invitation",
  description: "You are cordially invited to celebrate our wedding day",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#0A4D3C",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="km" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}

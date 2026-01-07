import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ពិធីភ្ជាប់ពាក្យ | សុភា & វិសាល",
  description: "សូមអញ្ជើញចូលរួមពិធីភ្ជាប់ពាក្យរបស់យើងខ្ញុំ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="km" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}

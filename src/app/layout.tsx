import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "60-Day Job Offer Challenge | Job Search in Korea",
  description: "A structured program with weekly coaching designed for foreigners serious about getting hired in Korea.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} text-slate-900 bg-white antialiased`}>{children}</body>
    </html>
  );
}

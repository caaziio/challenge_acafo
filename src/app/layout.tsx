import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "60-Day Job Offer Challenge | Job Search in Korea",
  description: "A structured program with weekly coaching designed for foreigners serious about getting hired in Korea.",
  icons: {
    icon: "/flavi_acafo.png",
  },
  openGraph: {
    title: "60-Day Job Offer Challenge | Job Search in Korea",
    description: "A structured program with weekly coaching designed for foreigners serious about getting hired in Korea.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Acafo 60-Day Job Challenge Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "60-Day Job Offer Challenge | Job Search in Korea",
    description: "A structured program with weekly coaching designed for foreigners serious about getting hired in Korea.",
    images: ["/og-image.png"],
  },
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

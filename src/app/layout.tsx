import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

/**
 * Font optimization
 * - display: swap prevents layout shift
 * - variable enables CSS font variables
 */
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

/**
 * SEO + Metadata optimization
 */
export const metadata: Metadata = {
  title: {
    default: "Lama Dev E-Commerce",
    template: "%s | Lama Dev E-Commerce",
  },
  description: "A complete, modern e-commerce application built with Next.js and Wix",
  applicationName: "Lama Dev E-Commerce",
  keywords: [
    "Next.js",
    "E-Commerce",
    "Wix",
    "React",
    "Web Store",
  ],
  authors: [{ name: "Lama Dev" }],
  creator: "Lama Dev",
  metadataBase: new URL("https://your-domain.com"),
  openGraph: {
    title: "Lama Dev E-Commerce",
    description: "Modern e-commerce platform built with Next.js and Wix",
    type: "website",
    locale: "en_US",
    siteName: "Lama Dev E-Commerce",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lama Dev E-Commerce",
    description: "Modern e-commerce platform built with Next.js and Wix",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://fromourlab.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "FromOurLab — Built by designers. Made for designers.",
    template: "%s — FromOurLab",
  },
  description:
    "Professional tools that help designers build better products. File Weight Analyzer, Plugin Organizer, and more from FromOurLab.",
  keywords: [
    "FromOurLab",
    "Figma tools",
    "designer tools",
    "File Weight Analyzer",
    "Plugin Organizer",
    "Figma plugins",
  ],
  openGraph: {
    title: "FromOurLab — Built by designers. Made for designers.",
    description:
      "Professional tools that help designers build better products.",
    url: siteUrl,
    siteName: "FromOurLab",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FromOurLab — Built by designers. Made for designers.",
    description:
      "Professional tools that help designers build better products.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full dark antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}

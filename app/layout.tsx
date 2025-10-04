import type { Metadata } from "next";
import { Geist, Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Footwork: Train Soccer Better - #1 Soccer Training App",
  description: "Footwork is the leading soccer training app helping 90+ players in America and Europe train soccer smarter and better. Get personalized training plans, drill library, and track your progress with the best soccer training app.",
  keywords: [
    "footwork",
    "footwork train soccer better",
    "soccer training app",
    "soccer training",
    "soccer drills",
    "soccer practice",
    "football training",
    "soccer skills",
    "personal soccer trainer",
    "soccer training plan",
    "soccer app",
    "football app",
    "soccer coaching",
    "youth soccer training",
    "soccer development"
  ],
  authors: [{ name: "Footwork" }],
  creator: "Footwork",
  publisher: "Footwork",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://footwork.app",
    title: "Footwork: Train Soccer Better - #1 Soccer Training App",
    description: "The leading soccer training app helping 90+ players in America and Europe train soccer smarter and better. Get personalized training plans and track your progress.",
    siteName: "Footwork",
    images: [
      {
        url: "/footworklogo.png",
        width: 1200,
        height: 630,
        alt: "Footwork: Train Soccer Better - Soccer Training App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Footwork: Train Soccer Better - #1 Soccer Training App",
    description: "The leading soccer training app helping 90+ players train soccer smarter and better.",
    images: ["/footworklogo.png"],
  },
  icons: {
    icon: [
      { url: "/icon.png?v=1", sizes: "32x32", type: "image/png" },
      { url: "/icon.png?v=1", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/icon.png?v=1",
    apple: "/icon.png?v=1",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MobileApplication",
              "name": "Footwork: Train Soccer Better",
              "description": "The leading soccer training app helping 90+ players in America and Europe train soccer smarter and better. Get personalized training plans, drill library, and track your progress.",
              "url": "https://footwork.app",
              "applicationCategory": "SportsApplication",
              "operatingSystem": ["iOS", "Android"],
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "90"
              },
              "author": {
                "@type": "Organization",
                "name": "Footwork"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Footwork"
              },
              "keywords": "soccer training, football training, soccer drills, soccer practice, soccer skills, personal soccer trainer, soccer training plan, soccer app, football app, soccer coaching, youth soccer training, soccer development"
            })
          }}
        />
      </head>
      <body
        className={`${plusJakartaSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

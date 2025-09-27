import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Infrava Labs | Build Professional Websites Fast & Easy",
  description:
    "Infrava Labs helps you take your business online with professional websites—built fast, modern, and optimized for growth.",
  keywords: [
    "Infrava Labs",
    "Website Development",
    "Business Website",
    "Professional Website",
    "Web Design Bali",
  ],
  openGraph: {
    title: "Infrava Labs | Build Professional Websites Fast & Easy",
    description:
      "Take your business online with Infrava Labs. We create professional websites for your business—fast and easy.",
    url: "https://www.infrava.com",
    siteName: "Infrava Labs",
    images: [
      {
        url: "/icon.png", // tetap pakai logo untuk share/og:image
        width: 1200,
        height: 630,
        alt: "Infrava Labs Website Development",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Infrava Labs | Build Professional Websites Fast & Easy",
    description:
      "We create professional websites for your business—fast and easy.",
    images: ["/logo.png"],
  },
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" }, // hasil rename dari logo.png
    ],
  },
  metadataBase: new URL("https://www.infrava.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Infrava Labs",
              url: "https://www.infrava.com",
              logo: "https://www.infrava.com/logo.png",
              sameAs: [
                "https://www.facebook.com/infrava",
                "https://www.instagram.com/infrava",
                "https://www.linkedin.com/company/infrava",
              ],
            }),
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

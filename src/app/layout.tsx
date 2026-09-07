import type { Metadata, Viewport } from "next";
import {
  Archivo_Black,
  Bungee,
  Space_Grotesk,
  Space_Mono,
} from "next/font/google";
import "./globals.css";

const bungee = Bungee({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bungee",
});

const archivo = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-archivo",
});

const grotesk = Space_Grotesk({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-grotesk",
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
});

const siteTitle = "DINK OR DRINK — Chestine’s Pickle Party";
const siteTagline =
  "A Golden play — come for the dink, stay for the drink.";
const siteDescription = `${siteTagline} Open the invitation: Chestine’s Pickle Party. Dink. Drink. Repeat.`;

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://pickleparty.vercel.app",
  ),
  title: {
    default: siteTitle,
    template: "%s · DINK OR DRINK",
  },
  description: siteDescription,
  applicationName: "DINK OR DRINK",
  keywords: [
    "pickleball",
    "pickle party",
    "Chestine",
    "RSVP",
    "dink or drink",
    "birthday",
  ],
  authors: [{ name: "Chestine’s Pickle Party" }],
  creator: "Chestine’s Pickle Party",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    title: siteTitle,
    description: siteTagline,
    siteName: "DINK OR DRINK",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 1200,
        alt: "Pickleball paddle — DINK OR DRINK",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteTagline,
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ccff00" },
    { media: "(prefers-color-scheme: dark)", color: "#0b2ca8" },
  ],
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${bungee.variable} ${archivo.variable} ${grotesk.variable} ${spaceMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-bone text-ink">{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Himorix - Future-Ready Digital Solutions | Software Development Company",
    template: "%s | Himorix",
  },
  description: "Himorix is a leading software development company specializing in custom software, web development, mobile apps, cloud solutions, cybersecurity, and AI. Build your digital future with Himorix.",
  keywords: [
    "Himorix", "himorix", "software development", "web development", "mobile app development",
    "cloud solutions", "cybersecurity", "custom software", "digital transformation",
    "UI/UX design", "data analytics", "AI solutions", "IT company", "tech company",
    "software company", "Himorix company", "himorix.com",
  ],
  authors: [{ name: "Himorix", url: "https://himorix.com" }],
  creator: "Himorix",
  publisher: "Himorix",
  metadataBase: new URL("https://himorix.com"),
  alternates: {
    canonical: "https://himorix.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://himorix.com",
    siteName: "Himorix",
    title: "Himorix - Future-Ready Digital Solutions",
    description: "Himorix is a leading software development company specializing in custom software, web development, mobile apps, cloud solutions, cybersecurity, and AI.",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "Himorix Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Himorix - Future-Ready Digital Solutions",
    description: "Leading software development company — custom software, web & mobile apps, cloud, cybersecurity, AI.",
    images: ["/logo.png"],
  },
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
  verification: {
    google: "7EuWzq2VDQmLABVaQOUhead-ZKmE35TInB1jpWTcx5k",
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
              "@type": "Organization",
              name: "Himorix",
              url: "https://himorix.com",
              logo: "https://himorix.com/logo.png",
              description: "Himorix is a leading software development company specializing in custom software, web development, mobile apps, cloud solutions, cybersecurity, and AI.",
              sameAs: [],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                url: "https://himorix.com/contact",
              },
              foundingDate: "2018",
              numberOfEmployees: {
                "@type": "QuantitativeValue",
                value: 50,
              },
              knowsAbout: [
                "Custom Software Development",
                "Web Application Development",
                "Mobile App Development",
                "Cloud Solutions",
                "Cybersecurity",
                "Data Analytics",
                "AI Solutions",
                "UI/UX Design",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} h-full antialiased min-h-full flex flex-col`}
      >
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}

import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#070709",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://fivestarjeweler.com"),
  title: {
    default: "FIVESTAR JEWELER | The Difference Is In The Quality | NYC Diamond District",
    template: "%s | FIVESTAR JEWELER NYC",
  },
  description:
    "Custom Jewelry & Diamond Specialist located in the NYC Diamond District on 47th St. Master artisans handcrafting bespoke diamond Cuban chains, engagement rings, statement earrings, and curated Swiss luxury timepieces. By private appointment.",
  keywords: [
    "Fivestar Jeweler",
    "NYC Diamond District",
    "47th Street Jeweler",
    "Custom Jewelry NYC",
    "Diamond Specialist NYC",
    "Diamond Cuban Link Chain",
    "Miami Cuban Link Chain",
    "Custom Engagement Rings NYC",
    "Diamond Earrings NYC",
    "Luxury Watches NYC Diamond District",
    "Bespoke Jewelry Manhattan",
    "GIA Certified Diamonds NYC",
  ],
  authors: [{ name: "FIVESTAR JEWELER" }],
  creator: "FIVESTAR JEWELER",
  publisher: "FIVESTAR JEWELER",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://fivestarjeweler.com",
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
  icons: {
    icon: "/images/logo.jpg",
    apple: "/images/logo.jpg",
  },
  openGraph: {
    title: "FIVESTAR JEWELER | Custom Jewelry & Diamond Specialist • NYC 47th St",
    description: "The Difference Is In The Quality. Bespoke Diamond Chains, Engagement Rings, Statement Earrings & Swiss Watches in the NYC Diamond District.",
    url: "https://fivestarjeweler.com",
    siteName: "FIVESTAR JEWELER",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "FIVESTAR JEWELER - NYC Diamond District Atelier",
      },
      {
        url: "/images/chains.jpg",
        width: 1200,
        height: 630,
        alt: "FIVESTAR JEWELER - Custom Diamond Cuban Chains",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FIVESTAR JEWELER | NYC Diamond District",
    description: "The Difference Is In The Quality. Custom Jewelry & Diamond Specialist on 47th St.",
    images: ["/images/hero.jpg"],
  },
};

// Rich Structured Data (JSON-LD) for LocalBusiness & JewelryStore
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "JewelryStore",
  name: "FIVESTAR JEWELER",
  image: "https://fivestarjeweler.com/images/hero.jpg",
  logo: "https://fivestarjeweler.com/images/logo.jpg",
  description:
    "Custom Jewelry & Diamond Specialist in the NYC Diamond District on 47th St. Handcrafted diamond Cuban chains, engagement rings, earrings, and luxury watches. By appointment.",
  url: "https://fivestarjeweler.com",
  telephone: "+1-212-555-0199",
  priceRange: "$$$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "West 47th Street, Diamond District",
    addressLocality: "New York",
    addressRegion: "NY",
    postalCode: "10036",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 40.7571,
    longitude: -73.9805,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "10:30",
      closes: "18:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "11:00",
      closes: "17:00",
    },
  ],
  sameAs: [
    "https://www.instagram.com/fivestarjeweler/",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Fine Jewelry & Bespoke Commissions",
    itemListElement: [
      {
        "@type": "OfferCatalog",
        name: "Custom Diamond Chains & Pendants",
      },
      {
        "@type": "OfferCatalog",
        name: "High Jewelry Diamond Rings",
      },
      {
        "@type": "OfferCatalog",
        name: "Statement Diamond Earrings",
      },
      {
        "@type": "OfferCatalog",
        name: "Curated Luxury Timepieces",
      },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "48",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,400&family=Montserrat:wght@200;300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="min-h-screen bg-[#070709] text-[#f3f3f5] antialiased selection:bg-white/20 selection:text-white font-sans"
      >
        {children}
      </body>
    </html>
  );
}

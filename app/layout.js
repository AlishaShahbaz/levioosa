import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LiquidGlassBg from "../components/LiquidGlassBg";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CartSidebar from "../components/CartSidebar";
import { CartProvider } from "../context/CartContext";
import { AppProvider } from "../context/AppContext";
import { AuthProvider } from "../context/AuthContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ SEO UPGRADED (REAL, NOT COSMETIC)
export const metadata = {
  metadataBase: new URL("https://levioosa.uk"),

  title: {
    default:
      "Levioosa UK – Luxury Women's Fusion Wear & Modern Fashion",
    template: "%s | Levioosa UK",
  },

  description:
    "Shop luxury women's fusion wear at Levioosa UK. Discover premium eastern and western fashion, modern silhouettes, modest luxury clothing, summer collections, and statement outfits designed for contemporary women.",

  keywords: [
    "Levioosa UK",
    "women fashion UK",
    "luxury women's clothing",
    "fusion wear women",
    "eastern western fusion fashion",
    "pakistani fashion brand",
    "modern modest fashion",
    "women luxury outfits",
    "designer women's wear",
    "summer collection women",
    "premium eastern wear",
    "western dresses women",
    "modest luxury fashion",
    "fashion boutique UK",
    "women clothing online",
    "trendy outfits women",
    "minimal luxury fashion",
    "fashion brand pakistan",
    "women co ord sets",
    "modern eastern wear",
  ],

  authors: [
    {
      name: "Levioosa",
      url: "https://levioosa.uk",
    },
  ],

  creator: "Levioosa",
  publisher: "Levioosa",

  category: "Fashion",

  alternates: {
    canonical: "https://levioosa.uk",
  },

  openGraph: {
    title:
      "Levioosa UK – Luxury Women's Fusion Fashion",

    description:
      "Discover premium fusion fashion for women. Eastern elegance meets western modernity at Levioosa UK.",

    url: "https://levioosa.uk",

    siteName: "Levioosa UK",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Levioosa Women's Fashion Collection",
      },
    ],

    locale: "en_GB",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Levioosa UK – Luxury Women's Fashion",

    description:
      "Luxury fusion wear for modern women. Discover Levioosa UK's latest fashion collections.",

    images: ["/og-image.jpg"],

    creator: "@levioosa.wear",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  verification: {
    google:
      "sBQOTMbhueFdHSHeQcc6t7-37Gx0cKZBt8UCEXlmf-I",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        {/* Google Search Console Verification */}
        <meta name="google-site-verification" content="sBQOTMbhueFdHSHeQcc6t7-37Gx0cKZBt8UCEXlmf-I" />
        {/* <!-- Google tag (gtag.js) --> */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-NDY45HDVVL"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-NDY45HDVVL');
    `,
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} bg-[#050505] text-white min-h-screen flex flex-col`}>
        <AuthProvider>
          <AppProvider>
            <CartProvider>

              <Navbar />
              <CartSidebar />
              <LiquidGlassBg />

              {/* ✅ STRUCTURED DATA (BIG SEO BOOST) */}
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    "@context": "https://schema.org",

                    "@type": "ClothingStore",

                    name: "Levioosa UK",

                    image:
                      "https://levioosa.uk/og-image.jpg",

                    url: "https://levioosa.uk",

                    logo:
                      "https://levioosa.uk/logo.png",

                    description:
                      "Luxury women's fusion wear brand blending eastern elegance with western silhouettes.",

                    brand: {
                      "@type": "Brand",
                      name: "Levioosa",
                    },

                    sameAs: [
                      "https://www.instagram.com/levioosa.wear",
                      "https://www.tiktok.com/@levioosa.wear",
                      "https://www.facebook.com/share/18bLmmmcp6/",
                    ],

                    contactPoint: {
                      "@type": "ContactPoint",
                      contactType: "customer support",
                      availableLanguage: [
                        "English",
                      ],
                    },

                    address: {
                      "@type": "PostalAddress",
                      addressCountry: "UK",
                    },
                  }),
                }}
              />

              <main className="relative z-10 flex-grow bg-transparent">
                {children}
              </main>

              <Footer />

            </CartProvider>
          </AppProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
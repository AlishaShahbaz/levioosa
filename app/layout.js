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
  metadataBase: new URL('https://levioosa.uk'),

  title: {
    default: "Levioosa – Women's Western & Eastern Fusion Wear",
    template: "%s | Levioosa"
  },
  description:
    "Levioosa is a modern women's fashion brand blending western silhouettes with eastern elegance. Discover the Summer 2026 collection launching May 10.",

  keywords: [
    "women western wear",
    "fusion clothing women",
    "pakistani western dresses",
    "eastern western fusion wear",
    "summer outfits for women 2026",
    "levioosa clothing",
    "women fashion brand pakistan",
    "modern eastern wear"
  ],

  authors: [{ name: "Alishah Shahbaz" }],
  creator: "Alishah Shahbaz",
  publisher: "Levioosa",

  openGraph: {
    title: "Levioosa Summer '26 – Western × Eastern Fusion",
    description:
      "Step into bold summer fashion. Fusion wear designed for modern women. Summer '26 drops May 10.",
    url: "https://levioosa.uk",
    siteName: "Levioosa",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Levioosa Summer Collection",
      },
    ],
    locale: "en_GB",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Levioosa Summer Drop – 10 May",
    description:
      "Western cuts. Eastern soul. Discover Levioosa's Summer 2026 collection.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
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
                    "@type": "ClothingBrand",
                    name: "Levioosa",
                    url: "https://levioosa.uk",
                    logo: "https://levioosa.uk/logo.png",
                    sameAs: [
                      "https://instagram.com/levioosa.uk"
                    ],
                    description:
                      "Modern women's fashion brand blending western and eastern styles. Summer 2026 collection launching May 10."
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
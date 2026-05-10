"use client";
import React, { createContext, useState, useEffect, useContext, useCallback } from 'react';

// Static central database array for Levioosa
export const LEVIOOSA_ARTICLES = 
[
  {
    id: "azure-meadow",
    title: "Azure Meadow",
    price: "Rs. 6,999",
    category: "Chiffon",
    image: "/DSC08881.webp",
    images: [
      "/DSC08881.webp",
      "/DSC088181.webp",
      "/DSC088172.webp",
      "/DSC08836.webp"
    ],
    description: "Crafted from premium breathable chiffon with a soft inner lining, Azure Meadow is designed for effortless elegance. Featuring a flattering V-neckline, delicate front button detailing, and vintage-inspired puff sleeves, this flowing A-line silhouette brings grace and sophistication to every occasion.",
    details: [
      "Premium breathable chiffon fabric",
      "Soft and comfortable inner lining",
      "Elegant vintage-inspired puff sleeves",
      "Flattering A-line silhouette"
    ]
  },

  {
    id: "sage-whisper",
    title: "Sage Whisper",
    price: "Rs. 6,999",
    category: "Chiffon",
    image: "/DSC08961.webp",
    images: [
      "/DSC08961.webp",
      "/DSC08919.webp",
      "/DSC08921.webp",
      "/DSC08948.webp"
    ],
    description: "Sage Whisper blends modern sophistication with everyday comfort. Made from lightweight georgette with a soft flowing finish, this outfit features a refined high-neck collar, an elasticated waist for the perfect fit, and wide-leg trousers that create a timeless editorial-inspired look.",
    details: [
      "Lightweight premium georgette fabric",
      "Sophisticated high-neck collar design",
      "Comfort-fit elasticated waistline",
      "Flowing wide-leg trousers"
    ]
  },

  {
    id: "ivory-lace",
    title: "Ivory Lace",
    price: "Rs. 7,999",
    category: "Chikankari",
    image: "/DSC09012.webp",
    images: [
      "/DSC09012.webp",
      "/DSC09001.webp",
      "/DSC09002.webp",
      "/DSC08978.webp"
    ],
    description: "A timeless expression of understated luxury, Ivory Lace is crafted from pure cotton schifli with intricate chikankari-inspired embroidery. Designed with a relaxed silhouette, scalloped hemline, and tailored straight trousers, this set delivers effortless elegance perfect for warm summer days.",
    details: [
      "Pure cotton schifli fabric",
      "Intricate chikankari-inspired embroidery",
      "Elegant scalloped hemline",
      "Relaxed-fit straight trousers"
    ]
  },

  {
    id: "marigold-bloom",
    title: "Marigold Bloom",
    price: "Rs. 7,999",
    category: "Chikankari",
    image: "/DSC09123.webp",
    images: [
      "/DSC09123.webp",
      "/DSC09093.webp",
      "/DSC09114.webp",
      "/DSC09077.webp"
    ],
    description: "Bright, feminine, and effortlessly graceful — Marigold Bloom is crafted from premium cotton eyelet fabric for a breathable summer feel. Featuring delicate flutter sleeves, a structured collar design, and a flowing tiered silhouette, this statement set is made to stand out beautifully.",
    details: [
      "Premium breathable cotton eyelet fabric",
      "Feminine flutter sleeve detailing",
      "Elegant collar-style top",
      "Flowing tiered skirt-inspired silhouette"
    ]
  },

  {
    id: "forest-edge",
    title: "Forest Edge",
    price: "Rs. 7,499",
    category: "Cotton",
    image: "/DSC09138.webp",
    images: [
      "/DSC09138.webp",
      "/DSC09171.webp",
      "/DSC09172.webp",
      "/DSC09162.webp"
    ],
    description: "Forest Edge combines structure with sophistication. Tailored from premium Irish linen-inspired cotton, this outfit features utility-style flap details, statement contrast buttons, and a flowing pleated lower that creates a refined yet modern silhouette.",
    details: [
      "Premium Irish linen-inspired cotton",
      "Structured utility-style detailing",
      "Signature contrast button accents",
      "Elegant pleated flowing silhouette"
    ]
  },

  {
    id: "olive-muse",
    title: "Olive Muse",
    price: "Rs. 7,499",
    category: "Cotton",
    image: "/DSC09207.webp",
    images: [
      "/DSC09207.webp",
      "/DSC09191.webp",
      "/DSC09204.webp",
      "/DSC09184.webp"
    ],
    description: "Minimal yet expressive, Olive Muse is designed for effortless everyday elegance. Crafted from a soft linen-cotton blend, this full-length silhouette features subtle floral detailing on a rich olive base, creating a calm and refined luxury aesthetic.",
    details: [
      "Soft premium linen-cotton blend",
      "Minimalist round neckline design",
      "Exclusive deep olive floral print",
      "Fluid full-length silhouette"
    ]
  },

  {
    id: "voyager",
    title: "Voyager",
    price: "Rs. 7,499",
    category: "Cotton",
    image: "/DSC09232.webp",
    images: [
      "/DSC09232.webp",
      "/DSC09227.webp",
      "/DSC09239.webp",
      "/DSC09216.webp"
    ],
    description: "Inspired by timeless travel aesthetics, Voyager features a contemporary boxy silhouette paired with flowing high-waisted trousers. Crafted in soft premium fabric with an exclusive vintage-inspired print, this set delivers effortless sophistication with a modern artistic edge.",
    details: [
      "Premium soft-flow fabric finish",
      "Modern boxy-fit silhouette",
      "High-waisted wide-leg trousers",
      "Exclusive vintage-inspired print"
    ]
  },

  {
    id: "ruby-luxe",
    title: "Ruby Luxe",
    price: "Rs. 7,999",
    category: "Chikankari",
    image: "/DSC09301.webp",
    images: [
      "/DSC09301.webp",
      "/DSC09310.webp",
      "/DSC09330.webp",
      "/DSC09325.webp"
    ],
    description: "Bold yet elegant, Ruby Luxe is designed to make a statement through simplicity. Featuring a textured premium fabric, handcrafted tassel details, dramatic bell sleeves, and flowing wide-leg trousers, this monochromatic set captures timeless confidence and refined femininity.",
    details: [
      "Premium self-textured fabric",
      "Handcrafted tassel neckline detailing",
      "Statement bell sleeve silhouette",
      "Wide-leg monochromatic trousers"
    ]
  },

  {
    id: "sandstone",
    title: "Sandstone",
    price: "Rs. 7,499",
    category: "Cotton",
    image: "/DSC09253.webp",
    images: [
      "/DSC09253.webp",
      "/DSC09262.webp",
      "/DSC09286.webp",
      "/DSC09274.webp"
    ],
    description: "Clean, refined, and effortlessly modern — Sandstone is designed for elevated everyday wear. Featuring a premium polo-style neckline, soft neutral tones, and relaxed straight-fit trousers, this set reflects Levioosa’s signature quiet luxury aesthetic.",
    details: [
      "Soft premium cotton blend",
      "Minimal polo collar detailing",
      "Relaxed straight-fit trousers",
      "Signature neutral luxury tones"
    ]
  }
];

const AppContext = createContext();

/* ===============================
   PROVIDER
================================= */

export const AppProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  const [wishlistCount, setWishlistCount] = useState(0);
  const [loadingWishlist, setLoadingWishlist] = useState(true);

  /* ===============================
     FETCH WISHLIST
  ================================= */

  const fetchWishlist = useCallback(async () => {
    try {
      setLoadingWishlist(true);

      const response = await fetch("/api/wishlist", {
        method: "GET",
        cache: "no-store",
      });

      if (!response.ok) {
        throw new Error("Failed to fetch wishlist");
      }

      const data = await response.json();

      const safeData = Array.isArray(data) ? data : [];

      setWishlist(safeData);
      setWishlistCount(safeData.length);
    } catch (error) {
      console.error("Wishlist fetch error:", error);
      setWishlist([]);
      setWishlistCount(0);
    } finally {
      setLoadingWishlist(false);
    }
  }, []);

  /* ===============================
     INITIAL LOAD
  ================================= */

  useEffect(() => {
    fetchWishlist();
  }, [fetchWishlist]);

  /* ===============================
     UPDATE COUNT
  ================================= */

  const updateWishlistCount = async () => {
    await fetchWishlist();
  };

  /* ===============================
     REMOVE ITEM
  ================================= */

  const removeFromWishlist = async (id) => {
    try {
      const response = await fetch("/api/wishlist", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });

      if (!response.ok) {
        throw new Error("Failed to delete item");
      }

      // LOCAL UI UPDATE
      const updatedWishlist = wishlist.filter(
        (item) => item._id !== id && item.id !== id
      );

      setWishlist(updatedWishlist);
      setWishlistCount(updatedWishlist.length);
    } catch (error) {
      console.error("Remove wishlist error:", error);
    }
  };

  /* ===============================
     CONTEXT VALUES
  ================================= */

  return (
    <AppContext.Provider
      value={{
        products: LEVIOOSA_ARTICLES,

        // Wishlist
        wishlist,
        wishlistCount,
        loadingWishlist,

        // Functions
        fetchWishlist,
        updateWishlistCount,
        removeFromWishlist,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

/* ===============================
   CUSTOM HOOK
================================= */

export const useApp = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useApp must be used within AppProvider");
  }

  return context;
};
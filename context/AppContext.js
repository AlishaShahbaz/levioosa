"use client";
import React, { createContext, useState, useEffect, useContext, useCallback } from 'react';

// Static central database array for Levioosa
export const LEVIOOSA_ARTICLES = 
[
  {
    id: "azure-meadow",
    title: "Azure Meadow",
    price: "Rs. 5,999",
    category: "Chiffon",
    image: "/DSC08881.jpg",
    images: [
      "/DSC08881.jpg",
      "/DSC088181.jpg",
      "/DSC088172.jpg",
      "/DSC08836.jpg"
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
    price: "Rs. 5,999",
    category: "Chiffon",
    image: "/DSC08961.jpg",
    images: [
      "/DSC08961.jpg",
      "/DSC08919.jpg",
      "/DSC08921.jpg",
      "/DSC08948.jpg"
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
    price: "Rs. 6,999",
    category: "Chikankari",
    image: "/DSC09012.jpg",
    images: [
      "/DSC09012.jpg",
      "/DSC09001.jpg",
      "/DSC09002.jpg",
      "/DSC08978.jpg"
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
    price: "Rs. 6,999",
    category: "Chikankari",
    image: "/DSC09123.jpg",
    images: [
      "/DSC09123.jpg",
      "/DSC09093.jpg",
      "/DSC09114.jpg",
      "/DSC09077.jpg"
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
    price: "Rs. 6,499",
    category: "Cotton",
    image: "/DSC09138.jpg",
    images: [
      "/DSC09138.jpg",
      "/DSC09171.jpg",
      "/DSC09172.jpg",
      "/DSC09162.jpg"
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
    price: "Rs. 6,499",
    category: "Cotton",
    image: "/DSC09207.jpg",
    images: [
      "/DSC09207.jpg",
      "/DSC09191.jpg",
      "/DSC09204.jpg",
      "/DSC09184.jpg"
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
    price: "Rs. 6,499",
    category: "Cotton",
    image: "/DSC09232.jpg",
    images: [
      "/DSC09232.jpg",
      "/DSC09227.jpg",
      "/DSC09239.jpg",
      "/DSC09216.jpg"
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
    price: "Rs. 6,999",
    category: "Chikankari",
    image: "/DSC09301.jpg",
    images: [
      "/DSC09301.jpg",
      "/DSC09310.jpg",
      "/DSC09330.jpg",
      "/DSC09325.jpg"
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
    price: "Rs. 6,499",
    category: "Cotton",
    image: "/DSC09253.jpg",
    images: [
      "/DSC09253.jpg",
      "/DSC09262.jpg",
      "/DSC09286.jpg",
      "/DSC09274.jpg"
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
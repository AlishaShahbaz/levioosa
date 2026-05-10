"use client";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
  useCallback,
} from "react";

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  /* =========================
     FETCH CART
  ========================= */

  const fetchCart = useCallback(async () => {
    try {
      const res = await fetch("/api/cart", {
        cache: "no-store",
      });

      if (!res.ok) {
        throw new Error("Cart fetch failed");
      }

      const data = await res.json();

      setCart(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Cart fetch error:", error);
      setCart([]);
    } finally {
      setLoading(false);
    }
  }, []);

  /* =========================
     INITIAL FETCH
  ========================= */

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  /* =========================
     ADD TO CART
  ========================= */

  const addToCart = async (product) => {
    try {
      const res = await fetch("/api/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });

      if (!res.ok) {
        throw new Error("Add to cart failed");
      }

      const updatedItem = await res.json();

      setCart((prev) => {
        const existingIndex = prev.findIndex(
          (item) =>
            item.id === updatedItem.id &&
            item.size === updatedItem.size
        );

        if (existingIndex > -1) {
          const updatedCart = [...prev];
          updatedCart[existingIndex] = updatedItem;
          return updatedCart;
        }

        return [...prev, updatedItem];
      });

      setIsOpen(true);
    } catch (error) {
      console.error("Add cart error:", error);
    }
  };

  /* =========================
     REMOVE FROM CART
  ========================= */

  const removeFromCart = async (id, size) => {
    try {
      setCart((prev) =>
        prev.filter(
          (item) =>
            !(item.id === id && item.size === size)
        )
      );

      await fetch(`/api/cart?id=${id}&size=${size}`, {
        method: "DELETE",
      });
    } catch (error) {
      console.error("Remove cart error:", error);
    }
  };

  /* =========================
     CLEAR CART
  ========================= */

  const clearCart = async () => {
    try {
      setCart([]);

      await fetch("/api/cart", {
        method: "DELETE",
      });
    } catch (error) {
      console.error("Clear cart error:", error);
    }
  };

  /* =========================
     UPDATE QUANTITY
  ========================= */

  const updateQuantity = (id, size, delta) => {
    setCart((prev) =>
      prev.map((item) => {
        if (
          item.id === id &&
          item.size === size
        ) {
          return {
            ...item,
            quantity: Math.max(
              1,
              (item.quantity || 1) + delta
            ),
          };
        }

        return item;
      })
    );
  };

  /* =========================
     CLOSE CART
  ========================= */

  const closeCart = () => {
    setIsOpen(false);
  };

  /* =========================
     TOTAL PRICE
  ========================= */

  const cartTotal = cart.reduce((total, item) => {
    const rawPrice =
      typeof item.price === "string"
        ? parseFloat(
            item.price.replace(/[^0-9.]/g, "")
          )
        : item.price;

    return (
      total +
      (rawPrice || 0) * (item.quantity || 1)
    );
  }, 0);

  /* =========================
     TOTAL COUNT
  ========================= */

  const cartCount = cart.reduce(
    (total, item) =>
      total + (item.quantity || 1),
    0
  );

  /* =========================
     MEMOIZED VALUE
  ========================= */

  const value = useMemo(
    () => ({
      cart,
      loading,

      addToCart,
      removeFromCart,
      clearCart,
      updateQuantity,
      refreshCart: fetchCart,

      isOpen,
      setIsOpen,
      closeCart,

      cartTotal,
      cartCount,
    }),
    [
      cart,
      loading,
      isOpen,
      cartTotal,
      cartCount,
      fetchCart,
    ]
  );

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

/* =========================
   HOOK
========================= */

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCart must be used within CartProvider"
    );
  }

  return context;
};

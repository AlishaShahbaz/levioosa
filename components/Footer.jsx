"use client";
import React from "react";

const Footer = () => {
  return (
    <footer className="relative z-20 bg-transparent pt-14 md:pt-20 pb-8 md:pb-10 overflow-hidden border-t border-white/5">

      {/* Ambient Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.01] via-transparent to-orange-500/[0.02]" />

      {/* Giant Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.02]">
        <h1 className="text-[28vw] md:text-[18vw] font-black uppercase tracking-tighter text-white whitespace-nowrap">
          LEVIOOSA
        </h1>
      </div>

      <div className="container mx-auto px-6 relative z-10">

        {/* TOP SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-10 mb-14 md:mb-16">

          {/* Brand */}
          <div className="md:col-span-4">

            <div className="flex items-center gap-4 mb-6">

              <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center shadow-[0_0_25px_rgba(249,115,22,0.35)]">
                <span className="text-black font-black text-xs">
                  L
                </span>
              </div>

              <h2 className="text-3xl md:text-xl font-black uppercase tracking-[0.15em] text-white">
                LEVIO
                <span className="text-orange-500 italic font-light">
                  OSA
                </span>
              </h2>

            </div>

            <p className="max-w-sm text-white/35 text-[12px] md:text-[11px] leading-loose tracking-[0.15em] uppercase font-light">
              Digital fluidity meets high-end luxury.
              <br />
              London / 2026.
            </p>

          </div>

          {/* MOBILE GRID */}
          <div className="grid grid-cols-2 gap-10 md:contents">

            {/* Menu */}
            <div className="md:col-span-2">
              <h4 className="text-[10px] uppercase tracking-[0.45em] text-orange-500 mb-5 font-bold">
                Menu
              </h4>

              <ul className="space-y-4">
                {["Archive", "VTON", "About"].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-white/45 text-[11px] uppercase tracking-[0.25em] hover:text-white transition-all duration-300"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div className="md:col-span-2">
              <h4 className="text-[10px] uppercase tracking-[0.45em] text-orange-500 mb-5 font-bold">
                Legal
              </h4>

              <ul className="space-y-4">
                {["Refund Policy",
                  "Return Policy",
                  "Sitemaps",
                  "Shipping"].map((item) => (
                    <li key={item}>
                      <a
                        href={
                          item === "Sitemaps"
                            ? "/sitemap.xml"
                            : item === "Refund Policy"
                              ? "/refund-policy"
                              : item === "Return Policy"
                                ? "/return-policy"
                                : "#"
                        }
                        target={item === "Sitemaps" ? "_blank" : "_self"}
                        rel={
                          item === "Sitemaps"
                            ? "noopener noreferrer"
                            : ""
                        }
                        className="text-white/45 text-[11px] uppercase tracking-[0.25em] hover:text-white transition-all duration-300"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
              </ul>
            </div>

            {/* Social */}
            <div className="col-span-2 md:col-span-2">

              <h4 className="text-[10px] uppercase tracking-[0.45em] text-orange-500 mb-5 font-bold">
                Social
              </h4>

              <div className="flex flex-wrap gap-4">

                {["Instagram", "Twitter"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="
                      px-5 py-3
                      rounded-full
                      border border-white/10
                      bg-white/[0.03]
                      backdrop-blur-md
                      text-white/50
                      text-[10px]
                      uppercase
                      tracking-[0.3em]
                      hover:text-white
                      hover:border-orange-500/20
                      transition-all duration-300
                    "
                  >
                    {social}
                  </a>
                ))}

              </div>
            </div>

          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-5">

          <p className="text-[8px] tracking-[0.45em] text-white/15 uppercase font-bold text-center">
            © 2026 LEVIOOSA LUXURY
          </p>

          <div className="flex items-center gap-3">

            <div className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse shadow-[0_0_10px_rgba(249,115,22,0.8)]"></div>

            <span className="text-[8px] tracking-[0.35em] text-white/20 uppercase font-medium">
              Luxury Standard
            </span>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
"use client";

import React from "react";
import { LEVIOOSA_SIZE_GUIDE } from "@/data/sizeGuide";

const SizeGuideModal = ({ show, onClose }) => {

  // IMPORTANT
  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-xl flex items-center justify-center p-4 md:p-8">

      {/* OUTSIDE CLICK CLOSE */}
      <div
        className="absolute inset-0"
        onClick={onClose}
      />

      {/* MODAL */}
      <div className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-[2.5rem] border border-white/10 bg-[#050505] shadow-[0_0_80px_rgba(0,0,0,0.6)]">

        {/* TOP GLOW */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-orange-500/10 blur-[120px] pointer-events-none" />

        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-50 w-12 h-12 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-center text-white/40 hover:text-white hover:border-orange-500 transition-all duration-500"
        >
          ✕
        </button>

        {/* CONTENT */}
        <div className="relative z-10 p-8 md:p-14">

          {/* HEADER */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-[1px] bg-orange-500" />

              <p className="text-[10px] uppercase tracking-[0.6em] font-black text-orange-500">
                Levioosa Studio
              </p>
            </div>

            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-none text-white">
              Size Guide
            </h2>

            <p className="mt-6 text-white/40 max-w-2xl leading-relaxed text-sm">
              Every Levioosa garment is designed with a relaxed luxury silhouette.
              Measurements are provided in inches and may vary slightly due to handcrafted finishing.
            </p>
          </div>

          {/* TOP MEASUREMENTS */}
          <section className="mb-20">

            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[1px] bg-orange-500/70" />

              <h3 className="text-xl uppercase tracking-[0.3em] font-black text-white">
                Top Measurements
              </h3>
            </div>

            <div className="overflow-x-auto rounded-[2rem] border border-white/10 bg-white/[0.02]">

              <table className="w-full min-w-[800px]">

                <thead className="border-b border-white/10 bg-white/[0.03]">
                  <tr>
                    {["Size", "Chest", "Shoulder", "Sleeve", "Front", "Back"].map((head) => (
                      <th
                        key={head}
                        className="px-8 py-6 text-left text-[10px] uppercase tracking-[0.35em] text-orange-500 font-black whitespace-nowrap"
                      >
                        {head}
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody>
                  {LEVIOOSA_SIZE_GUIDE.tops.map((item, i) => (
                    <tr
                      key={i}
                      className="border-b border-white/5 hover:bg-white/[0.03] transition-all duration-300"
                    >
                      <td className="px-8 py-6 text-sm font-black uppercase tracking-[0.2em] text-white whitespace-nowrap">
                        {item.size}
                      </td>

                      <td className="px-8 py-6 text-sm text-white/50 whitespace-nowrap">
                        {item.chest}
                      </td>

                      <td className="px-8 py-6 text-sm text-white/50 whitespace-nowrap">
                        {item.shoulder}
                      </td>

                      <td className="px-8 py-6 text-sm text-white/50 whitespace-nowrap">
                        {item.sleeve}
                      </td>

                      <td className="px-8 py-6 text-sm text-white/50 whitespace-nowrap">
                        {item.frontLength}
                      </td>

                      <td className="px-8 py-6 text-sm text-white/50 whitespace-nowrap">
                        {item.backLength}
                      </td>
                    </tr>
                  ))}
                </tbody>

              </table>

            </div>
          </section>

          {/* TROUSER MEASUREMENTS */}
          <section>

            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[1px] bg-orange-500/70" />

              <h3 className="text-xl uppercase tracking-[0.3em] font-black text-white">
                Trouser Measurements
              </h3>
            </div>

            <div className="overflow-x-auto rounded-[2rem] border border-white/10 bg-white/[0.02]">

              <table className="w-full min-w-[700px]">

                <thead className="border-b border-white/10 bg-white/[0.03]">
                  <tr>
                    {["Size", "Waist", "Hip", "Length"].map((head) => (
                      <th
                        key={head}
                        className="px-8 py-6 text-left text-[10px] uppercase tracking-[0.35em] text-orange-500 font-black whitespace-nowrap"
                      >
                        {head}
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody>
                  {LEVIOOSA_SIZE_GUIDE.trousers.map((item, i) => (
                    <tr
                      key={i}
                      className="border-b border-white/5 hover:bg-white/[0.03] transition-all duration-300"
                    >
                      <td className="px-8 py-6 text-sm font-black uppercase tracking-[0.2em] text-white whitespace-nowrap">
                        {item.size}
                      </td>

                      <td className="px-8 py-6 text-sm text-white/50 whitespace-nowrap">
                        {item.waist}
                      </td>

                      <td className="px-8 py-6 text-sm text-white/50 whitespace-nowrap">
                        {item.hip}
                      </td>

                      <td className="px-8 py-6 text-sm text-white/50 whitespace-nowrap">
                        {item.length}
                      </td>
                    </tr>
                  ))}
                </tbody>

              </table>

            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default SizeGuideModal;
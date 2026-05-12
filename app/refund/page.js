export default function RefundPolicy() {
  return (
    <main className="min-h-screen pt-40 pb-24 px-6 text-white">
      <div className="max-w-4xl mx-auto">

        <p className="text-orange-500 text-[10px] tracking-[0.5em] uppercase font-black mb-6">
          Levioosa Legal
        </p>

        <h1 className="text-5xl md:text-7xl font-black uppercase mb-12">
          Refund Policy
        </h1>

        <div className="space-y-10 text-white/60 leading-loose text-sm md:text-base">

          <section>
            <h2 className="text-white text-xl font-bold mb-4">
              Eligibility
            </h2>

            <p>
              Refund requests must be submitted within 7 days
              of receiving the order. Products must remain
              unused, unwashed, and in original condition.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-bold mb-4">
              Non-refundable Items
            </h2>

            <p>
              Customized or discounted items are not eligible
              for refunds unless damaged or incorrect upon
              delivery.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-bold mb-4">
              Refund Processing
            </h2>

            <p>
              Approved refunds are processed within 5–10
              business days through the original payment
              method.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}
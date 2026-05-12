export default function ReturnPolicy() {
  return (
    <main className="min-h-screen pt-40 pb-24 px-6 text-white">
      <div className="max-w-4xl mx-auto">

        <p className="text-orange-500 text-[10px] tracking-[0.5em] uppercase font-black mb-6">
          Levioosa Legal
        </p>

        <h1 className="text-5xl md:text-7xl font-black uppercase mb-12">
          Return Policy
        </h1>

        <div className="space-y-10 text-white/60 leading-loose text-sm md:text-base">

          <section>
            <h2 className="text-white text-xl font-bold mb-4">
              Return Window
            </h2>

            <p>
              Customers may request a return within 7 days of
              delivery.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-bold mb-4">
              Product Condition
            </h2>

            <p>
              Returned items must be unused, undamaged, and
              include original packaging and tags.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-bold mb-4">
              Exchange Option
            </h2>

            <p>
              Exchanges are available subject to stock
              availability.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}
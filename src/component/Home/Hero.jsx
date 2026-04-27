import { Link } from "react-router-dom";


const Hero = () => {
  return (
    <>
      <section className="relative min-h-[90vh] w-full overflow-hidden flex items-center justify-center">
        {/* IMAGE BACKGROUND */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center animate-zoom"
          style={{ backgroundImage: "url('/herobg.jpg')" }}
        ></div>

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* CONTENT */}
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          {/* 🔥 HERO TITLE */}
          <h1 className="reveal delay-1 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mt-20">
            Fresh Zobo & Tigernut Drinks <br className="hidden sm:block" />
            <span className="text-blue-300">Made Daily in Nigeria</span>
          </h1>

          {/* 🔥 SUBTEXT */}
          <p className="reveal delay-2 mt-5 text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed">
            Bethosin Bliss delivers refreshing homemade zobo, tigernut and
            yogurt drinks made from natural ingredients perfect for your
            everyday enjoyment.
          </p>

          {/* 🔥 CTA */}
          <div className="reveal delay-3 mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/products"
              className="w-full sm:w-auto bg-blue-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition text-sm md:text-base"
            >
              Shop Drinks
            </Link>

            <Link
              to="/contact"
              className="w-full sm:w-auto border border-white px-6 py-3 rounded-full text-white hover:bg-white hover:text-blue-900 transition text-sm md:text-base"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* 🔥 WHY SECTION */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          {/* TITLE */}
          <h2 className="reveal delay-1 text-2xl md:text-4xl font-bold text-blue-900">
            Why Choose Bethosin Bliss
          </h2>

          {/* SUBTEXT */}
          <p className="reveal delay-2 text-gray-600 mt-4 text-sm md:text-base">
            Premium homemade drinks crafted with care, quality and freshness.
          </p>

          {/* CARDS */}
          <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
            <div className="reveal delay-1 p-5 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-lg font-semibold text-blue-900">
                Fresh Ingredients
              </h3>
              <p className="text-gray-500 mt-2 text-sm">
                Natural fruits and ingredients used in every drink.
              </p>
            </div>

            <div className="reveal delay-2 p-5 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-lg font-semibold text-blue-900">
                Fast Delivery
              </h3>
              <p className="text-gray-500 mt-2 text-sm">
                Quick and reliable delivery to your location.
              </p>
            </div>

            <div className="reveal delay-3 p-5 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-lg font-semibold text-blue-900">
                Premium Taste
              </h3>
              <p className="text-gray-500 mt-2 text-sm">
                Refreshing flavors made to satisfy every moment.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

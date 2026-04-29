import Hero from "../component/Home/Hero";
import ProductCard from "../component/productCard/ProductCard";
import products from "../Data/product";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>
      {/* 🔥 SEO */}
      <Helmet>
        <title>
          Bethosin Bliss | Fresh Zobo, Tigernut & Yogurt Drinks in Nigeria
        </title>
        <meta
          name="description"
          content="Order fresh homemade zobo, tigernut and yogurt drinks in Nigeria. Bethosin Bliss offers premium quality drinks with fast delivery."
        />
      </Helmet>

      <Hero />

      {/* 🔥 PRODUCT SECTION */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* HEADER */}
          <div className="text-center mb-12 ">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
              Best Zobo, Tigernut & Yogurt Drinks in Nigeria
            </h2>
          </div>

          {/* GRID */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products
              .filter((product) => product.bestSeller)
              .map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

import products from "../Data/product";
import ProductCard from "../component/productCard/ProductCard";
import { Helmet } from "react-helmet-async";

const Product = () => {
  return (
    <>
      <Helmet>
        <title>
          Buy Zobo, Tigernut & Yogurt Drinks in Nigeria | Bethosin Bliss
        </title>
        <meta
          name="description"
          content="Shop fresh zobo, tigernut and yogurt drinks in Nigeria. Available in 35cl and 50cl sizes with fast delivery."
        />
      </Helmet>
      <section className="bg-gray-50 py-24 min-h-screen">
        <div className="max-w-7xl mx-auto px-4">
          {/* HEADER */}
          <div className="text-center mb-16 px-4">
            <h1 className="reveal delay-1 text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-900 leading-tight mt-20">
              Explore Our Fresh Drinks & Snacks
            </h1>

            <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-sm md:text-base">
              Discover our range of freshly made zobo, tigernut, yoghurt drinks
              and tasty snacks. Made with natural ingredients and perfect for
              every moment.
            </p>

            {/* subtle divider */}
            <div className="w-16 h-1 bg-blue-900 mx-auto mt-6 rounded-full"></div>
          </div>

          {/* PRODUCTS */}
          {products.length === 0 ? (
            <p className="text-center text-gray-500">
              No products available at the moment.
            </p>
          ) : (
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  showVariants={true}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Product;

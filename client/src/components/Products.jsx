import { useState } from "react";
import { products } from "../Data";

const ProductCarousel = () => {
  const [current, setCurrent] = useState(0);
  const prevSlide = () =>
    setCurrent((c) => (c > 0 ? c - 1 : products.length - 1));
  const nextSlide = () =>
    setCurrent((c) => (c < products.length - 1 ? c + 1 : 0));

  return (
    <section className="relative bg-gradient-to-r from-[#FFF8EF] to-[#FBE09A] py-12 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-serif text-black mb-2">
          Our Products
        </h2>
        <p className="text-gray-700 mb-8 text-lg">
          Rooted in Ayurveda. Backed by science. Delivered with trust.
        </p>
      </div>

      <div className="flex justify-center items-center">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-20 top-1/2 h-24 z-20 -mr-5 md:-mr-10 bg-black hover:bg-gray-900 text-[#FFB800] p-3 rounded-l-sm cursor-pointer"
          style={{ boxShadow: "0px 2px 16px #FBE09A" }}
        >
          &#8592;
        </button>

        {/* Carousel Box */}
        <div
          className="relative flex items-center bg-white rounded-2xl border border-[#FFB800] shadow-lg 
                        w-full max-w-5xl min-h-[360px] px-8 md:px-24 py-6 overflow-visible"
        >
          {/* Product image - Overflows left at the border */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 shadow-amber-600 shadow-xl rounded-2xl">
            <img
              src={products[current].img}
              alt={products[current].title}
              className="w-56 h-64 object-cover rounded-2xl border-4 border-white"
              style={{ boxShadow: "0px 2px 20px #FBE09A" }}
            />
          </div>

          {/* Product Info */}
          <div className="flex-1 ml-32 md:ml-48 text-center md:text-left">
            <span className="text-xl md:text-2xl font-bold">
              {products[current].desc}
            </span>
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="ml-4 bg-black h-24 hover:bg-gray-900 text-[#FFB800] p-3 rounded-r-sm z-20 cursor-pointer"
            style={{ boxShadow: "0px 2px 16px #FBE09A" }}
          >
            &#8594;
          </button>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {products.map((_, idx) => (
          <span
            key={idx}
            className={`inline-block h-3 w-3 rounded-full ${
              idx === current ? "bg-[#FFB800]" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductCarousel;

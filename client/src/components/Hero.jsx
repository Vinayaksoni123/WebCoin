const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-[#FFFFF0] to-[#FFDB77] py-14 px-4 md:px-10">
      <div className="max-w-7xl mx-auto gap-8 flex flex-col md:flex-row items-center">
        {/* Text */}
        <div className="flex-1 mb-10 md:mb-0">
          <p className="text-lg text-gray-700 mb-2">
            Lead a Prosperous Life with...
          </p>
          <h1
            className="text-7xl font-extrabold text-[#FFB800] mb-4"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Golden Today
          </h1>
          <p className="text-gray-700 mb-8 max-w-md">
            Join us with just ₹5000 and unlock a lifetime of Ayurvedic wellness,
            guaranteed monthly returns, and financial empowerment.
          </p>
          <div className="flex gap-4">
            <button className="bg-[#FFB800] text-white font-bold px-8 py-3 rounded shadow-md transition hover:bg-yellow-600">
              JOIN NOW
            </button>
            <button className="border border-[#FFB800] text-[#FFB800] font-bold px-8 py-3 rounded bg-white shadow-md transition hover:bg-yellow-50">
              KNOW MORE
            </button>
          </div>
        </div>
        {/* Image */}
        <div className="flex-1 flex justify-center">
          <img
            src="https://res.cloudinary.com/dxhcmzqmy/image/upload/v1754395752/men_ws5msr.png"
            alt="Person in wheat field"
            className=" w-[740px] h-[534px] object-cover shadow-xl rounded-2xl rounded-tl-[195px] rounded-bl-[350px]"
            style={{ backgroundColor: "#FAE7B5" }}
          />
        </div>
      </div>
    </section>
  );
};
export default Hero;

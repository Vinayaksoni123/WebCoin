const AboutGoldenToday = () => {
  return (
    <section className="relative bg-gradient-to-r from-[rgb(255,255,240)] to-[#FFDB77] py-12 px-0 overflow-hidden">
      <h2 className="text-5xl md:text-5xl font-serif text-center mb-12 text-black">
        About Golden Today
      </h2>
      <div className="flex justify-end">
        {/* Main Card */}
        <div
          className="bg-[linear-gradient(278deg,rgba(255,255,255,0.94)_34%,rgba(202,155,0,0.76)_92%)]
                    rounded-l-[32px] inset-shadow-lg inset-shadow-gray-400/40 border border-[#EED098] 
                    flex flex-col md:flex-row overflow-visible relative 
                    w-full max-w-[1200px] h-[517px]"
        >
          {/* Image Section (sticks outside left visually) */}
          <div className="relative md:w-[30%] h-[330px] md:h-full flex-shrink-0">
            <img
              src="https://res.cloudinary.com/dxhcmzqmy/image/upload/v1754395753/templateimg_mm73bd.png"
              alt="Golden Today logo"
              className="absolute top-1/2 -translate-y-1/2 -left-24
                    object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* Content Section */}
          <div className="flex-1  flex items-center justify-center md:justify-start px-2 md:px-4">
            <div className="w-full md:w-[727px] h-auto md:h-[304px]">
              <h3 className="text-6xl font-serif mb-3 text-[#222]">
                Your Path to Wellness & Growth...
              </h3>
              <p className="text-xl pr-8 text-gray-800 leading-relaxed mb-6">
                <span className="font-bold">Golden Today</span> is a
                wellness-driven direct-selling platform that blends the richness
                of Ayurveda with modern financial opportunity. With a one-time
                membership of <span className="font-bold">₹5000</span>,
                individuals receive
                <span className="font-bold">
                  {" "}
                  premium herbal supplements
                </span>{" "}
                and access to multiple income streams. Our mission is to empower
                people to lead healthier, wealthier lives by
                <span className="font-bold"> building a community</span> where
                well-being and
                <span className="font-bold"> financial freedom</span> go hand in
                hand.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-15">
        <button className="px-7 py-3 text-white bg-black rounded-full text-lg shadow font-medium hover:bg-gray-900 transition">
          See Membership Benefits
        </button>
      </div>

      {/* Decorative leaves */}
      <div
        className="absolute left-0 bottom-0 w-64 h-64 -z-1 pointer-events-none"
        style={{
          background: `url('/leaves-decor.png') no-repeat left bottom / contain`,
        }}
      />
    </section>
  );
};

export default AboutGoldenToday;

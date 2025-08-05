import { FaArrowAltCircleRight } from "react-icons/fa";
import { benefitsData } from "../Data";

const BenifitsSection = () => {
  return (
    <>
      <section className="relative bg-gradient-to-r from-[rgb(255,255,240)] to-[#FFDB77] py-12 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif mb-4 text-black">
            Benefits of Joining Golden Today
          </h2>
          <p className="text-lg text-gray-800 mb-8">
            Includes ₹1,00,000+ worth of wellness products, income benefits, and
            lifestyle perks — all for a one-time ₹5000 membership.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefitsData.map((benefit, index) => (
              <div
                key={index}
                className="flex rounded-lg overflow-hidden border-4 border-black shadow-md hover:shadow-amber-400 hover:shadow-2xl hover:border-amber-400 hover:border-4"
              >
                <div className="w-20 h-20 bg-black flex items-center justify-center">
                  <benefit.icon className="text-4xl text-[#FFB800]" />
                </div>

                <div className="flex flex-1 items-center justify-between bg-white px-4">
                  <h3 className="text-md font-medium text-[#222] text-center leading-tight">
                    {benefit.title}
                  </h3>
                  <FaArrowAltCircleRight className="text-black text-xl" />
                </div>
              </div>
            ))}
          </div>

          <p className="text-lg text-gray-800 mt-8">
            Already worth ₹1,00,000+. And now, your free herbal wellness kit
            awaits.
          </p>
        </div>
      </section>
    </>
  );
};

export default BenifitsSection;

import { IoMdCheckmark } from "react-icons/io";

const AurvedicKit = () => {
    return (
        <>
            <section className="relative bg-gradient-to-r from-[#FFEEBE] to-[#FFFFF] py-12 px-4">
                <div className="max-w-5xl mx-auto text-center">
                    {/* Product Image and Text */}
                    <div className="flex flex-col md:flex-row items-center justify-between mb-8">
                        {/* Product Image */}
                        <div className="w-full h-[450px] md:w-1/3 mb-6 md:mb-0">
                            <img
                                src="https://res.cloudinary.com/dxhcmzqmy/image/upload/v1754395750/temp2_hy7nht.png"
                                alt="Maha Vajra Shilajit"
                                className="w-full object-cover rounded-lg "
                            />
                        </div>
                        {/* Text and Benefits */}
                        <div className="w-full md:w-2/3 text-left md:pl-8">
                            <h2 className="text-4xl md:text-5xl font-serif mb-4 text-black">
                                The Ayurvedic Herbal Wellness Kit : <br/><span className="font-semibold text-red-900">MahaVajrashila Power</span>
                            </h2>
                            <p className="text-xl text-gray-700 mb-4 italic">
                                "Ancient Ayurveda meets modern health science"
                            </p>
                            <ul className=" list-inside text-lg text-gray-800 mb-6">
                                <li className="mb-2 flex items-center"><IoMdCheckmark className=" text-amber-300"/> Boosts stamina & inner strength</li>
                                <li className="mb-2 flex items-center"><IoMdCheckmark className=" text-amber-300"/> Balances hormones in men & women</li>
                                <li className="mb-2 flex items-center"><IoMdCheckmark className=" text-amber-300"/> Reduces fatigue, stress & weakness</li>
                                <li className="mb-2 flex items-center"><IoMdCheckmark className=" text-amber-300"/> Strengthens daily immunity & energy</li>
                            </ul>
                            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                                <button className="px-4 py-2 bg-white rounded-full shadow-[inset_0_2px_6px_rgba(0,0,0,0.2)] text-gray-700 font-medium">
                                    Lab Tested
                                </button>
                                <button className="px-4 py-2 bg-white rounded-full shadow-[inset_0_2px_6px_rgba(0,0,0,0.2)] text-gray-700 font-medium">
                                    Herbal Certified
                                </button>
                                <button className="px-4 py-2 bg-white rounded-full shadow-[inset_0_2px_6px_rgba(0,0,0,0.2)] text-gray-700 font-medium">
                                    Safe for Daily Use
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Call to Action */}
                    <p className="text-lg text-gray-800 mb-4 ml-5 mt-5">
                        Receive your ₹5000 wellness kit at home — free with your Golden Today membership.
                    </p>
                    <button className="px-6 py-3 bg-black text-white rounded-full text-lg font-medium shadow hover:bg-gray-900 transition">
                        Claim Now
                    </button>
                </div>

                {/* Decorative leaves */}
                <div className="absolute left-0 bottom-0 w-64 h-64 -z-1 pointer-events-none" style={{ background: `url('/leaves-decor.png') no-repeat left bottom / contain` }} />
            </section>
        </>
    )
}

export default AurvedicKit;
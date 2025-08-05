

import { FaRegHandshake } from "react-icons/fa";
import { IoIosMedal } from "react-icons/io";
import { IoIosGitNetwork } from "react-icons/io";


const IncomePlan = () => {
    return (
        <>
            <section className="relative bg-gradient-to-r from-[#FFFF0] to-[#FFDB77] py-12 px-4">
                <div className="max-w-5xl mx-auto text-center">
                    {/* Heading */}
                    <h2 className="text-4xl md:text-5xl font-serif mb-4 text-black">
                        Unlock Your Earning Potential
                    </h2>
                    <p className="text-lg text-gray-800 mb-8">
                        Earn through direct referrals, binary team growth and special rewards — all with Golden Today.
                    </p>


                    <div className="flex justify-end w-full bg-transparent">
                        {/* Black Background Container */}
                        <div className="bg-black rounded-l-[32px] border border-[#EED098] flex gap-6 justify-center items-center w-full max-w-[1200px] h-[417px] p-6">

                            {/* Card 1 */}
                            <div className="relative flex flex-col items-center w-80 h-[380px] bg-gradient-to-b from-[#FFDB77] to-[#FFFFF0] rounded-2xl border-2 border-[#FFD166]">

                                {/* Circle Icon */}
                                <div className="absolute -top-0 my-5 flex justify-center w-full ">
                                    <div className="h-28 w-28 rounded-full bg-black flex items-center justify-center shadow-lg">
                                        <FaRegHandshake className="text-5xl text-amber-400" />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="bg-white w-full h-2/3 mt-[160px] pt-6 p-4 px-8 text-center rounded-b-2xl">
                                    <h3 className="text-xl font-semibold text-black mb-2">Sponsor Income (20%)</h3>
                                    <p className="text-gray-800 text-sm text-justify">
                                        Earn <span className="font-bold">₹1000</span> for every direct referral you make.
                                    </p>
                                    <p className="text-gray-600 text-sm mt-2 text-justify">
                                        Instant and unlimited income for each new member you onboard.
                                    </p>
                                </div>
                            </div>

                            <div className="relative flex flex-col items-center w-80 h-[380px] bg-gradient-to-b from-[#FFDB77] to-[#FFFFF0] rounded-2xl border-2 border-[#FFD166]">

                                {/* Circle Icon */}
                                <div className="absolute -top-0 my-5 flex justify-center w-full ">
                                    <div className="h-28 w-28 rounded-full bg-black flex items-center justify-center shadow-lg">
                                        <IoIosGitNetwork className="text-5xl text-amber-400" />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="bg-white w-full h-2/3 mt-[160px] pt-6 p-4 px-8 text-center rounded-b-2xl">
                                    <h3 className="text-xl font-semibold text-black mb-2">Sponsor Income (20%)</h3>
                                    <p className="text-gray-800 text-sm text-justify">
                                        Earn <span className="font-bold">₹1000</span> for every direct referral you make.
                                    </p>
                                    <p className="text-gray-600 text-sm mt-2 text-justify">
                                        Instant and unlimited income for each new member you onboard.
                                    </p>
                                </div>
                            </div>

                            <div className="relative flex flex-col items-center w-80 h-[380px] bg-gradient-to-b from-[#FFDB77] to-[#FFFFF0] rounded-2xl border-2 border-[#FFD166]">

                                {/* Circle Icon */}
                                <div className="absolute -top-0 my-5 flex justify-center w-full ">
                                    <div className="h-28 w-28 rounded-full bg-black flex items-center justify-center shadow-lg">
                                        <IoIosMedal className="text-5xl text-amber-400" />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="bg-white w-full h-2/3 mt-[160px] pt-6 p-4 px-8 text-center rounded-b-2xl">
                                    <h3 className="text-xl font-semibold text-black mb-2">Sponsor Income (20%)</h3>
                                    <p className="text-gray-800 text-sm text-justify">
                                        Earn <span className="font-bold">₹1000</span> for every direct referral you make.
                                    </p>
                                    <p className="text-gray-600 text-sm mt-2 text-justify">
                                        Instant and unlimited income for each new member you onboard.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* Footer Text and Button */}
                    <p className="text-lg text-gray-800 mt-8">
                        No Limits. No Ceiling. Your Effort = Your Earnings. With Golden Today, your ₹5000 membership opens the door to unlimited income potential.
                    </p>
                    <button className="px-6 py-3 bg-black text-white rounded-full text-lg font-medium shadow hover:bg-gray-900 transition mt-4">
                        Start Earning with Golden Today
                    </button>
                </div>

                {/* Decorative leaves */}
                <div className="absolute left-0 bottom-0 w-64 h-64 -z-1 pointer-events-none" style={{ background: `url('/leaves-decor.png') no-repeat left bottom / contain` }} />
            </section>
        </>
    )
}

export default IncomePlan
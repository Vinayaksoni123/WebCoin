
import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router'

const Footer = () => {
    return (
        <>
            <footer className="bg-white border-t-2 border-[#FFB800] shadow-inner py-6 px-3 md:px-10">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between space-y-8 md:space-y-0 items-start">
                    {/* Left: Logo and About */}
                    <div className="flex-1 min-w-[220px] flex flex-col items-start">
                        <div className="flex items-center mb-2">
                            <img src="/Images/logo.png" alt="Golden Today Logo" className="h-10 w-auto mr-2" />
                            <span className="font-bold text-lg text-[#FF5B00] tracking-wide">GOLDEN TODAY</span>
                        </div>
                        <p className="text-gray-800 text-sm mt-2">
                            A direct-selling platform offering wellness through Ayurveda and income through referrals — all starting with a ₹5000 membership.
                        </p>
                    </div>

                    {/* Middle: Contact Details */}
                    <div className="flex-1 min-w-[220px] flex flex-col items-center">
                        <h3 className="font-semibold text-black mb-2 text-center">Direct Contact Details</h3>
                        <ul className="flex flex-col space-y-2 text-gray-800 text-sm">
                            <li className="flex items-center"><FaPhoneAlt className="text-[#FFB800] mr-2" /> +91-XXXXXXXXXX</li>
                            <li className="flex items-center"><FaWhatsapp className="text-[#FFB800] mr-2" /><a href="#" className="underline">Click to Chat</a></li>
                            <li className="flex items-center"><FaEnvelope className="text-[#FFB800] mr-2" /><a href="mailto:support@goldentoday.in" className="underline">support@goldentoday.in</a></li>
                            <li className="flex items-center"><FaMapMarkerAlt className="text-[#FFB800] mr-2" />Gora Chappra, Mount Abu, Block No.1, Sirohi - 307501</li>
                        </ul>
                    </div>

                    {/* Right: Company Links */}
                    <div className="flex-1 min-w-[160px] flex flex-col items-center">
                        <h3 className="font-semibold text-black mb-2 text-center">Company</h3>
                        <ul className="flex flex-col space-y-2 text-gray-800 text-sm">
                            <li className="flex items-center">Home </li>
                            <li className="flex items-center">About</li>
                            <li className="flex items-center">Membership Benefits</li>
                            <li className="flex items-center">Herbal</li>
                            <li className="flex items-center">Income Plan</li>
                        </ul>
                    </div>

                    <div className="flex-1 min-w-[160px] flex flex-col items-center">
                        <h3 className="font-semibold text-black mb-2 text-center">Social Links</h3>
                        <div className='flex gap-5 text-xl text-[#FFC300]'>
                        <Link to="/"><FaInstagram/></Link>
                        <Link to="/"><FaFacebookF/></Link>
                        <Link to="/"><FaYoutube/></Link>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
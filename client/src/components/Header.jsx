import { Link } from "react-router";
import axios from "axios";
import { useAuth } from "../Context/AuthProvider";
import { serverUrl } from "../main";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

const Header = () => {
  const [authuser, setauthuser] = useAuth();

  const handlelogout = async () => {
    try {
      const res = await axios.get(`${serverUrl}/api/auth/logout`);
      localStorage.removeItem("data");
      Cookies.remove("token");
      toast.success("logout successfully");
      window.location.reload();
    } catch (error) {
      console.log("error in logout:...", error);
      toast.error("error in loged out");
    }
  };
  return (
    <header className=" bg-gradient-to-r from-[#FFF8E2] to-[#FFEA8C] shadow-lg shadow-gray-500/50  flex items-center justify-between px-8 py-4">
      <div className="flex items-center space-x-3">
        {/* Add your logo source */}
        <img
          src="https://res.cloudinary.com/dxhcmzqmy/image/upload/v1754395752/logo_mxfbue.png"
          alt="Golden Today Logo"
          className="h-10"
        />
        <span className="font-bold text-xl text-[#FFB800]">GOLDEN TODAY</span>
      </div>
      <nav className="flex items-center space-x-6">
        <Link to="/" className="text-gray-700 hover:text-[#FFB800]">
          Home
        </Link>
        <Link to="/about" className="text-gray-700 hover:text-[#FFB800]">
          About Us
        </Link>
        <Link to="/benefits" className="text-gray-700 hover:text-[#FFB800]">
          Benefits
        </Link>
        <Link
          to="/ayurvedic-kit"
          className="text-gray-700 hover:text-[#FFB800]"
        >
          Ayurvedic Kit
        </Link>
        <Link to="/income-plan" className="text-gray-700 hover:text-[#FFB800]">
          Income Plan
        </Link>
        <Link to="/testimonial" className="text-gray-700 hover:text-[#FFB800]">
          Testimonial
        </Link>
        <Link to="/contact" className="text-gray-700 hover:text-[#FFB800]">
          Contact
        </Link>
        {!authuser ? (
          <>
            <Link
              to={"/signup"}
              className="bg-[#FFB800] text-white px-4 py-2 rounded font-semibold"
            >
              Sign-up
            </Link>
            <Link
              to={"/login"}
              className="bg-black text-white px-4 py-2 rounded"
            >
              Login
            </Link>
          </>
        ) : (
          <button
            className="bg-[#FFB800] text-white px-4 py-2 rounded cursor-pointer"
            onClick={handlelogout}
          >
            Log Out
          </button>
        )}
      </nav>
    </header>
  );
};

export default Header;

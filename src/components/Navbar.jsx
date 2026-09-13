import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    // ✅ FIXED + CENTERED
    <header className="fixed top-0 left-0 w-full z-50 flex justify-center">
      {/* ✅ WIDTH CONTROL */}
      <div className="w-[98%] max-w-7xl ">
        {/* TOP BAR */}
        <div className="bg-blue-800 text-white text-sm px-6 py-2 flex justify-between items-center rounded-t-2xl">
          {/* LEFT */}
          <div className="flex items-center space-x-6">
            <span>✉ Thegrandviewhotel2024@gmail.com </span>
            <span>📞 0723127263 </span>
          </div>

          {/* RIGHT */}
          <div className="flex items-center space-x-4">
            {/* SOCIAL ICONS */}
            <div className="flex items-center space-x-3">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#d66700]"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#d66700]"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#d66700]"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#d66700]"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        {/* MAIN NAVBAR */}
        <nav className="bg-white/95 backdrop-blur-md px-8 py-4 shadow-xl rounded-b-2xl flex items-center justify-between">
          {/* LOGO */}
          <div className="flex items-center space-x-3">
            <img
              src="/Images/home2.jpeg"
              alt="Grand logo"
              className="h-12 w-12 object-contain"
            />
            <span className="text-xl font-bold text-gray-900">
              The Grand View Hotel Kapsabet
            </span>
          </div>

          {/* NAV LINKS */}
          <div className="flex space-x-8 text-sm font-semibold uppercase">
            <Link
              to="/"
              className="text-gray-900 border-b-2 border-[#666666] pb-1"
            >
              Home
            </Link>
            <Link to="/aboutus" className="text-gray-900 hover:text-[#666666]">
              About us
            </Link>
            <Link to="/services" className="text-gray-900 hover:text-[#666666]">
              Services
            </Link>
            <Link to="/contact" className="text-gray-900 hover:text-[#666666]">
              Contact
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;

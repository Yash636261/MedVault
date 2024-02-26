import { Link } from "react-router-dom";
import { useContext } from "react";
import heroimage from "../../../assets/heroimage.webp";
import arrow from "../../../assets/Rarrow.svg";
import { AuthContext } from "../../../components/Auth/AuthContext";

function Hero() {
  const { isLoggedIn, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };
  return (
    <div className="relative text-black md:h-screen bg-gray-100  overflow-hidden">
      <div className="absolute flex max-md:justify-around items-center w-full px-10 py-5">
        <p className="md:w-1/2 font-semibold text-md select-none">MedVault</p>
        <div className="font-semibold capitalize text-md max-md:text-sm md:text-gray-100 md:w-1/2  flex justify-left cursor-pointer">
          <Link to="/" className="ml-10 max-md:ml-5 hover:text-white">
            Home
          </Link>
          {/* <a to="/about" className="mx-3 hover:text-blue-300">
              about
            </a> */}
          <Link to="/contact" className="ml-10 max-md:ml-5 hover:text-white">
            contact us
          </Link>
          {/* {isLoggedIn ? (
            <Link to="/dashboard" className="ml-10 max-md:ml-5 hover:text-white">
              Dashboard
            </Link>
          ) : null} */}
          {/* <div className="mx-3 hover:text-blue-300">explore</div> */}
        </div>
      </div>
      <div className="flex md:flex-row items-center justify-between h-full max-md:py-32">
        <div className="md:w-1/2 text-center md:text-left md:px-20 px-5 mx-auto">
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-4">
            MedVault
          </h1>
          <p className="text-md md:text-md mb-8 text-gray-600">
            Empowering Healthcare: Your Reliable Partner in Secure Health Data
            Management.
          </p>
          {!isLoggedIn ? (
            <Link
              to="/login"
              className="text-gray-700 flex items-center max-md:justify-center max-md:py-10"
            >
              Log In
              <img className="w-8 ml-1" src={arrow} alt="" />
            </Link>
          ) : (
            <button
              onClick={handleLogout}
              className="text-gray-700 flex items-center max-md:justify-center max-md:py-10"
            >
              Log Out
              <img className="w-8 ml-1" src={arrow} alt="" />
            </button>
          )}
        </div>

        {/* Hero image */}
        <div className="md:w-1/2 max-md:hidden h-full bg-[#54707E] flex justify-center items-center overflow-hidden">
          <img className="w-full" src={heroimage} alt="profileimage" />
        </div>
      </div>
    </div>
  );
}

export default Hero;

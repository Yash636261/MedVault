import { Link } from "react-router-dom";
import { useContext } from "react";
import heroimage from "../../../assets/Designer.png";
import { AuthContext } from "../../../components/Auth/AuthContext";

function Hero() {
  const { isLoggedIn, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };

  return (
    <>
      <div className="relative min-h-screen bg-white dark:bg-gray-900">
        <header className="absolute top-0 left-0 right-0 z-10 flex justify-between items-center p-4 md:p-6">
          <div className="flex items-center">
            <span className="text-xl font-semibold text-gray-800 dark:text-white">
              MedVault
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              to="/"
              className="ml-10 max-md:ml-5 hover:text-white font-semibold"
            >
              Home
            </Link>
            <Link
              to="/contact"
              className="ml-10 max-md:ml-5 hover:text-white font-semibold"
            >
              Contact Us
            </Link>
            {!isLoggedIn ? (
              <Link
                to="/login"
                className="inline-flex items-center rounded-md bg-white px-6 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-10 focus:z-10"
              >
                LogIn
              </Link>
            ) : (
              <button
                onClick={handleLogout}
                type="button"
                className="h-10 px-4 py-2 m-1 text-white transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400"
              >
                LogOut
              </button>
            )}
            <button
              aria-label="Menu"
              className="text-gray-600 dark:text-gray-300"
            >
              <svg
                xmlns="http:www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </header>

        <div className="flex flex-col md:flex-row h-screen">
          <div className="w-full md:w-1/2 flex flex-col justify-center px-6 md:px-12 py-12">
            <h2 className="text-sm uppercase text-gray-500 dark:text-gray-400 mb-2">
              Building Your Dreams
            </h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Empowering Healthcare: Your Reliable Partner in Secure Health Data
              Management
            </h1>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-8">
              {!isLoggedIn && (
                <Link
                  to="/login"
                  className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-3 rounded-full flex items-center justify-center transition duration-300 ease-in-out hover:bg-gray-800 dark:hover:bg-gray-100"
                >
                  <svg
                    xmlns="http:www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Log In
                </Link>
              )}

              <button className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-6 py-3 rounded-full flex items-center justify-center border border-gray-300 dark:border-gray-600 transition duration-300 ease-in-out hover:bg-gray-100 dark:hover:bg-gray-700">
                Know More
                <svg
                  xmlns="http:www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="w-full h-full md:w-1/2 relative">
            <img
              src={heroimage}
              alt="Dubai Burj Al Arab"
              className="rounded-bl-[50px]"
            />
            {/* <div className="absolute top-4 right-4 flex space-x-2">
              <button
                aria-label="Favorite"
                className="bg-white p-2 rounded-full shadow-md"
              >
                <svg
                  xmlns="http:www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>
              <button
                aria-label="Share"
                className="bg-white p-2 rounded-full shadow-md"
              >
                <svg
                  xmlns="http:www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                  />
                </svg>
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;

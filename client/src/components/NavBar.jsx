import React from "react";
import { Link } from "react-router-dom";
import Auth from "../utils/auth";
function Navbar({ isAuthenticated, profileId, imgSrc }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <nav className=" w-full py-3  border-b border-gray-900  inset-0 navbar opacity-100">

      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <button
              id="nav-btn"
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              {/* Button icons */}
            </button>
          </div>
          <div className="flex flex-1 items-center justify-between ">
            <Link to="/" className="flex flex-shrink-0 items-center">
              <img src="src/assets/logo.png" className="h-10 w-auto" alt="Logo" />  </Link>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <Link
                  to="/about"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-xl font-medium"
                >
                  About Us
                </Link>
                {Auth.loggedIn() && (
                  <Link
                    to={`/profile/${Auth.getProfile().authenticatedPerson._id}`}
                    className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-xl font-medium"
                  >
                    Profile Settings
                  </Link>
                )}
                {Auth.loggedIn() && (
                  <Link
                    to={`/Home`}
                    className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-xl font-medium"
                  >
                    Dashboard
                  </Link>
                )}
                {/* Conditional rendering based on authentication status */}
                {Auth.loggedIn() ? (
                  <Link
                    to="/"
                    id="logout"
                    className="text-white logout hover:bg-gray-500 hover:text-gray rounded-md px-3 py-2 text-xl font-medium"
                    onClick={() => Auth.logout()}
                  >
                    Logout
                  </Link>
                ) : (
                  <Link
                    to="/login"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-xl font-medium"
                  >
                    Login
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {isAuthenticated && (
              <div className="relative ml-3">
                <Link to={`/profile/${profileId}`}>
                  <button
                    type="button"
                    className="relative flex rounded-full bg-gray-800 text-xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    id="user-menu-button"
                    aria-expanded="false"
                    aria-haspopup="true"
                  >
                    <img
                      className="h-8 w-8 rounded-full bg-gray-600"
                      src={imgSrc}
                      alt="profile-icon"
                    />
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

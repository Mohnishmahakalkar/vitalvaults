import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX, FiHome } from "react-icons/fi";
import { useAuth } from "../context/AuthContext";
import { AppName } from "../utils/constants/AppConfigs";

interface NavItem {
  path: string;
  label: string;
  icon: JSX.Element;
}

const loggedOutNavItems: NavItem[] = [
  { path: "/", label: "Home", icon: <FiHome /> },
  { path: "/about", label: "About", icon: <FiMenu /> },
  { path: "/contact", label: "Contact", icon: <FiMenu /> },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, login, logout } = useAuth();

  let navItems: NavItem[] = isAuthenticated ? [] :loggedOutNavItems;


  return (
    <nav className="bg-blue-600 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold">{AppName}</h1>

        {/* Hamburger Icon for Mobile */}
        <button
          className="lg:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-6">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className="flex items-center gap-2 hover:underline"
              >
                {item.icon} {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div>
          {isAuthenticated ? (
            <button
              onClick={logout}
              className="ml-4 px-4 py-2 bg-red-500 rounded-md"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={login}
              className="ml-4 px-4 py-2 bg-green-500 rounded-md"
            >
              Login
            </button>
          )}
        </div>
      </div>

      {/* Mobile Overlay Menu */}
      <div
        className={`fixed inset-0 bg-blue-700 bg-opacity-95 transform ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        } transition-transform duration-300 ease-in-out lg:hidden`}
      >
        <button
          className="absolute top-4 right-4 text-white text-2xl"
          onClick={() => setIsOpen(false)}
        >
          <FiX />
        </button>

        <ul className="flex flex-col items-center justify-center h-full space-y-6">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className="flex items-center gap-2 text-2xl text-white hover:underline"
                onClick={() => setIsOpen(false)}
              >
                {item.icon} {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu,FiX, FiHome, } from "react-icons/fi"; 
import { useAuth } from "../context/AuthContext";
import { AppName } from "../utils/constants/AppConfigs";

interface NavItem {
  path: string;
  label: string;
  icon: JSX.Element;
}

const navItems: NavItem[] = [
  { path: "/", label: "Home", icon: <FiHome /> },
  { path: "/about", label: "About", icon: <FiMenu /> },
  { path: "/contact", label: "Contact", icon: <FiMenu /> },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, login, logout } = useAuth();

  return (
    <nav className="bg-blue-600 text-white shadow-md">
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
            <button onClick={logout} className="ml-4 px-4 py-2 bg-red-500 rounded-md">
              Logout
            </button>
          ) : (
            <button onClick={login} className="ml-4 px-4 py-2 bg-green-500 rounded-md">
              Login
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-blue-700">
          <ul className="flex flex-col items-center py-4">
            {navItems.map((item) => (
              <li key={item.path} className="py-2">
                <Link
                  to={item.path}
                  className="flex items-center gap-2 text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  {item.icon} {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

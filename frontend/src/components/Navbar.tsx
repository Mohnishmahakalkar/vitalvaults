import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiMenu,
  FiX,
  FiHome,
  FiInfo,
  FiMail,
  FiLogIn,
  FiUserPlus,
} from "react-icons/fi";
import { useAuth } from "../context/AuthContext";
import { AppName } from "../utils/constants/AppConfigs";
import NavItem from "./NavItem";

interface NavItem {
  path: string;
  label: string;
  icon: JSX.Element;
}

interface NavbarProps {
  className?: string;
}

const loggedOutNavItems: NavItem[] = [
  { path: "/", label: "Home", icon: <FiHome /> },
  { path: "/about", label: "About", icon: <FiInfo /> },
  { path: "/contact", label: "Contact-Us", icon: <FiMail /> },
  { path: "/login", label: "Login", icon: <FiLogIn /> },
  { path: "/sign-up", label: "Sign Up", icon: <FiUserPlus /> },
];

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated } = useAuth();

  let navItems: NavItem[] = isAuthenticated ? [] : loggedOutNavItems;
  return (
    <nav
      className={`${className} bg-white text-primary text-lg shadow-md sticky top-0 z-30`}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold">{AppName}</h1>
        <button
          className="lg:hidden text-primary text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        <ul className="hidden lg:flex space-x-6">
          {navItems.map((item) => (
            <NavItem
              key={item.path}
              path={item.path}
              label={item.label}
              icon={item.icon}
            />
          ))}
        </ul>
      </div>
      <div
        className={`fixed inset-0 bg-secondary bg-opacity-95 transform ${
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

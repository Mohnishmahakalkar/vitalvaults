import { useState } from "react";
import { FaFolder, FaFlag, FaBars } from "react-icons/fa6";
import {
  FaCalendarAlt,
  FaTasks,
  FaThLarge,
  FaHome,
  FaUserCircle,
} from "react-icons/fa";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const menuItems = [
    { name: "Home", icon: <FaHome size={20} />, link: "#" },
    { name: "Dashboard", icon: <FaThLarge size={20} />, link: "#" },
    { name: "Projects", icon: <FaFolder size={20} />, link: "#" },
    { name: "Calendar", icon: <FaCalendarAlt size={20} />, link: "#" },
    { name: "Tasks", icon: <FaTasks size={20} />, link: "#" },
    { name: "Reporting", icon: <FaFlag size={20} />, link: "#" },
  ];

  return (
    <div
      className={`h-full bg-gray-200 shadow-lg transition-all duration-300 ${
        collapsed ? "w-16" : "w-64"
      } flex flex-col`}
    >
      {/* Sidebar Header */}
      <div className="flex items-start justify-start p-4 border-b border-white">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-2 bg-gray-100 rounded-lg"
        >
          <FaBars />
        </button>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 mt-6 pr-2">
        {menuItems.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className={`flex items-center gap-3 p-3  hover:bg-primary hover:text-white rounded-lg transition-all duration-200 ${
              collapsed ? "justify-center" : "ml-2"
            }`}
            style={{ minHeight: "48px" }}
          >
            {item.icon}{" "}
            {!collapsed && (
              <span className="whitespace-nowrap">{item.name}</span>
            )}
          </a>
        ))}
      </nav>

      {/* Bottom Profile Section */}
      <div className="flex flex-row items-start justify-start p-4 border-t border-white">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-2 flex flex-col items-center justify-center gap-2 bg-gray-100 rounded-lg"
        >
          <FaUserCircle size={!collapsed ? 50 : 20} />
          {!collapsed && (
            <span className="whitespace-nowrap">
              {"mohnishmahakalkar@gmail.com"}
            </span>
          )}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;

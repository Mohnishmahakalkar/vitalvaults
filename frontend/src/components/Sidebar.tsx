import { useState } from "react";
import { FaFolder, FaFlag, FaBars } from "react-icons/fa6";
import {
  FaCalendarAlt,
  FaTasks,
  FaThLarge,
  FaHome,
  FaUserCircle,
} from "react-icons/fa";

const menuItems = [
  { name: "Home", icon: <FaHome />, link: "#" },
  { name: "Dashboard", icon: <FaThLarge />, link: "#" },
  { name: "Projects", icon: <FaFolder />, link: "#" },
  { name: "Calendar", icon: <FaCalendarAlt />, link: "#" },
  { name: "Tasks", icon: <FaTasks />, link: "#" },
  { name: "Reporting", icon: <FaFlag />, link: "#" },
];

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  console.log(collapsed, "collapsed:debug");

  return (
    <div
      className={`flex flex-col h-full transition-all border border-r-black/20 duration-500 ease-in-out bg-[#F8F9FA] px-2 ${
        collapsed ? "w-16" : "w-64"
      }`}
    >
      {/* Top Section */}
      <div className="border-b-2 border-black p-2 flex items-center justify-start w-full">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="bg-white flex flex-col items-center justify-start rounded-md w-fit h-fit p-2 mb-2 border border-black/20"
        >
          <FaBars className="text-xl flex-shrink-0" />
        </button>
      </div>

      {/* Navigation Menu */}
      <nav className="py-2 flex flex-col items-start gap-4 justify-start w-full h-full mt-6">
        {menuItems.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="flex flex-row gap-2 items-center justify-start rounded-md w-full h-10 p-2 text-[#212529] hover:bg-primary hover:text-white"
          >
            <span className="text-xl w-6 flex justify-start ml-2 transition-all duration-300 ease-in-out">{item.icon}</span>
            <span
              className={`whitespace-nowrap overflow-hidden text-ellipsis transition-all duration-300 ease-in-out ${
                collapsed
                  ? "max-w-0 opacity-0 px-0"
                  : "max-w-48 opacity-100 px-2"
              }`}
            >
              {item.name}
            </span>
          </a>
        ))}
      </nav>

      {/* Bottom Button (Remains at the Bottom) */}
      <div className="border-t-2 border-black py-2 flex items-center justify-start w-full">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="bg-white flex flex-row gap-2 items-center justify-start rounded-md w-full h-10 p-2 mt-2  border border-black/20"
        >
          <FaUserCircle className="text-xl w-6 ml-2" />
          <span
            className={`whitespace-nowrap overflow-hidden text-ellipsis transition-all duration-500 ease-in-out ${
              collapsed ? "max-w-0 opacity-0 px-0" : "max-w-48 opacity-100 px-2"
            }`}
          >
            mohnishmahakalkar@gmail.com
          </span>
        </button>
      </div>
    </div>
  );

  // return (
  //   <div
  //     className={`h-full bg-green-200 shadow-lg flex flex-col transition-all duration-500 ease-in-out ${
  //       collapsed ? "w-16" : "w-64"
  //     }`}
  //   >
  //     {/* Sidebar Header */}
  //     <div className="flex flex-col items-start justify-center p-2 border-b border-white">
  //       <button
  //         onClick={() => setCollapsed(!collapsed)}
  //         className={`bg-white flex flex-col items-center justify-start rounded-md w-fit h-fit p-2`}
  //       >
  //         <FaBars className="text-2xl flex-shrink-0" />
  //       </button>
  //     </div>

  //     {/* Navigation Menu */}
  //     <nav className="flex-1 mt-2 px-2">
  //       {menuItems.map((item, index) => (
  //         <a
  //           key={index}
  //           href={item.link}
  //           className="flex items-center gap-3 p-3 hover:bg-primary hover:text-white rounded-lg transition-all duration-300"
  //         >
  //           <span className="text-xl w-6 flex justify-start">{item.icon}</span>
  //           <span
  //             className={`overflow-hidden transition-all duration-300 ${
  //               collapsed ? "opacity-0 w-0" : "opacity-100 w-auto"
  //             }`}
  //           >
  //             {item.name}
  //           </span>
  //         </a>
  //       ))}
  //     </nav>

  //     {/* Bottom Profile Section (Matches Nav Items) */}
  //     <div className="flex flex-col items-center justify-center p-2 border-t border-white">
  //       <button
  //         onClick={() => setCollapsed(!collapsed)}
  //         className={`bg-white flex flex-row items-center justify-start rounded-md w-full h-full p-2`}
  //       >
  //         <FaUserCircle className="text-3xl flex-shrink-0" />
  //         <span className="ml-2 overflow-hidden transition-all duration-500 ease-in-out">
  //           mohnishmahakalkar@gmail.com
  //         </span>
  //       </button>
  //     </div>
  //   </div>
  // );
};

export default Sidebar;

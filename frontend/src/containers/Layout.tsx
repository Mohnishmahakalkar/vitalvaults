import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* Navbar - Sticky at the Top */}
      <Navbar className="h-14 md:h-16 fixed top-0 left-0 w-full bg-white shadow-md z-50" />

      {/* Main Content - Leaves space for Navbar */}
      <main className="flex-1 flex h-full overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;

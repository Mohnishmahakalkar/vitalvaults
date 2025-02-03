import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* Navbar takes 2/12 of the screen height */}
      <Navbar className="h-[8%]" />

      {/* Main Content takes the remaining height */}
      <main className="flex container min-w-full h-full">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;

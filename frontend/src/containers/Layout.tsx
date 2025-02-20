import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import bgImage from "../assets/background-images/login-bg.jpg";

const Layout = () => {
  return (
    <div className="flex flex-col h-screen relative">
      {/* Navbar */}
      <Navbar className="h-fit z-10" />

      {/* Background Image (Fixed & Stuck) */}
      <div
        className="fixed inset-0 bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      {/* Dark Overlay for better readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary opacity-60"></div>

      {/* Main Content Wrapper (Scrollable) */}
      <main className="flex-1 flex justify-center items-center overflow-auto relative z-10">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;

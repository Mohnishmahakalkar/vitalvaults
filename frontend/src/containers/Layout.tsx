import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useAuth } from "../context/AuthContext";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "../components/Sidebar";
import Breadcrumbs from "./Breadcrums";
import { useLocation } from "react-router-dom";

const Layout = () => {
  const { isAuthenticated } = useAuth();

  const location = useLocation();
  const pathSegments = location?.pathname
    .split("/")
    .filter(Boolean)
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1));

  return isAuthenticated ? (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <main className="flex flex-col w-full">
          <Breadcrumbs items={pathSegments} />
          <Outlet />
        </main>
      </SidebarInset>
    </SidebarProvider>
  ) : (
    <div className="flex flex-col h-screen">
      <Navbar className="h-14 md:h-16 fixed top-0 left-0 w-full bg-white shadow-md z-50" />
      <main className="flex-1 flex h-full overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;

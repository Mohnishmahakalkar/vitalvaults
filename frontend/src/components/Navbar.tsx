import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { isAuthenticated, login, logout } = useAuth();

  return (
    <nav className="bg-blue-600 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold">MyApp</h1>
        <div className="space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
        </div>
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
    </nav>
  );
};

export default Navbar;

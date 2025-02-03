import { Link } from "react-router-dom";
import NotFoundImage from "../assets/404/404.svg";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full text-center">
      {/* SVG Image from assets */}
      <img src={NotFoundImage} alt="404 Not Found" className="w-96 h-96 mb-6" />

      {/* Message */}
      <p className="text-xl mt-4">Oops! Something went wrong.</p>

      {/* Link to Login */}
      <Link
        to="/login"
        className="mt-6 px-4 py-2 bg-[#90CAF9] text-white rounded-lg"
      >
        Go to Login
      </Link>
    </div>
  );
};

export default NotFound;

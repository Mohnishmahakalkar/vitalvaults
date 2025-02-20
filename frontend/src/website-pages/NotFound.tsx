import NotFoundImage from "../assets/404/404.svg";
import CustomButton from "../components/renderer/CustomButton";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate(); // Hook to navigate within React Router
  return (
    <div className="flex flex-col items-center justify-center h-full w-full text-center bg-white">
      {/* SVG Image from assets */}
      <img src={NotFoundImage} alt="404 Not Found" className="w-96 h-96 mb-6" />

      {/* Message */}
      <p className="text-xl mt-4">Oops! Something went wrong.</p>

      {/* Link to Login */}
      <div className="w-34">
        <CustomButton
          label="Go to login"
          type="normal"
          className="w-full rounded-full mt-2"
          onClick={() => navigate("/login")} // Redirects to the login page
        />
      </div>
    </div>
  );
};

export default NotFound;

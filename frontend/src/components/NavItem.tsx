import { Link, useLocation } from "react-router-dom";
import CustomButton from "./renderer/CustomButton"; // Import your custom button

interface NavItemProps {
  path: string;
  label: string;
  icon: React.ReactNode;
  textColor?: string;
  onClick?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({
  path,
  label,
  icon,
  textColor = "text-primary",
  onClick,
}) => {
  const location = useLocation(); // Get current route

  // If we are on the login page, hide the "Login" button and show "Sign Up"
  if (location.pathname === "/login" && label === "Login") {
    return (
      <li>
        <Link to="/sign-up">
          <CustomButton label="Sign Up" type="normal" />
        </Link>
      </li>
    );
  }

  // On all other routes (except "/login"), hide "Sign Up" and only show "Login"
  if (label === "Sign Up") {
    return null;
  }

  return (
    <li className="group relative">
      {label === "Login" ? (
        // Render the Login button on all pages except "/login"
        <Link to={path} onClick={onClick}>
          <CustomButton
            label="Login"
            type="normal"
            customStyles="flex items-center gap-2"
          />
        </Link>
      ) : (
        // Render other nav items with animation
        <>
          <Link
            to={path}
            className={`flex justify-center h-full items-center gap-2 transition-colors duration-300 ${textColor}`}
            onClick={onClick}
          >
            <span className="flex items-center gap-2 transform transition-transform duration-300 group-hover:-translate-y-1">
              {icon}
              {label}
            </span>
          </Link>
          {/* Underline Animation */}
          <span
            className={`absolute left-0 -bottom-0.5 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full`}
          ></span>
        </>
      )}
    </li>
  );
};

export default NavItem;

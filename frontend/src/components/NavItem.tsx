import { Link } from "react-router-dom";

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
}) => (
  <li className="group relative">
    <Link
      to={path}
      className={`flex items-center gap-2 transition-colors duration-300 ${textColor}`}
      onClick={onClick} 
    >
      <span className="flex items-center gap-2 transform transition-transform duration-300 group-hover:-translate-y-1">
        {icon}
        {label}
      </span>
      <span
        className={`absolute left-0 bottom-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${textColor.replace(
          "text-",
          "bg-"
        )}`}
      ></span>
    </Link>
  </li>
);

export default NavItem;

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import bgImage from "../assets/background-images/login-bg.jpg";
import { AppName } from "../utils/constants/AppConfigs";
import DynamicForm, { FieldConfig } from "../components/renderer/DynamicForm";
import { Option } from "../components/renderer/CustomSelect";

const roleOptions: Option[] = [
  { value: "hospital", label: "Hospital" },
  { value: "doctor", label: "Doctor" },
  { value: "attendent", label: "Attendant" },
];

const loginFields: FieldConfig[] = [
  {
    type: "select",
    name: "role",
    label: "Role",
    options: roleOptions,
    required: true,
  },
  { type: "text", name: "username", label: "Username", required: true },
  {
    type: "password",
    name: "password",
    label: "Password",
    required: true,
    minLength: 6,
  },
];

const LoginPage: React.FC = () => {
  const handleLogin = (data: any) => {
    console.log(data);
    toast.success("Login successful!");
  };

  return (
    <div className="flex flex-grow">
      <ToastContainer />
      <div
        className="flex-grow flex items-center justify-center bg-no-repeat bg-cover bg-center relative"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary opacity-60"></div>
        <div className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-md z-10 m-4">
          <h2 className="text-4xl font-extrabold text-primary text-center mb-6">
            {AppName}
          </h2>
          <DynamicForm fields={loginFields} onSubmit={handleLogin} />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

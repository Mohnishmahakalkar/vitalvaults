import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import bgImage from "../assets/background-images/login-bg.jpg";
import { AppName } from "../utils/constants/AppConfigs";
import DynamicForm, { FieldConfig } from "../components/renderer/DynamicForm";
import { Option } from "../components/renderer/CustomSelect";

const roleOptions: Option[] = [
  { value: "hospital", label: "Hospital" },
  { value: "doctor", label: "Doctor" },
  { value: "attendant", label: "Attendant" },
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
    <div className="flex justify-center items-center w-full h-full">
      <ToastContainer />

      {/* Signup Form Container */}
      <div className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-lg z-10 relative mx-2">
        <h2 className="text-4xl font-extrabold text-primary text-center mb-6">
          {AppName}
        </h2>

        {/* Scrollable Form */}
        <div className="max-h-[70vh] overflow-y-auto scrollbar-thin">
          <DynamicForm fields={loginFields} onSubmit={handleLogin} />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

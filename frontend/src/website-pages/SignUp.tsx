import { SubmitHandler } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DynamicForm, { FieldConfig } from "../components/renderer/DynamicForm";
import bgImage from "../assets/background-images/login-bg.jpg";
import { AppName } from "../utils/constants/AppConfigs";

const signupFields: FieldConfig[] = [
  { type: "text", name: "fullName", label: "Full Name", required: true },
  { type: "email", name: "email", label: "Email", required: true },
  {
    type: "password",
    name: "password",
    label: "Password",
    required: true,
    minLength: 6,
  },
  {
    type: "radio",
    name: "gender",
    label: "Gender",
    required: true,
    options: [
      { value: "male", label: "Male" },
      { value: "female", label: "Female" },
    ],
  },
  { type: "number", name: "number", label: "phnumber", required: true },
  { type: "textarea", name: "textarea", label: "textarea", required: true },
  { type: "select", name: "select", label: "select one", required: true },
  { type: "date", name: "dob", label: "Date of Birth", required: true },
];

const SignupPage: React.FC = () => {
  const handleSignup: SubmitHandler<any> = (data) => {
    console.log("Signup Data:", data);
    toast.success("Signup successful!");
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
          <DynamicForm fields={signupFields} onSubmit={handleSignup} />
        </div>
      </div>
    </div>
  );
};

export default SignupPage;

import { SubmitHandler } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DynamicForm, { FieldConfig } from "../components/renderer/DynamicForm";
import { AppName } from "../utils/constants/AppConfigs";

const signupFields: FieldConfig[] = [
  { type: "text", name: "fullName", label: "Full Name", required: true },
  { type: "number", name: "phone", label: "Phone Number", required: true },
  { type: "date", name: "dob", label: "Date of Birth", required: true },
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
  {
    type: "password",
    name: "password",
    label: "Password",
    required: true,
    minLength: 6,
  },
  {
    type: "password",
    name: "confirmPassword",
    label: "Confirm Password",
    required: true,
    minLength: 6,
  },
];

const SignupPage: React.FC = () => {
  const handleSignup: SubmitHandler<any> = (data) => {
    console.log("Signup Data:", data);
    toast.success("Signup successful!");
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
        <div className="max-h-[70vh] overflow-y-auto scrollbar-thin p-2">
          <DynamicForm fields={signupFields} onSubmit={handleSignup} />
        </div>
      </div>
    </div>
  );
};

export default SignupPage;

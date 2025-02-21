import { SubmitHandler } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DynamicForm, { FieldConfig } from "../components/renderer/DynamicForm";
import { AppName } from "../utils/constants/AppConfigs";
import PageWrapper from "../containers/PageWrapper";
import bgImage from "../assets/background-images/default-bg.jpg";

const signupFields: FieldConfig[] = [
  { type: "text", name: "fullName", label: "Full Name", required: true },
  {
    type: "phone",
    name: "phoneNumber",
    label: "Mobile Number",
    required: true,
    minLength: 10,
  },
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
    <PageWrapper backgroundImage={bgImage}>
      <ToastContainer position="bottom-right" />
      <div className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-fit md:max-w-lg h-fit mx-2">
        <h2 className="text-4xl font-extrabold text-primary text-center mb-6">
          {AppName}
        </h2>
        <DynamicForm
          fields={signupFields}
          onSubmit={handleSignup}
          layout="row"
        />
      </div>
    </PageWrapper>
  );
};

export default SignupPage;

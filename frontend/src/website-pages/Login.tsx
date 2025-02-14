import { useForm, SubmitHandler } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CustomSelect, Option } from "../components/renderer/CustomSelect";
import CustomInput from "../components/renderer/CustomInput";
import CustomButton from "../components/renderer/CustomButton";
import bgImage from "../assets/background-images/login-bg.jpg";
import { AppName } from "../utils/constants/AppConfigs";

interface LoginFormData {
  role: Option | null;
  username: string;
  password: string;
}

const options: Option[] = [
  { value: "hospital", label: "Hospital" },
  { value: "doctor", label: "Doctor" },
  { value: "attendent", label: "Attendent" },
];

const LoginPage: React.FC = () => {
  const { handleSubmit, control } = useForm<LoginFormData>();

  const onSubmit: SubmitHandler<LoginFormData> = (data) => {
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
        <div className="absolute inset-0 bg-gradient-to-r from-primary opacity-60"></div>{" "}
        {/* Gradient overlay */}
        <div className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-md z-10 m-4">
          <h2 className="text-4xl font-extrabold text-primary text-center mb-6">
            {AppName}
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <CustomSelect
              label="Role"
              name="role"
              control={control}
              options={options}
              rules={{ required: "Role is required" }}
            />
            <CustomInput
              label="Username"
              name="username"
              control={control}
              placeholder="Enter your username"
              rules={{ required: "Username is required" }}
            />
            <CustomInput
              label="Password"
              name="password"
              control={control}
              type="password"
              placeholder="Enter your password"
              rules={{
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              }}
            />
            <CustomButton
              label="Login"
              type="normal"
              isSubmit
              className="w-full rounded-full "
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

import { useForm, SubmitHandler } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CustomSelect, Option } from "../components/renderer/CustomSelect";
import CustomInput from "../components/renderer/CustomInput";

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
    <div className="flex flex-grow bg-gray-100">
      <ToastContainer />
      <div className="flex-grow flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

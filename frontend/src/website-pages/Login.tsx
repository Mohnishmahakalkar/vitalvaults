import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../redux/loadingSlice";
import { RootState } from "../redux/store";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AppName } from "../utils/constants/AppConfigs";
import DynamicForm, { FieldConfig } from "../components/renderer/DynamicForm";

const loginFields: FieldConfig[] = [
  {
    type: "phone",
    name: "phoneNumber",
    label: "Mobile Number",
    required: true,
    minLength: 10,
  },
  {
    type: "password",
    name: "password",
    label: "Password",
    required: true,
    minLength: 6,
  },
];

const LoginPage: React.FC = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state: RootState) => state.loading.isLoading);

  const handleLogin = (data: any) => {
    console.log(data);

    toast.success("Login successful!");
    // dispatch(setLoading(false));
  };

  if (isLoading) return null;

  return (
    <div className="flex justify-center items-center w-full h-full">
      <ToastContainer position="bottom-right" />

      {/* Loading Spinner */}

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

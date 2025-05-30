import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AppName } from "../utils/constants/AppConfigs";
import DynamicForm, { FieldConfig } from "../components/renderer/DynamicForm";
import PageWrapper from "../containers/PageWrapper";
import bgImage from "../assets/background-images/default-bg.jpg";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const loginFields: FieldConfig[] = [
  {
    type: "phone",
    name: "phoneNumber",
    label: "Mobile Number",
    // required: true,
    minLength: 10,
  },
  {
    type: "password",
    name: "password",
    label: "Password",
    // required: true,
    minLength: 6,
  },
];

const LoginPage: React.FC = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state: RootState) => state.loading.isLoading);
  const navigate = useNavigate();

  const { login } = useAuth();

  const handleLogin = (data: any) => {
    console.log(data);
    navigate("/dashboard");
    login();

    toast.success("Login successful!");
    // dispatch(setLoading(false));
  };

  if (isLoading) return null;

  return (
    <PageWrapper backgroundImage={bgImage}>
      <ToastContainer position="bottom-right" />
      <div className="flex flex-1 items-center justify-center w-full h-full">
        <div className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-lg mx-2">
          <h2 className="text-4xl font-extrabold text-primary text-center mb-6">
            {AppName}
          </h2>
          <DynamicForm fields={loginFields} onSubmit={handleLogin} />
        </div>
      </div>
    </PageWrapper>
  );
};

export default LoginPage;

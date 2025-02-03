import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import loadingSvg from "../assets/loading/loading.svg"

const Loading = () => {
  const isLoading = useSelector((state: RootState) => state.loading.isLoading);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
     <img src={loadingSvg} alt="Loading..." className="h-40 w-40" />
    </div>
  );
};

export default Loading;

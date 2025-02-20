import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../redux/loadingSlice";
import { RootState } from "../redux/store";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoading(true));
    setTimeout(() => {
      dispatch(setLoading(false));
    }, 2000);
  }, [dispatch]);

  const isLoading = useSelector((state: RootState) => state.loading.isLoading);

  if (isLoading) return null;

  return <div className="flex flex-col w-full">home page</div>;
};

export default Home;

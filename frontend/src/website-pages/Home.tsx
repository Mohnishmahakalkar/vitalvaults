import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setLoading } from "../redux/loadingSlice";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoading(true)); 
    setTimeout(() => {
      dispatch(setLoading(false)); 
    }, 2000);
  }, [dispatch]);

  return (
    <h2 className="text-center text-3xl mt-10">Welcome to the Home Page</h2>
  );
};

export default Home;

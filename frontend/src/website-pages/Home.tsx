import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setLoading } from "../redux/loadingSlice";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoading(true)); // Start loading
    setTimeout(() => {
      dispatch(setLoading(false)); // Stop loading after 2s (simulating an API call)
    }, 2000);
  }, [dispatch]);

  return <h2 className="text-center text-3xl mt-10">Welcome to the Home Page</h2>;
};

export default Home;

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Layout from "./containers/Layout";
import ProtectedRoute from "./containers/ProtectedRoute";
import Home from "./website-pages/Home";
import About from "./website-pages/About";
import Contact from "./website-pages/Contact";
import NotFound from "./website-pages/NotFound";
import Loading from "./components/Loading";
import Login from "./website-pages/Login";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "dashboard",
          element: <ProtectedRoute />, 
          children: [{ path: "", element: <About /> }],
        },
        { index: true, element: <Home /> }, 
        { path: "about", element: <About /> },
        { path: "contact", element: <Contact /> },
        { path: "login", element: <Login /> },
        { path: "404", element: <NotFound /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true,
    },
  }
);

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Loading />
      <RouterProvider router={router} />
    </AuthProvider>
  );
};

export default App;

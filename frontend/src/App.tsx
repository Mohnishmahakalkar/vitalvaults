import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Layout from "./containers/Layout";
import ProtectedRoute from "./containers/ProtectedRoute";
import Home from "./website-pages/Home";
import About from "./website-pages/About";
import Contact from "./website-pages/Contact";
import NotFound from "./website-pages/NotFound";
import Loading from "./components/Loading";
import Login from "./website-pages/Login";

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Loading />
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* Protected Routes */}
            <Route element={<ProtectedRoute />}>
              <Route path="dashboard" element={<About />} />
            </Route>

            {/* Public Routes */}
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="login" element={<Login />} />

            {/* 404 Page */}
            <Route path="404" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;

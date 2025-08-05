import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import AyurvedicKit from "./Pages/AyurvedicKit";
import Contact from "./Pages/Contact";
import IncomePlan from "./Pages/IncomePlan";
import Testimonial from "./Pages/Testimonial";
import Benefits from "./Pages/Benefits";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { useAuth } from "./Context/AuthProvider";

function App() {
  const [authuser, setauthuser] = useAuth();
  // console.log(authuser);
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="/about"
        element={authuser ? <AboutUs /> : <Navigate to={"/login"} />}
      />

      <Route
        path="/benefits"
        element={authuser ? <Benefits /> : <Navigate to={"/login"} />}
      />

      <Route
        path="/ayurvedic-kit"
        element={authuser ? <AyurvedicKit /> : <Navigate to={"/login"} />}
      />

      <Route
        path="/income-plan"
        element={authuser ? <IncomePlan /> : <Navigate to={"/login"} />}
      />

      <Route
        path="/testimonial"
        element={authuser ? <Testimonial /> : <Navigate to={"/login"} />}
      />
      <Route
        path="/contact"
        element={authuser ? <Contact /> : <Navigate to={"/login"} />}
      />
      <Route
        path="/signup"
        element={!authuser ? <Signup /> : <Navigate to={"/"} />}
      />
      <Route
        path="/login"
        element={!authuser ? <Login /> : <Navigate to={"/"} />}
      />
    </Routes>
  );
}

export default App;

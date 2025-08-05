import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Mainsection from "../components/Mainsection";

const Home = () => {
  return (
    <div>
      <Header />
      <Mainsection />

      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Home;

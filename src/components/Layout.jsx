import { Outlet } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";


const Layout = () => {
  return (
    <>
      <Navbar />

      <main className="app">
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default Layout;
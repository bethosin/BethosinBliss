import { Outlet } from "react-router-dom";
import Navbar from "../component/navbar/Navbar";
import Footer from "../component/Footer/Footer";
import { WHATSAPP_NUMBER } from "../utils/constants";

const mainLayout = () => {
  return (
    <div>
      <Navbar />

      <Outlet />

      <Footer />

      {/* 🔥 GLOBAL FLOATING WHATSAPP */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 bg-green-500 text-white px-4 py-3 rounded-full shadow-lg hover:bg-green-600 transition z-50"
      >
        <span className="hidden sm:inline">Chat</span> 💬
      </a>
    </div>
  );
};

export default mainLayout;

import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/mainLayouts";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Contact from "./pages/contact";
import useReveal from "./hooks/useReveal";

const App = () => {
  useReveal();
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
};

export default App;

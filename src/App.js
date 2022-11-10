import "./App.css";
import { Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import Login from "./pages/Login";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;

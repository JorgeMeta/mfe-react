import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import "./index.css";

const ProductsApp = lazy(() => import("products/ProductsApp"));
const CartApp = lazy(() => import("cart/CartApp"));
export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={<div>Carregando...</div>}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/products/*" element={<ProductsApp />} />
          <Route path="/cart/*" element={<CartApp />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

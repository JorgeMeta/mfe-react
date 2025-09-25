import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

const ProductsApp = lazy(() => import("products/ProductsApp"));

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={<div>Carregando...</div>}>
        <Routes>
          <Route path="/products/*" element={<ProductsApp />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

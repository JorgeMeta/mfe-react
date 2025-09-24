import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const ProductsApp = React.lazy(() => import("products/ProductsApp"));
const CartApp = React.lazy(() => import("cart/CartApp"));
const dashBoardApp = React.lazy(() => import("dashboard/DashboardApp"));

export default function App() {
  return (
    <BrowserRouter>
      <header>
        <Link to="/products">Produtos</Link> | <Link to="/cart">Carrinhos</Link>{" "}
        | <Link to="/dashboard">Dashboard</Link>
      </header>
      <Suspenese>
        <Routes>
          <Route to="/products/*" element={<ProductsApp />} />
          <Route to="/cart/*" element={<CartApp />} />
          <Route to="/dashboard/*" element={<dashBoardApp />} />
        </Routes>
      </Suspenese>
    </BrowserRouter>
  );
}

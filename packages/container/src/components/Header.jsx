import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header style={{ padding: "10px", backgroundColor: "#eee" }}>
      <Link to="/products" style={{ marginRight: "10px" }}>
        Produtos
      </Link>
      <Link to="/cart" style={{ marginRight: "10px" }}>
        Carrinho
      </Link>
      <Link to="/dashboard">Dashboard</Link>
    </header>
  );
}

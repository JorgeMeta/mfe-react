import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaShoppingCart,
  FaBoxOpen,
  FaTachometerAlt,
  FaUser,
} from "react-icons/fa";
import styles from "./Header.module.css";

export default function Header() {
  const [cartCount, setCartCount] = useState(0);
  const [showUserMenu, setShowUserMenu] = useState(false);
  useEffect(() => {
    const fetchCart = () => {
      fetch("http://localhost:3001/cart")
        .then((res) => res.json())
        .then((data) => {
          const totalQty = data.reduce(
            (acc, item) => acc + Number(item.qty),
            0
          );
          setCartCount(totalQty);
        })
        .catch(console.error);
    };

    fetchCart(); // busca inicial
    const interval = setInterval(fetchCart, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>MyShop</div>

      <nav className={styles.navIcons}>
        <Link to="/products" className={styles.icon}>
          <FaBoxOpen />
        </Link>
        <Link to="/cart" className={styles.icon}>
          <FaShoppingCart />
          {cartCount > 0 && <span className={styles.badge}>{cartCount}</span>}
        </Link>
        <Link to="/dashboard" className={styles.icon}>
          <FaTachometerAlt />
        </Link>
        <div
          className={styles.icon}
          onClick={() => setShowUserMenu(!showUserMenu)}
        >
          <FaUser />
          {showUserMenu && (
            <div className={styles.userMenu}>
              <Link to="/profile">Perfil</Link>
              <Link to="/settings">Configurações</Link>
              <Link to="/logout">Sair</Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}

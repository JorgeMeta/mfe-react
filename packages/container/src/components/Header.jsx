import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaShoppingCart,
  FaBoxOpen,
  FaTachometerAlt,
  FaUser,
} from "react-icons/fa";
import styles from "./Header.module.css";

export default function Header() {
  const [cartCount] = useState(3);
  const [showUserMenu, setShowUserMenu] = useState(false);

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

import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white px-4">
      {/* Logo / Título */}
      <h1 className="text-5xl font-extrabold mb-4 text-center">
        Bem-vindo à MyShop!
      </h1>
      <p className="text-xl mb-8 text-center max-w-xl">
        Explore nossos produtos e encontre tudo o que você precisa. Qualidade e
        conforto em um só lugar.
      </p>

      {/* Botões */}
      <div className="flex flex-wrap gap-6 justify-center">
        <Link
          to="/products"
          className="bg-white text-indigo-600 font-bold py-3 px-6 rounded-lg shadow-lg transform transition hover:-translate-y-1 hover:scale-105 hover:bg-gray-100"
        >
          Ver Produtos
        </Link>
        <Link
          to="/cart"
          className="bg-white text-indigo-600 font-bold py-3 px-6 rounded-lg shadow-lg transform transition hover:-translate-y-1 hover:scale-105 hover:bg-gray-100"
        >
          Carrinho
        </Link>
      </div>

      {/* Footer discreto */}
      <footer className="mt-16 text-sm text-white/70">
        &copy; {new Date().getFullYear()} MyShop. Todos os direitos reservados.
      </footer>
    </div>
  );
}

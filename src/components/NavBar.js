import React from 'react';

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <a href="/" className="text-lg font-semibold">
            PsAIcoTools
          </a>
        </div>
        <div>
          <ul className="flex space-x-4">
            <li><a href="#beneficios" className="hover:text-purple-300">Beneficios</a></li>
            <li><a href="#caracteristicas" className="hover:text-purple-300">¿Cómo funciona?</a></li>
            <li><a href="#formulario" className="hover:text-purple-300">Obtén insights</a></li>
            <li><a href="#testimonios" className="hover:text-purple-300">Testimonios</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

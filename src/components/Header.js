function Header() {
    return (
      <header className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white text-center py-16 px-4 md:py-40">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Bienvenidos a PsAIcoTools
        </h1>
        <p className="text-xl md:text-2xl mb-6 max-w-4xl mx-auto">
          La herramienta que lleva la inteligencia artificial al corazón de la psicoterapia.
        </p>
        <p className="text-md md:text-lg mb-6 max-w-3xl mx-auto">
          Transforma las transcripciones de tus sesiones en profundos insights, apoyándote en tu labor terapéutica.
        </p>
        <a 
          href="#descubremas" 
          className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-3 px-6 rounded-full transition duration-300"
        >
          Descubre Más
        </a>
      </header>
    );
  }
  
  export default Header;
  
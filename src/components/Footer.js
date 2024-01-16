function Footer() {
    return (
      <footer className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-wrap justify-between items-center">
            <div className="w-full md:w-1/3 text-center md:text-left">
              <h3 className="text-lg font-bold mb-2">PsAIcoTools</h3>
                <p>Enriqueciendo la práctica psicoterapéutica con inteligencia artificial avanzada.</p>
            </div>
            <div className="w-full md:w-1/3 text-center">
                <h3 className="text-lg font-bold mb-2">Enlaces Rápidos</h3>
                <ul>
                <li><a href="#beneficios">Beneficios</a></li>
                <li><a href="#caracteristicas">¿Cómo Funciona?</a></li>
                <li><a href="#formulario">Obtén insights</a></li>
                <li><a href="#testimonios">Testimonios</a></li>
                </ul>
            </div>
            <div className="w-full md:w-1/3 text-center md:text-right">
                <h3 className="text-lg font-bold mb-2">Contáctanos</h3>
                <p>info@psaicotools.com</p>
                <p>+1 (555) 123-4567</p>
            </div>
        </div>
        <div className="text-center pt-4">
            <p className="text-sm">© {new Date().getFullYear()} PsAIcoTools. Todos los derechos reservados.</p>
        </div>
    </div>
</footer>
);
}

export default Footer;
  
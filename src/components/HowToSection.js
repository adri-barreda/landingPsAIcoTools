function HowToSection() {
    return (
      <section id = "caracteristicas" className="py-12 px-4 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white md:py-40">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-10">
            Cómo Funciona PsAIcoTools
          </h2>
          <div className="flex flex-wrap justify-center text-left">
            <div className="md:w-1/3 p-4 mb-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">1. Sube la Grabación de la Sesión</h3>
              <p className="text-md md:text-lg">
                Carga la grabación de tu sesión de terapia. Nuestro sistema está preparado para manejar formatos de texto y audio.
              </p>
            </div>
            <div className="md:w-1/3 p-4 mb-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">2. Análisis Avanzado por IA</h3>
              <p className="text-md md:text-lg">
                Nuestro sistema procesa el texto para extraer información valiosa, utilizando algoritmos avanzados de IA.
              </p>
            </div>
            <div className="md:w-1/3 p-4 mb-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">3. Recibe Insights Revolucionarios</h3>
              <p className="text-md md:text-lg">
                Te enviaremos un informe detallado con análisis e interpretaciones significativas que te ayudarán en tu práctica terapéutica.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default HowToSection;
  
function BenefitsSection() {
    return (
      <section id ="beneficios" className="py-12 px-4 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white md:py-30">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-10">
            Descubre los Beneficios Clave de PsAIcoTools
          </h2>
          <div className="flex flex-wrap justify-center text-left">
            <div className="md:w-1/3 p-4 mb-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Comprensión Profunda del Discurso del Paciente</h3>
              <p className="text-md md:text-lg">
                Análisis de patrones y temas en transcripciones para una nueva perspectiva sobre las preocupaciones y mentalidades de los pacientes.
              </p>
            </div>
            <div className="md:w-1/3 p-4 mb-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Identificación de Tendencias y Cambios</h3>
              <p className="text-md md:text-lg">
                Observación detallada de la evolución en el pensamiento y comportamiento del paciente a lo largo del tiempo.
              </p>
            </div>
            <div className="md:w-1/3 p-4 mb-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Soporte en la Toma de Decisiones Clínicas</h3>
              <p className="text-md md:text-lg">
                Insights valiosos como herramienta adicional para planificar intervenciones y estrategias terapéuticas efectivas.
              </p>
            </div>
          </div>
        </div>  
      </section>
    );
  }
  
  export default BenefitsSection;
  
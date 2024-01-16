function FormSection({ email, setEmail, setAudio, handleSubmit }) {
    return (
    <section id= "formulario">
      <div className="py-12 px-4 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Introduce tu grabación para obtener insights
          </h2>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden p-8">
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Correo Electrónico
              </label>
              <input 
                className="w-full bg-gray-200 rounded border border-gray-300 focus:border-purple-500 text-base px-4 py-2" 
                id="email" 
                type="email" 
                placeholder="tuemail@ejemplo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="audio">
                Adjunta la Transcripción de la Sesión
              </label>
              <input 
                className="w-full bg-gray-200 rounded border border-gray-300 focus:border-purple-500 text-base px-4 py-2" 
                id="audio" 
                type="file" 
                onChange={(e) => setAudio(e.target.files[0])}
                accept="audio/*"
                required
              />
            </div>
            <button 
              className="w-full text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              type="submit"
            >
              Enviar y Recibir Insights
            </button>
          </form>
        </div>
      </div>
      </section>
    );
  }
  
  export default FormSection;
  
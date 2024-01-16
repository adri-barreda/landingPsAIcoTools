import React, { useState } from 'react';
import axios from 'axios';
import './index.css';
import Navbar from './components/NavBar'; // Asegúrate de que la ruta sea correcta
import Header from './components/Header'; // Asegúrate de que la ruta sea correcta
import FaqSection from './components/faqSection';
import BenefitsSection from './components/BenefitsSection';
import HowToSection from './components/HowToSection';
import FormSection from './components/FormSection';
import ProfessionalDevelopmentSection from './components/ProfessionalDevelopmentSection'
import TestimonialsSection from './components/TestimonialsSection'
import Footer from './components/Footer'


function App() {
  const [email, setEmail] = useState('');
  const [audio, setAudio] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('email', email);
    formData.append('audio', audio);

    axios.post('http://localhost:3001/submit', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then(response => {
      const { id } = response.data;
      console.log("Registro guardado con ID:", id);
    })
    .catch(error => {
      console.error(error);
    });
};

return (
  <>
    <Navbar />
    <Header />
    <FaqSection />
    <BenefitsSection />
    <HowToSection />
    <FormSection email={email} setEmail={setEmail} setAudio={setAudio} handleSubmit={handleSubmit} />
    <ProfessionalDevelopmentSection />
    <TestimonialsSection />
    <Footer />
    </>
);
}

export default App;
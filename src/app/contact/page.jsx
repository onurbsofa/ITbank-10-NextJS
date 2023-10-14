'use client'

import React, { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado con los siguientes datos:', formData);
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    border: '2px solid #55254e',
    borderRadius: '10px',
    maxWidth: '400px',
    margin: '0 auto',
  };

  return (
    <div>
     <h2>Contacto</h2>
      <p>Si tienes preguntas, comentarios o inquietudes, no dudes en ponerte en contacto con nosotros.</p>
      <p>Estamos aquí para ayudarte en lo que necesites.</p>

      <h2>Información de Contacto</h2>
      <p>Correo Electrónico: <a href="mailto:info@itbank.com">info@itbank.com</a></p>
      <p>Teléfono: +123 456 789</p>

      <h2>Horario de Atención</h2>
      <p>Nuestro equipo de atención al cliente está disponible de lunes a viernes, de 9:00 a.m. a 6:00 p.m.</p>
      <p>Si nos contactas fuera de este horario, te responderemos tan pronto como sea posible en el siguiente día hábil.</p>

      <h2>Ubicación</h2>
      <p>Estamos ubicados en Avenida Siemprevida 742.</p>
      <p>¡Esperamos con interés poder asistirte!</p>

      <h2>Formulario de Contacto</h2>
      <form onSubmit={handleSubmit} style={formStyle}>
        <div>
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="message">Mensaje:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}


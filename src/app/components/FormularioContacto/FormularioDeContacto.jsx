'use client'
import React from 'react'
import { useState } from 'react';

export default function FormularioDeContacto() {

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
  )
}

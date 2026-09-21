import React from 'react'
import './ContactOption.css'

export default function ContactOption(propiedades) {
  return (
     <div className="contact-option">
        <div className='imagen-contacto-container'>
            <img src={propiedades.imagen} alt={propiedades.nombre} className="imagen-contacto" />
        </div>
        <div className="contact-info">
            <h2 className="contact-name">{propiedades.nombre}</h2>
            <p className="contact-preview">{propiedades.ultimo_mensaje}</p>
        </div>
        <div className="contact-meta">
            <span className="contact-time">{propiedades.fecha_ultimo_mensaje}</span>
            {propiedades.mensajes_sin_leer && (
                <span className="contact-badge">{propiedades.mensajes_sin_leer}</span>
            )}
        </div>
    </div>
  )
}

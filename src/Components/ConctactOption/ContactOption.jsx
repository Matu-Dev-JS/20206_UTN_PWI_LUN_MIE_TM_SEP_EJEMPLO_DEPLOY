import React from 'react'

export default function ContactOption(propiedades) {
  return (
     <div >
        <div className='imagen-contacto-container'>
            <img src={propiedades.imagen} alt={propiedades.nombre} className="imagen-contacto" />
        </div>
        <h2>{propiedades.nombre}</h2>
        <p>{propiedades.ultimo_mensaje}</p>
        <span>{propiedades.fecha_ultimo_mensaje}</span>
        <span>{propiedades.mensajes_sin_leer}</span>
        <hr />
    </div>
  )
}

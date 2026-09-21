import React from 'react'
import ContactOption from '../ConctactOption/ContactOption'

export default function ContactsList() {

    const contact_list = [
        {
            id: 1,
            nombre: 'Marcos',
            ultimo_mensaje: 'hay que juntarnos!..',
            imagen: "https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fwww.gravatar.com%2Favatar%2F2c7d99fe281ecd3bcd65ab915bac6dd5%3Fs%3D250",
            mensajes_sin_leer: 2,
            fecha_ultimo_mensaje: "2/9/2026 14:30"
        },
        {
            id: 2,
            nombre: "John Smith",
            ultimo_mensaje: "Testing",
            imagen: "https://i.pinimg.com/736x/89/28/4b/89284b5c67cac49c7b0be588a335932a.jpg",
            mensajes_sin_leer: 3,
            fecha_ultimo_mensaje: "2/9/2026 08:21"
        },
        {
            id: 3,
            nombre: "Jane Doe",
            ultimo_mensaje: "Hello there",
            imagen: "https://i.pinimg.com/736x/1a/98/03/1a9803d93ff615ea7fbc198ba53401c5.jpg",
            mensajes_sin_leer: 1,
            fecha_ultimo_mensaje: "2/9/2026 12:15"
        },
        {
            id: 4,
            nombre: "Samantha Lee",
            ultimo_mensaje: "See you tumorrow",
            imagen: "https://i.pinimg.com/736x/b7/5f/d2/b75fd2fc1f8cbb7f65bb4f1a87dcc71e.jpg",
            mensajes_sin_leer: null,
            fecha_ultimo_mensaje: "2/9/2026 09:35"
        }
    ]
    if(contact_list.length === 0 ){
        return <span>No tienes contactos registrados</span>
    }
    const contactos_jsx = []
    for (const contacto of contact_list) {
        contactos_jsx.push(
            <ContactOption 
                id={contacto.id}
                imagen={contacto.imagen}
                ultimo_mensaje={contacto.ultimo_mensaje}
                nombre={contacto.nombre}
                mensajes_sin_leer={contacto.mensajes_sin_leer}
                fecha_ultimo_mensaje={contacto.fecha_ultimo_mensaje}
                key={contacto.id}
            />
        )
    }
    return (
        <div>
            {contactos_jsx}
        </div>
    )
}

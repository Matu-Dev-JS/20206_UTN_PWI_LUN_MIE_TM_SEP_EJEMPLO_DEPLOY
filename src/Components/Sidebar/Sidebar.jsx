import React, { useContext } from "react"

import { Link } from "react-router"
import ContactOption from "../ConctactOption/ContactOption"
import { ContactContext } from "../../Context/ContactContext"
import "./Sidebar.css"

export default function Sidebar() {

    const {contacts} = useContext(ContactContext)
    
    console.log('[Sidebar.jsx] Contactos', contacts)

    const contact_list = [
        {
            id: 1,
            nombre: 'Marcos',
            ultimo_mensaje: 'Hey qué tal? Hay que juntarnos! La semana que viene es mi cumple y estas invitada',
            imagen: "https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fwww.gravatar.com%2Favatar%2F2c7d99fe281ecd3bcd65ab915bac6dd5%3Fs%3D250",
            mensajes_sin_leer: 2,
            fecha_ultimo_mensaje: "14:30"
        },
        {
            id: 2,
            nombre: "John Smith",
            ultimo_mensaje: "Testeando... 1, 2, 3, probando",
            imagen: "https://i.pinimg.com/736x/89/28/4b/89284b5c67cac49c7b0be588a335932a.jpg",
            mensajes_sin_leer: 3,
            fecha_ultimo_mensaje: "08:21"
        },
        {
            id: 3,
            nombre: "Jane Doe",
            ultimo_mensaje: "Holaaaaaaa, tanto tiempo",
            imagen: "https://i.pinimg.com/736x/1a/98/03/1a9803d93ff615ea7fbc198ba53401c5.jpg",
            mensajes_sin_leer: 1,
            fecha_ultimo_mensaje: "12:15"
        },
        {
            id: 4,
            nombre: "Samantha Lee",
            ultimo_mensaje: "Genial, Marcos, estoy!",
            imagen: "https://i.pinimg.com/736x/b7/5f/d2/b75fd2fc1f8cbb7f65bb4f1a87dcc71e.jpg",
            mensajes_sin_leer: null,
            fecha_ultimo_mensaje: "09:35"
        }
    ]
    if (contact_list.length === 0) {
        return <span>No tienes contactos registrados</span>
    }
    const contactos_jsx = []
    for (const contacto of contact_list) {
        contactos_jsx.push(
            <Link
                to={`/contact/${contacto.id}`}
                key={contacto.id}
            >
                <ContactOption
                    id={contacto.id}
                    imagen={contacto.imagen}
                    ultimo_mensaje={contacto.ultimo_mensaje}
                    nombre={contacto.nombre}
                    mensajes_sin_leer={contacto.mensajes_sin_leer}
                    fecha_ultimo_mensaje={contacto.fecha_ultimo_mensaje}
                    key={contacto.id}
                />
            </Link>
        )
    }
    return (
        <div className="sidebar">
            <div className="sidebar-logo">
                <svg viewBox="0 0 104 28" height="28" width="104" preserveAspectRatio="xMidYMid meet" fill="none">
                    <title>wa-wordmark</title>
                    <path fill="currentColor" d="m69.56 15.13 2.05-6.26 2.07 6.26zm28.8 3.94c-1.49 0-2.33-1.04-2.33-3.16v-.54c0-1.92.89-3.09 2.42-3.09 1.25 0 2.27.89 2.27 3.35s-.93 3.44-2.36 3.44m-5.55 6.43h3.2v-5.36a3.8 3.8 0 0 0 3.15 1.52c2.98 0 4.84-2.34 4.84-6.12 0-3.77-1.6-5.85-4.62-5.85-1.5 0-2.61.54-3.46 1.67v-1.32h-3.1zm-7.04-6.43c-1.49 0-2.33-1.04-2.33-3.16v-.54c0-1.92.89-3.09 2.42-3.09 1.25 0 2.27.89 2.27 3.35s-.93 3.44-2.36 3.44m-5.55 6.43h3.2v-5.36a3.8 3.8 0 0 0 3.15 1.52c2.98 0 4.84-2.34 4.84-6.12 0-3.77-1.6-5.85-4.62-5.85-1.5 0-2.61.54-3.46 1.67v-1.32h-3.1zm-16.06-4.19h3.41l1.14-3.41h5.81l1.15 3.41h3.52L73.69 5.9h-4zm-5.42.35c3.26 0 4.92-1.34 4.92-3.54S62.62 15 59.64 14.5l-1.4-.24c-1.2-.2-1.58-.58-1.58-1.2 0-.63.48-1.13 1.84-1.13 1.27 0 1.8.47 2 1.68h2.99c-.17-2.57-1.82-3.93-4.99-3.93-2.96 0-4.86 1.28-4.86 3.46s1.27 3.02 4.13 3.5l1.3.21c1.18.2 1.46.63 1.46 1.28 0 .75-.5 1.23-1.86 1.23s-2.14-.52-2.26-1.7h-3.05c.1 2.8 2.16 3.99 5.38 3.99m-8.86-.09c1 0 2.01-.28 2.62-.7v-2.41q-.92.52-1.73.52c-.93 0-1.43-.39-1.43-1.58v-4.86h3.16v-2.5h-3.16v-3.1H46.5v1.73c0 .97-.23 1.38-1.2 1.38h-.85v2.5h1.7v4.97c0 2.61 1 4.06 3.74 4.06m-11.96-2.16c-1.04 0-1.62-.45-1.62-1.25 0-.9.67-1.34 2.22-1.6a5 5 0 0 0 2.06-.7v1.11c0 1.49-1.06 2.44-2.66 2.44m-.82 2.25c1.66 0 2.83-.7 3.74-1.7q.16.8.56 1.35h3.02q-.8-1.27-.78-3.76v-3.6c0-2.68-1.42-4.26-4.8-4.26-2.97 0-4.72 1.23-5.07 3.93h2.92c.17-1.03.8-1.64 2.05-1.64 1.17 0 1.84.48 1.84 1.3s-.5 1.1-2.7 1.42c-2.4.35-4.6 1.21-4.6 3.63 0 2.16 1.53 3.33 3.82 3.33m-15.61-.35h3.2v-6.6c0-.79.19-1.15.66-1.63a2.5 2.5 0 0 1 1.77-.73c1.06 0 1.62.58 1.62 2v6.96h3.2v-7.56c0-2.61-1.3-4.06-3.74-4.06-1.25 0-2.42.4-3.52 1.69V5.89h-3.2zm-17.34 0h3.52l2.55-11.12 2.59 11.12h3.56L20.45 5.9h-3.54l-2.42 11.38-2.59-11.3H8.7L6.07 17.33 3.65 5.89H0z"></path>
                </svg>
            </div>
            <div className="sidebar-header">
                <div className="sidebar-search">
                    <input type="text" placeholder="Buscar o empezar un nuevo chat" />
                </div>
            </div>
            <div className="sidebar-contacts">
                {contactos_jsx}
            </div>
        </div>
    )
}

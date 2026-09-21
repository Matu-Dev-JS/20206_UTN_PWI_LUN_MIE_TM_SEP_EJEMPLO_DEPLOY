import React, { useContext } from 'react'
import { useParams } from 'react-router'
import Sidebar from '../../Components/Sidebar/Sidebar'
import { ThemeContext } from '../../context/ThemeContext'
import { LangContext } from '../../Context/LangContext'


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

export default function ContactDetailScreen() {
    const {langSelected} = useContext(LangContext)
    console.log('[ContactDetailScreen.jsx] ', langSelected)

    const { contact_id } = useParams()
    const contactId = Number(contact_id)
    let contact_selected = null
    for(const contact of contact_list){
        if(contact.id === contactId){
            contact_selected = contact
        }
    }
    if (!contact_selected) {
        return <div>No se encontró el contacto.</div>
    }
    return (
        <div>
            <Sidebar/>
            <h1>Detalle del contacto</h1>
            <h2>{contact_selected.nombre}</h2>
            <p>Último mensaje: {contact_selected.ultimo_mensaje}</p>
            <p>Fecha: {contact_selected.fecha_ultimo_mensaje}</p>
        </div>
    )
}
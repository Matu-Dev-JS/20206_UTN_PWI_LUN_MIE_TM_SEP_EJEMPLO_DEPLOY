import React, { useContext } from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import { LangContext } from '../../Context/LangContext'
import { ContactContext } from '../../Context/ContactContext'
import { formatMessageDate } from '../../utils/formatDate'

export default function ContactDetailScreen() {
    const { langSelected } = useContext(LangContext)
    const { selected_contact, getLastMessage } = useContext(ContactContext)

    console.log('[ContactDetailScreen.jsx] ', langSelected)
    console.log('[ContactDetailScreen.jsx] Contacto seleccionado:', selected_contact)

    if (!selected_contact) {
        return (
            <div>
                <Sidebar />
                <div>No se encontró el contacto.</div>
            </div>
        )
    }

    const lastMessage = getLastMessage(selected_contact.messages)

    return (
        <div>
            <Sidebar />
            <h1>Detalle del contacto</h1>
            <h2>{selected_contact.name}</h2>
            <p>Último mensaje: {lastMessage ? lastMessage.content : 'Sin mensajes'}</p>
            <p>Fecha: {lastMessage ? formatMessageDate(lastMessage.created_at) : formatMessageDate(selected_contact.last_connection)}</p>
        </div>
    )
}
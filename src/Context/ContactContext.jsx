import contact_list_server from "../data/contact-data-mook";

/* 
Paso 1:
    Crear un contexto llamado ContactContext que tenga un estado interno de contacts
    Este contexto debera ser a nivel de rutas
    Las rutas que afectara son:
        - /
        - /contact/:contact_id

    Pueden probarlo rapidamente haciendo un console.log en los componentes afectados, para revisar si efectivamente llega la informacion.

Paso 2:
    Remplazar/usar en el Sidebar.jsx el estado de contactos para renderizar la lista de contactos.
    Remplazar con ContactDetailScreen.jsx la logica de obtencion de listado de mensajes a partir de ahora debe venir del estado de contactos en el contexto.


*/

import { createContext, useState } from "react";
import { Outlet } from "react-router";

export function getLastMessage(messages) {
    if (!messages || messages.length === 0) return null
    return messages[messages.length - 1]
}

export function countUnreadMessages(messages) {
    if (!messages) return null
    const unread = messages.filter((m) => m.status === 'unseen').length
    return unread > 0 ? unread : null
}

export const ContactContext = createContext(
    {
        contacts: [],
        getLastMessage: () => {},
        countUnreadMessages: () => {},
    }
)
export function ContactContextProvider() {
    const [contacts, setContacts] = useState(contact_list_server)
    const provider_values = {
        contacts: contacts,
        getLastMessage: getLastMessage,
        countUnreadMessages: countUnreadMessages,
    } 

    return (
    <ContactContext.Provider
        value= {provider_values}
    >
        <Outlet/>
    </ContactContext.Provider>
)
}
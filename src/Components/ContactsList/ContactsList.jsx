import React, { useContext } from 'react'
import { Link } from 'react-router'
import ContactOption from '../ConctactOption/ContactOption'
import { ContactContext } from '../../Context/ContactContext'
import useContactSearch from '../../hooks/useContactSearch'

export default function ContactsList() {

    const {contacts, countUnreadMessages, getLastMessage} = useContext(ContactContext)
    const { contactSearchTerm, setContactSearchTerm, filteredContacts } = useContactSearch(contacts)

    if (contacts.length === 0) {
        return <span>You don't have any contacts yet</span>
    }

    const contactsJsx = []
    for (const contact of filteredContacts) {
        const lastMessage = getLastMessage(contact.messages)
        contactsJsx.push(
            <Link
                to={`/contact/${contact.id}`}
                key={contact.id}
            >
                <ContactOption
                    id={contact.id}
                    image={contact.image}
                    lastMessage={lastMessage ? lastMessage.content : ''}
                    name={contact.name}
                    unreadMessages={countUnreadMessages(contact.messages)}
                    lastMessageDate={lastMessage ? lastMessage.created_at : contact.last_connection}
                />
            </Link>
        )
    }

    return (
        <>
            <div className="sidebar-header">
                <div className="sidebar-search">
                    <input
                        type="text"
                        placeholder="Search or start a new chat"
                        value={contactSearchTerm}
                        onChange={(e) => setContactSearchTerm(e.target.value)}
                    />
                </div>
            </div>
            <div className="sidebar-contacts">
                {filteredContacts.length === 0
                    ? <span>No contacts found</span>
                    : contactsJsx
                }
            </div>
        </>
    )
}

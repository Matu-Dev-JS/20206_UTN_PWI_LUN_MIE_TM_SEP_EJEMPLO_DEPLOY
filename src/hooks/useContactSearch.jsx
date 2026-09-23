import { useState } from "react"

function useContactSearch(contacts) {
    const [contactSearchTerm, setContactSearchTerm] = useState("")

    const term = contactSearchTerm.trim().toLowerCase()

    const filteredContacts = term
        ? contacts.filter((contact) =>
            contact.name.toLowerCase().includes(term)
        )
        : contacts

    return {
        contactSearchTerm: contactSearchTerm,
        setContactSearchTerm: setContactSearchTerm,
        filteredContacts: filteredContacts,
    }
}

export default useContactSearch

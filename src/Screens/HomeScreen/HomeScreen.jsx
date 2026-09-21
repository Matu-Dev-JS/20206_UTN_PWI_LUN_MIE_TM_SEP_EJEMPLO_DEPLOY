import React, { useContext } from 'react'
import { Link } from 'react-router'
import Sidebar from '../../Components/Sidebar/Sidebar'
import { LangContext, LANGS_AVIABLES } from '../../Context/LangContext'
import LangSelect from '../../Components/LangSelect/LangSelect'
import { ContactContext } from '../../Context/ContactContext'

export default function HomeScreen() {
  const {contacts} = useContext(ContactContext)

  console.log('[HomeScreen.jsx] Contactos', contacts)
  return (
    <div>
      <Sidebar />
      <div className='contenido-principal'>
        
      </div>
    </div>
  )
}

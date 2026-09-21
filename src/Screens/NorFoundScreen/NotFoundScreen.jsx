import React from 'react'
import { Link } from 'react-router'

export default function NotFoundScreen() {
  return (
    <div>
        <h1>
            Error 404 pagina no encontrada
        </h1>
        <Link to={'/home'}>Volver a home</Link>
    </div>
  )
}

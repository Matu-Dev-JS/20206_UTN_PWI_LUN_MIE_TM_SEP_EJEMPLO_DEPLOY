import React, { useEffect, useState } from 'react'
import usePosts from '../../hooks/usePosts'

export default function PostList() {
    const usePostResult = usePosts()

    useEffect(
        () => {
            setTimeout(
                () => {
                    usePostResult.consultarAlServidor()
                },
                4
            )
        }
    )

    if (usePostResult.isLoading) {
        return (
            <div>Cargando...</div>
        )
    }

    const lista_posteos_jsx = []
    for (const post of usePostResult.response) {
        lista_posteos_jsx.push(
            <div key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
                <hr />
            </div>
        )
    }
    return (
        <div>
            {lista_posteos_jsx}

        </div>
    )
}


/* 
Hoy en dia buscamos que los componentes tengan la responsabilidad: 
    - Logica de renderizado: Condicion, bucles, clases, html
Y la logica del Componente manejarla en customHooks:
    - Logica del componente/manejo de estados

Componentes: Logica de renderizado
Hooks: Logica de la aplicacion
*/
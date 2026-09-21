import React, { useContext } from 'react'
import { LangContext, LANGS_AVIABLES } from '../../Context/LangContext'

export default function LangSelect() {
    const { langSelected, changeLang } = useContext(LangContext)
    const listaDeIdiomas = []
    for (const lang of LANGS_AVIABLES) {
        listaDeIdiomas.push(
            <div key={lang.value} >
                <span>{lang.nombre}</span>

                <img src={lang.icon} alt={lang.nombre} width={30} />
                {
                    langSelected !== lang.value
                        ?
                        <button onClick={() => changeLang(lang.value)}>
                            Cambiar idioma
                        </button>
                        :
                        <span>seleccionado</span>
                }

            </div>
        )
    }
    return (
        <div>
            {listaDeIdiomas}
        </div>
    )
}

import { createContext, useState } from "react";
export const LangContext = createContext()

export const LANGS_AVIABLES =  [
    {
        nombre: 'Español',
        value: 'es',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/3/35/Flag_of_Argentina_%283-2%29.svg?utm_source=es.wikipedia.org&utm_campaign=index&utm_content=original'
    },
    {
        nombre: 'English',
        value: 'en',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/5/55/Flag_of_the_United_States_%283-2_aspect_ratio%29.svg?utm_source=es.wikipedia.org&utm_campaign=index&utm_content=original'
    }
]

export function LangContextProvider ({children}){

    /* 
        Desarrollar:

            changeLang(lang)
                Debe cambiar el estado de lang al lenguaje que te pase por parametro

            Dado esta constante
                LANGS_AVIABLES: [
                    {
                        nombre: 'Español',
                        value: 'es',
                        icon: 'https://upload.wikimedia.org/wikipedia/commons/3/35/Flag_of_Argentina_%283-2%29.svg?utm_source=es.wikipedia.org&utm_campaign=index&utm_content=original'
                    },
                    {
                        nombre: 'English',
                        value: 'en',
                        icon: 'https://upload.wikimedia.org/wikipedia/commons/5/55/Flag_of_the_United_States_%283-2_aspect_ratio%29.svg?utm_source=es.wikipedia.org&utm_campaign=index&utm_content=original'
                    }
                ]
            Exportarla y renderizar en la home la lista de lenguajes disponibles
                <div>
                    <span>{lang.nombre}</span>
                    {langSelected === lang.value && <span>seleccionado</span>}
                    <img src={lang.icon}/>
                    <button onClick={() => changeLang(lang.value)}>Cambiar idioma</button>
                </div>
    */


    const [lang, setLang] = useState ("en")

    function changeLang (lang){
        setLang(lang)
    }
    const providerValues = {
        langSelected: lang, 
        changeLang: changeLang
    }
    return (
        <LangContext.Provider value={providerValues}>
            {children}
        </LangContext.Provider>
    )
}
Desarrollar `LangContext`.

El `LangContext` será el encargado de manejar de forma global el idioma seleccionado en la aplicación.

Actualmente solo daremos soporte a `es` y `en`.

Requisitos:

* Debe tener un estado interno llamado `langSelected`.
* Debe proveer `langSelected` al resto de la aplicación mediante el contexto.
* Consumir el contexto desde `App.jsx`.
* Consumir el contexto desde `ContactDetailScreen.jsx`.
* Mostrar por consola el valor de `langSelected` desde ambos componentes.

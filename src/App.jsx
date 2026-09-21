import React, { useContext, useEffect, useState } from 'react'
import './global.css'
import { Route, Routes } from 'react-router'
import HomeScreen from './Screens/HomeScreen/HomeScreen'
import LoginScreen from './Screens/LoginScreen/LoginScreen'
import NotFoundScreen from './Screens/NorFoundScreen/NotFoundScreen'
import ProductDetailScreen from './Screens/ProductDetailScreen/ProductDetailScreen'
import ContactDetailScreen from './Screens/ContactDetailScreen/ContactDetailScreen'
import { ThemeContext, ThemeContextProvider } from './Context/ThemeContext'
import { LangContext } from './Context/LangContext'
import ProductsScreen from './Screens/ProductsScreen/ProductsScreen'
import NewProductScreen from './Screens/NewProductScreen/NewProductScreen'
import { ProductContextProvider } from './Context/ProductContext'
import { ContactContextProvider } from './Context/ContactContext'



export default function App() {
	const { theme, nombre_favorito } = useContext(ThemeContext)

	const { langSelected } = useContext(LangContext)

	console.log('[App.jsx]', langSelected)

	return (
		<Routes>
			<Route path='/home' element={<HomeScreen />} />
			<Route path='/login' element={<LoginScreen />} />

			<Route path='*' element={<NotFoundScreen />} />
			
			<Route element={<ContactContextProvider/>} >
				<Route 
					path='/' 
					element={<HomeScreen />} 
				/>
				<Route
					path='/contact/:contact_id'
					element={<ContactDetailScreen />}
				/>
			</Route>


			<Route element={<ProductContextProvider/>}>
				<Route
					path='/products'
					element={<ProductsScreen />}
				/>
				<Route
					path='/products/:product_id'
					element={<ProductDetailScreen />}
				/>
				<Route
					path='/products/new'
					element={<NewProductScreen />}
				/>
			</Route>

		</Routes>
	)
}







const contact_list = [
	{
		id: 1,
		nombre: 'Marcos',
		ultimo_mensaje: 'hay que juntarnos!..',
		imagen: "https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fwww.gravatar.com%2Favatar%2F2c7d99fe281ecd3bcd65ab915bac6dd5%3Fs%3D250",
		mensajes_sin_leer: 2,
		fecha_ultimo_mensaje: "2/9/2026 14:30"
	},
	{
		id: 2,
		nombre: "John Smith",
		ultimo_mensaje: "Testing",
		imagen: "https://i.pinimg.com/736x/89/28/4b/89284b5c67cac49c7b0be588a335932a.jpg",
		mensajes_sin_leer: 3,
		fecha_ultimo_mensaje: "2/9/2026 08:21"
	},
	{
		id: 3,
		nombre: "Jane Doe",
		ultimo_mensaje: "Hello there",
		imagen: "https://i.pinimg.com/736x/1a/98/03/1a9803d93ff615ea7fbc198ba53401c5.jpg",
		mensajes_sin_leer: 1,
		fecha_ultimo_mensaje: "2/9/2026 12:15"
	},
	{
		id: 4,
		nombre: "Samantha Lee",
		ultimo_mensaje: "See you tumorrow",
		imagen: "https://i.pinimg.com/736x/b7/5f/d2/b75fd2fc1f8cbb7f65bb4f1a87dcc71e.jpg",
		mensajes_sin_leer: null,
		fecha_ultimo_mensaje: "2/9/2026 09:35"
	}
]
/* 
Dada una lista de contactos:
  - Se debe renderizar dicha lista en el HomeScreen, idealmente como un componente llamado Sidebar
  - Cada contacto debe ser un <Link> que te lleve a /contact/{contact.id}

  - Crear una nueva Screen llamada ContactDetailScreen 
  - Asignar ContactDetailScreen a la direccion /contact/:contact_id
  - ContactDetailScreen debe buscar el detalle del contacto en la lista de contactos y renderizar en pantalla almenos el nombre del contacto

*/


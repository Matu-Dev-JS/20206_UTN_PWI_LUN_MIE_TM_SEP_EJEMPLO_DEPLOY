import React, { useContext } from 'react'
import { ProductContext } from '../../Context/ProductContext'

export default function ProductsScreen() {
    const {products} = useContext(ProductContext)
    console.log('[ProductScreen.jsx] Productos:', products)
    return (
        <div>ProductsScreen</div>
    )
}

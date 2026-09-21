import React, { useContext } from 'react'
import { ProductContext } from '../../Context/ProductContext'

export default function ProductDetailScreen() {
  const {products} = useContext(ProductContext)
  console.log('[ProductDetailScreen.jsx] Productos:', products)
  return (
    <div>ProductDetailScreen</div>
  )
}

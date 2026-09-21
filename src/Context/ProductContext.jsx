import { createContext, useState } from "react";
import { Outlet } from "react-router";


export const ProductContext = createContext()

const products_server = [
    {
        id: 1,
        title: "Tv Noblex 52\"",
        price: 1000,
        stock: 2
    },
    {
        id: 2,
        title: "Tv Noblex 60\"",
        price: 1500,
        stock: 3
    },
    {
        id: 3,
        title: "Tv Noblex 70\"",
        price: 2000,
        stock: 2
    }

]

export function ProductContextProvider (){
    const [products, setProducts] = useState(products_server)

    function createProduct (title, price, stock){
        setProducts(
            (prevState) => {
                const cloned = [...prevState]
                cloned.push({
                    id: products.length + 1, 
                    title:  title, 
                    price: price, 
                    stock: stock
                })
                setProducts(cloned)
            }
        )
    }

    const provider_values = {
        products: products,
        createProduct: createProduct
    }
    return (
        <ProductContext.Provider
            value={provider_values}
        >
            <Outlet/>
        </ProductContext.Provider>
    )
}


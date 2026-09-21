/* 
Un componente es una funcion que retorna JSX (html)
Un componente por buenas practicas deben ser nombrados en UpperCamelCase
Para instanciar un componente usamos la sintaxis "as a component"/"como componente"
Para poder trasmitir informacion a un componente un padre puede dar informacion al componente mediante las props
Estas props siempre seran un objeto
*/
import './ProductCard.css'
/* 
title (obligatoria)
price (obligatoria)
description (obligatoria)
*/
function ProductCard(propiedades) {
    console.log("propiedades de product card son:", propiedades)

    /* 
    Si el producto es menor a 100 poner "Ojo, es muy barato"
    Si el producto es mayor a 10000 poner "Ojo, es muy caro"
    */

    let badge_producto_caro = null

    if(propiedades.price > 500000){
        badge_producto_caro = <span>Ojo, producto muy caro</span>
    }

    /* 
    No soy miembro
    si propiedades.isOnlyForMembers es verdadera no me debe mostrar el boton de comprar de mostrar "No disponible" y boton de subscripcion
    Sino mostrar boton de comprar
    */


    return (
        <div className={'product-card ' + (propiedades.isOnlyForMembers ? 'product-card--only-members' : '')}>
            <h2>{propiedades.title}</h2>
            <p>{propiedades.description}</p>
            <div>Precio: ${propiedades.price} ARS</div> 
            {
                propiedades.price < 100 
                && 
                <span>Ojo producto muy barato</span>
            }

            {badge_producto_caro}

            {
            propiedades.isOnlyForMembers 
            ? (
                <div>
                    <span>No disponible</span>
                    <button>Suscribete para acceder a los beneficion</button>
                </div>
            )
            : (<button>Comprar</button>)
            }

            <hr />
        </div>
    )
}
export default ProductCard

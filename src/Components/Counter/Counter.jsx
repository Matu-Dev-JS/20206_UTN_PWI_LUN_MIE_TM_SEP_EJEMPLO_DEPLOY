
import { useState } from "react";
import useCounter from "../../hooks/useCounter";
const Counter = () => {

    const useCounterResult = useCounter()



    if (useCounterResult.count === 0) {
        return (
            <div>
                <button onClick={useCounterResult.handleIncrement}>Comprar</button>
            </div>
        )
    }

    return (
        <div>
            <h2>Contador: {useCounterResult.count}</h2>
            <button 
                onClick={useCounterResult.handleDecrement}
                disabled={useCounterResult.count <= 0} 
            >-</button>
            <button 
                onClick={useCounterResult.handleIncrement} 
                disabled={useCounterResult.count >= 10}
            >
                +
            </button>
            {useCounterResult.count === 10 && <p className="error-text">Has alcanzado el limite</p>}
        </div>
    )
}
export default Counter


/* 
Crear el hook useCounter que contrendra la logica del componente Counter.jsx

Tener en cuenta que un hook puede devolver tambien funciones
*/
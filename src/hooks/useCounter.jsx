import { useState } from "react"

function useCounter() {
    const [count, setCount] = useState(0)
    function handleIncrement() {
        setCount(
            (prevCounter) => {
                return prevCounter + 1
            }
        )
    }
    const handleDecrement = () => {
        setCount(count - 1)
    }

    return {
        count: count,
        handleIncrement: handleIncrement,
        handleDecrement: handleDecrement
    }
}

export default useCounter
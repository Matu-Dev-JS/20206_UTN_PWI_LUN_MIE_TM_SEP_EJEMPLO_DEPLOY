import { useState } from "react"
function useLogin() {
    const [formState, setFormState] = useState({ email: "", password: "" })
    function handleSubmit(evento) {
        evento.preventDefault()
        const form = evento.target
        const email = form.email.value
        const password = form.password.value
    }
    function handleChangeInput(evento) {
        const campo = evento.target
        const nombre_campo = campo.name
        const valor_campo = campo.value
        setFormState(
            (prevFormState) => {
                const cloned_state = { ...prevFormState }
                cloned_state[nombre_campo] = valor_campo
                return cloned_state
            }
        )
    }
    return {
        formState: formState,
        handleSubmit: handleSubmit,
        handleChangeInput: handleChangeInput
    }
}
export default useLogin
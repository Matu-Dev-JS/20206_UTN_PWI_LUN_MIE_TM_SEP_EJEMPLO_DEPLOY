/**
 * Formatea una fecha para mostrar en el sidebar de chats:
 * - Si es de hoy: "HH:mm" (por ejemplo: "14:40")
 * - Si es de ayer: "ayer"
 * - Si es anterior a ayer: "DD/MM/AAAA" (por ejemplo: "20/09/2026")
 * 
 * @param {Date|string|number} date 
 * @returns {string}
 */
export function formatMessageDate(date) {
    if (!date) return ''

    const messageDate = date instanceof Date ? date : new Date(date)

    // Si no es una fecha válida, retornar el valor recibido si es string
    if (isNaN(messageDate.getTime())) {
        return typeof date === 'string' ? date : ''
    }

    const now = new Date()

    // Normalizar a medianoche (00:00:00) local para comparar días de calendario
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
    const target = new Date(messageDate.getFullYear(), messageDate.getMonth(), messageDate.getDate())

    const diffTime = today.getTime() - target.getTime()
    const oneDayMs = 24 * 60 * 60 * 1000
    const diffDays = Math.round(diffTime / oneDayMs)

    // Si es hoy -> [Hora:Min] (HH:mm)
    if (diffDays === 0) {
        const hours = String(messageDate.getHours()).padStart(2, '0')
        const minutes = String(messageDate.getMinutes()).padStart(2, '0')
        return `${hours}:${minutes}`
    }

    // Si es ayer -> "ayer"
    if (diffDays === 1) {
        return 'ayer'
    }

    // Si es anterior -> "DD/MM/AAAA"
    const day = String(messageDate.getDate()).padStart(2, '0')
    const month = String(messageDate.getMonth() + 1).padStart(2, '0')
    const year = messageDate.getFullYear()
    return `${day}/${month}/${year}`
}

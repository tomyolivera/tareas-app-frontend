export const primeraLetraMayuscula = (string: string) => string.charAt(0).toUpperCase() + string.slice(1)

export const formatDate = (toFormat: Date) => {
    const date = new Date(toFormat)
    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()
    return `${day}/${month}/${year}`
}
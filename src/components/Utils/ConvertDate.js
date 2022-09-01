export default class ConvertDate {
    static toYYYYMMDD(date) {
        const year = date.getFullYear()
        const month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1
        const day = date.getDate() < 10 ? "0" + (date.getDate()) : date.getDate()
        return `${year}-${month}-${day}`
    }

    static getDay(date) {
        const d = new Date(date.getFullYear(), date.getMonth(), 1)
        return (d.getDay() === 0 ? 7 : d.getDay())
    }
}
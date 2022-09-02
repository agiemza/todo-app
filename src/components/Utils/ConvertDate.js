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

    static toMoreHuman(date) {
        const today = this.toYYYYMMDD(new Date())
        if (date === today) {
            return "today"
        }
        if (new Date(date).setDate(new Date(date).getDate()) === new Date(today).setDate(new Date(today).getDate() - 1)) {
            return "yesterday"
        }
        if (new Date(date).setDate(new Date(date).getDate()) === new Date(today).setDate(new Date(today).getDate() + 1)) {
            return "tomorrow"
        }
        return `${date.slice(-2)}.${date.slice(5, 7)}.${date.slice(0, 4)}`
    }
}
import "./calendar.css"

export default class Calendar {
    static htmlElement = document.createElement("div")

    static createHtmlElement() {
        this.htmlElement.classList.add("calendar")

        const daysOfWeek = ["M", "T", "W", "T", "F", "S", "S"]

        daysOfWeek.forEach((day, index) => {
            const dayName = document.createElement("div")
            dayName.classList.add("day-name")
            if (index === 5) {
                dayName.classList.add("saturday")
            }
            if (index === 6) {
                dayName.classList.add("sunday")
            }
            dayName.textContent = day
            this.htmlElement.appendChild(dayName)
        })

        const date = new Date
        date.setMonth(6)
        const firstDayOfCurrentMonth = new Date(date.getFullYear(), date.getMonth(), 1)
        const lastDayOfCurrentMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0)
        const lastDayOfPreviousMonth = new Date(date.getFullYear(), date.getMonth(), 0)

        for (let i = 0; i < 42; i++) {
            const dayContainer = document.createElement("div")
            dayContainer.classList.add("day-container")
            this.htmlElement.appendChild(dayContainer)

            //show current month days
            if (i + 1 >= firstDayOfCurrentMonth.getDay()
                && i - firstDayOfCurrentMonth.getDay() + 2 <= lastDayOfCurrentMonth.getDate()) {
                dayContainer.classList.add("current-month-day")
                dayContainer.textContent = i + 2 - firstDayOfCurrentMonth.getDay()
            }

            //show previous month days
            if (i + 1 < firstDayOfCurrentMonth.getDay()) {
                dayContainer.classList.add("another-month-day")
                dayContainer.textContent = lastDayOfPreviousMonth.getDate() - firstDayOfCurrentMonth.getDay() + i + 2
            }

            //show next month days
            if (i + 1 > lastDayOfCurrentMonth.getDate()
                && i - firstDayOfCurrentMonth.getDay() + 2 > lastDayOfCurrentMonth.getDate()) {
                dayContainer.classList.add("another-month-day")
                dayContainer.textContent = i + 2 - firstDayOfCurrentMonth.getDay() - lastDayOfCurrentMonth.getDate()
            }

        }
    }

    static render() {
        this.createHtmlElement()
        return this.htmlElement
    }
}
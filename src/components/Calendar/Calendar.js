import "./calendar.css"

export default class Calendar {
    static htmlElement = document.createElement("div")

    static createCalendar() {
        const date = new Date
        date.setMonth(7)
        this.displayMonthSwitch(date)
        this.htmlElement.appendChild(this.displayDaysOfWeek())
        this.htmlElement.appendChild(this.diplayCalendarGrid(date))
    }

    static displayMonthSwitch(date) {
        const container = document.createElement("div")
        container.classList.add("month-switch-contianer")

        const monthSwitch = document.createElement("div")
        monthSwitch.classList.add("month-switch")
        container.appendChild(monthSwitch)

        const arrowLeft = document.createElement("button")
        arrowLeft.classList.add("month-switch-left")

        const arrowRight = document.createElement("button")
        arrowRight.classList.add("month-switch-right")

        const monthContainer = document.createElement("div")
        monthContainer.classList.add((date.getMonth() === new Date().getMonth()) ? "month-current" : "month-container")
        monthContainer.textContent = this.convertMonthName(date.getMonth())

        const yearContianer = document.createElement("div")
        yearContianer.classList.add("year-container")
        yearContianer.textContent = date.getFullYear()

        monthSwitch.appendChild(arrowLeft)
        monthSwitch.appendChild(monthContainer)
        monthSwitch.appendChild(yearContianer)
        monthSwitch.appendChild(arrowRight)

        this.htmlElement.appendChild(container)
    }

    static convertMonthName(monthNumber) {
        switch (monthNumber) {
            case 0:
                monthNumber = "January"
                break
            case 1:
                monthNumber = "Februrary"
                break
            case 2:
                monthNumber = "March"
                break
            case 3:
                monthNumber = "April"
                break
            case 4:
                monthNumber = "May"
                break
            case 5:
                monthNumber = "June"
                break
            case 6:
                monthNumber = "July"
                break
            case 7:
                monthNumber = "August"
                break
            case 8:
                monthNumber = "September"
                break
            case 9:
                monthNumber = "October"
                break
            case 10:
                monthNumber = "November"
                break
            case 11:
                monthNumber = "December"
                break
            default:
                break
        }
        return monthNumber
    }

    static displayDaysOfWeek() {
        const container = document.createElement("div")
        container.classList.add("days-of-week-container")
        const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

        daysOfWeek.forEach((day, index) => {
            const dayName = document.createElement("div")
            dayName.classList.add("day-of-week")
            if (index === 5) {
                dayName.classList.add("saturday")
            }
            if (index === 6) {
                dayName.classList.add("sunday")
            }
            dayName.textContent = day
            container.appendChild(dayName)
        })
        return container
    }

    static diplayCalendarGrid(date) {
        const container = document.createElement("div")
        container.classList.add("calendar-grid-container")

        const firstDayOfCurrentMonth = new Date(date.getFullYear(), date.getMonth(), 1)
        const lastDayOfCurrentMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0)
        const lastDayOfPreviousMonth = new Date(date.getFullYear(), date.getMonth(), 0)

        for (let i = 0; i < 42; i++) {
            const dayContainer = document.createElement("div")
            dayContainer.classList.add("day-container")
            container.appendChild(dayContainer)

            const dayNumber = document.createElement("div")
            dayNumber.classList.add("day-number")
            dayContainer.appendChild(dayNumber)

            //show current month days
            if (i + 1 >= firstDayOfCurrentMonth.getDay()
                && i - firstDayOfCurrentMonth.getDay() + 2 <= lastDayOfCurrentMonth.getDate()) {
                dayContainer.classList.add("current-month-day")
                dayNumber.textContent = i + 2 - firstDayOfCurrentMonth.getDay()
            }

            //show previous month days
            if (i + 1 < firstDayOfCurrentMonth.getDay()) {
                dayContainer.classList.add("another-month-day")
                dayNumber.textContent = lastDayOfPreviousMonth.getDate() - firstDayOfCurrentMonth.getDay() + i + 2
            }

            //show next month days
            if (i + 1 > lastDayOfCurrentMonth.getDate()
                && i - firstDayOfCurrentMonth.getDay() + 2 > lastDayOfCurrentMonth.getDate()) {
                dayContainer.classList.add("another-month-day")
                dayNumber.textContent = i + 2 - firstDayOfCurrentMonth.getDay() - lastDayOfCurrentMonth.getDate()
            }
        }
        return container
    }

    static render() {
        this.htmlElement.classList.add("calendar")
        this.createCalendar()
        return this.htmlElement
    }
}
import Home from "../Home"
import Task from "../Project/Task"
import TouchEvents from "../Utils/TouchEvent"
import "./calendar.css"

export default class Calendar {
    static htmlElement = document.createElement("div")
    static date = new Date

    static createWidget(date) {
        this.htmlElement.innerHTML = ""
        this.displayMonthSwitch(date)
        this.htmlElement.appendChild(this.displayCalendar(date))
    }

    static displayCalendar(date) {
        const wrapper = document.createElement("div")
        wrapper.appendChild(this.displayDaysOfWeek())
        wrapper.appendChild(this.diplayCalendarGrid(date))
        return wrapper
    }

    static displayMonthSwitch(date) {
        const container = document.createElement("div")
        container.classList.add("month-switch-contianer")

        const monthSwitch = document.createElement("div")
        monthSwitch.classList.add("month-switch")
        container.appendChild(monthSwitch)

        const arrowLeft = document.createElement("button")
        arrowLeft.classList.add("month-switch-left")
        arrowLeft.addEventListener("click", () => this.handleLeftArrowClick())

        const arrowRight = document.createElement("button")
        arrowRight.classList.add("month-switch-right")
        arrowRight.addEventListener("click", () => this.handleRightArrowClick())

        const monthContainer = document.createElement("div")
        if ((date.getMonth() === new Date().getMonth()) && (date.getFullYear() === new Date().getFullYear())) {
            monthContainer.classList.add("month-current")
        } else {
            monthContainer.classList.add("month-container")
        }

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

    static handleLeftArrowClick() {
        this.date = this.getPreviousMonth(this.date)
        this.createWidget(this.date)
    }

    static handleRightArrowClick() {
        this.date = this.getNextMonth(this.date)
        this.createWidget(this.date)
    }

    static getPreviousMonth(date, day) {
        return new Date(date.getFullYear(), date.getMonth() - 1, day ? day : 1)
    }

    static getNextMonth(date, day) {
        return new Date(date.getFullYear(), date.getMonth() + 1, day ? day : 1)
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

        daysOfWeek.forEach(day => {
            const dayName = document.createElement("div")
            dayName.classList.add("day-of-week")
            dayName.textContent = day
            container.appendChild(dayName)
        })
        return container
    }

    static convertGetDay(date) {
        const d = new Date(date.getFullYear(), date.getMonth(), 1)
        return (d.getDay() === 0 ? 7 : d.getDay())
    }

    static highlightIfToday(day, element) {
        const currentDate = new Date()
        if (day === currentDate.getDate()
            && this.date.getMonth() === currentDate.getMonth()
            && this.date.getFullYear() === currentDate.getFullYear()) {
            return element.classList.add("day-container-today")
        }
        else {
            return element.classList.add("current-month-day")
        }
    }

    static handleSwipe(e, touchEvent) {
        touchEvent.setEndEvent(e)
        if (touchEvent.isSwipeRight()) {
            console.log("swipe to right")
        }
        if (touchEvent.isSwipeLeft()) {
            console.log("swipe to left")
        }
    }

    static diplayCalendarGrid(date) {
        const container = document.createElement("div")
        container.classList.add("calendar-grid-container")

        let touchEvent
        container.addEventListener("touchstart", e => touchEvent = new TouchEvents(e))
        container.addEventListener("touchend", e => this.handleSwipe(e, touchEvent))

        for (let i = 0; i < 42; i++) {
            container.appendChild(this.createDayElement(i, date))
        }
        return container
    }

    static createDayElement(i, date) {
        const firstDayOfCurrentMonth = new Date(date.getFullYear(), date.getMonth(), 1)
        const firstDayOfWeek = this.convertGetDay(firstDayOfCurrentMonth)
        const lastDayOfCurrentMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0)
        const lastDayOfPreviousMonth = new Date(date.getFullYear(), date.getMonth(), 0)

        const dayContainer = document.createElement("div")
        dayContainer.classList.add("day-container")
        // container.appendChild(dayContainer)

        const dayNumberContainer = document.createElement("div")
        dayNumberContainer.classList.add("day-number")
        dayContainer.appendChild(dayNumberContainer)

        //show current month days
        if (i + 1 >= firstDayOfWeek
            && i - firstDayOfWeek + 1 < lastDayOfCurrentMonth.getDate()) {
            const day = i + 2 - firstDayOfWeek
            this.highlightIfToday(day, dayContainer)
            const date = new Date(this.date.getFullYear(), this.date.getMonth(), day + 1)
            if (Task.findTasksForDate(date).length) {
                dayNumberContainer.classList.add("day-with-task")
            }
            dayNumberContainer.textContent = day
        }

        //show previous month days
        if (i + 1 < firstDayOfWeek) {
            dayContainer.classList.add("another-month-day")
            const day = lastDayOfPreviousMonth.getDate() - firstDayOfWeek + i + 2

            const currentDate = new Date(this.getPreviousMonth(this.date, day))

            dayNumberContainer.textContent = day
        }

        //show next month days
        if (i + 1 > lastDayOfCurrentMonth.getDate()
            && i - firstDayOfWeek + 2 > lastDayOfCurrentMonth.getDate()) {
            dayContainer.classList.add("another-month-day")
            const day = i + 2 - firstDayOfWeek - lastDayOfCurrentMonth.getDate()
            dayNumberContainer.textContent = day
        }
        return dayContainer
    }

    static render() {
        this.htmlElement.classList.add("calendar")
        this.createWidget(this.date)
        return this.htmlElement
    }
}
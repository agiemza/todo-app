import Home from "../Tabs/Calendar/CalendarTab"
import Task from "../Tasks/Task"
import ConvertDate from "../Utils/ConvertDate"
import TouchEvents from "../Utils/TouchEvent"
import "./calendar.css"
import TasksList from "../Tasks/TasksList"

export default class Calendar {
    static htmlElement = document.createElement("div")
    static todaysDate = new Date

    static createWidget(date) {
        this.htmlElement.innerHTML = ""
        this.createMonthSwitch(date)
        this.htmlElement.appendChild(this.createCalendars(date))
    }

    static createMonthSwitch(date) {
        const container = document.createElement("div")
        container.classList.add("month-switch-contianer")

        const monthSwitch = document.createElement("div")
        monthSwitch.classList.add("month-switch")
        container.appendChild(monthSwitch)

        const arrowLeft = document.createElement("button")
        arrowLeft.classList.add("month-switch-left")
        arrowLeft.addEventListener("click", () => this.switchToPreviousMonth())

        const arrowRight = document.createElement("button")
        arrowRight.classList.add("month-switch-right")
        arrowRight.addEventListener("click", () => this.switchToNextMonth())

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

        const dateWrapper = document.createElement("div")
        dateWrapper.appendChild(monthContainer)
        dateWrapper.appendChild(yearContianer)
        dateWrapper.addEventListener("dblclick", () => this.switchToCurrentMonth())

        monthSwitch.appendChild(arrowLeft)
        monthSwitch.appendChild(dateWrapper)
        monthSwitch.appendChild(arrowRight)

        this.htmlElement.appendChild(container)
    }

    static createCalendars(date) {
        const calendarCurrent = this.createCalendarElement(date)
        calendarCurrent.classList.add("current-calendar")

        const calendarPrev = this.createCalendarElement(this.getPreviousMonth(date))
        calendarPrev.classList.add("previous-calendar")
        calendarPrev.addEventListener("click", () => this.switchToPreviousMonth())

        const calendarNext = this.createCalendarElement(this.getNextMonth(date))
        calendarNext.classList.add("next-calendar")
        calendarNext.addEventListener("click", () => this.switchToNextMonth())

        const wrapper = document.createElement("div")
        wrapper.appendChild(calendarCurrent)
        wrapper.appendChild(calendarPrev)
        wrapper.appendChild(calendarNext)

        return wrapper
    }

    static createCalendarElement(date) {
        const wrapper = document.createElement("div")
        wrapper.appendChild(this.createGridHeader())
        wrapper.appendChild(this.createGrid(date))
        return wrapper
    }

    static createGridHeader() {
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

    static createGrid(date) {
        const container = document.createElement("div")
        container.classList.add("calendar-grid-container")

        let touchEvent
        container.addEventListener("touchstart", e => touchEvent = new TouchEvents(e), { passive: false })
        container.addEventListener("touchend", e => this.handleSwipe(e, touchEvent))

        for (let i = 0; i < 42; i++) {
            container.appendChild(this.createGridCell(i, date))
        }
        return container
    }

    static createGridCell(i, date) {
        const currentDate = date
        const firstDayOfWeek = ConvertDate.getDay((new Date(currentDate.getFullYear(), currentDate.getMonth(), 1)))
        const lastDayOfCurrentMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate()
        const lastDayOfPreviousMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate()

        const dayContainer = document.createElement("div")
        dayContainer.classList.add("day-container")

        const dayNumberContainer = document.createElement("div")
        dayNumberContainer.classList.add("day-number")
        dayContainer.appendChild(dayNumberContainer)

        //show current month day
        if (i + 1 >= firstDayOfWeek && i - firstDayOfWeek + 1 < lastDayOfCurrentMonth) {
            const day = i + 2 - firstDayOfWeek
            const date = ConvertDate.toYYYYMMDD(new Date(currentDate.getFullYear(), currentDate.getMonth(), day))

            this.highlightToday(new Date(date), dayContainer)
            this.markDayWithTask(date, dayNumberContainer)

            dayContainer.addEventListener("click", () => this.handleDayClick(date, dayContainer))

            dayNumberContainer.textContent = day
        }

        //show previous month day
        if (i + 1 < firstDayOfWeek) {
            dayContainer.classList.add("another-month-day")

            const day = lastDayOfPreviousMonth - firstDayOfWeek + i + 2
            const currentDate = new Date(this.getPreviousMonth(this.todaysDate, day))
            const date = ConvertDate.toYYYYMMDD(new Date(currentDate.getFullYear(), currentDate.getMonth(), day))

            this.markDayWithTask(date, dayNumberContainer)

            dayContainer.addEventListener("click", () => {
                this.handleDayClick(date, dayContainer)
                this.switchToPreviousMonth()
            })

            dayNumberContainer.textContent = day
        }

        //show next month day
        if (i + 1 > lastDayOfCurrentMonth && i - firstDayOfWeek + 2 > lastDayOfCurrentMonth) {
            dayContainer.classList.add("another-month-day")

            const day = i + 2 - firstDayOfWeek - lastDayOfCurrentMonth
            const currentDate = new Date(this.getNextMonth(this.todaysDate, day))
            const date = ConvertDate.toYYYYMMDD(new Date(currentDate.getFullYear(), currentDate.getMonth(), day))

            this.markDayWithTask(date, dayNumberContainer)

            dayContainer.addEventListener("click", () => {
                this.handleDayClick(date, dayContainer)
                this.switchToNextMonth()
            })

            dayNumberContainer.textContent = day
        }

        return dayContainer
    }

    static switchToPreviousMonth(date) {
        this.todaysDate = this.getPreviousMonth(date || this.todaysDate)
        this.createWidget(this.todaysDate)
    }

    static switchToCurrentMonth() {
        this.todaysDate = new Date()
        this.createWidget(this.todaysDate)
    }

    static switchToNextMonth(date) {
        this.todaysDate = this.getNextMonth(date || this.todaysDate)
        this.createWidget(this.todaysDate)
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

    static highlightToday(date, element) {
        const currentDate = new Date()
        if (date.getDate() === currentDate.getDate()
            && date.getMonth() === currentDate.getMonth()
            && date.getFullYear() === currentDate.getFullYear()) {
            return element.classList.add("day-container-today")
        }
        else {
            return element.classList.add("current-month-day")
        }
    }

    static highlightSelectedDay(selectedElement) {
        const dateContainers = document.querySelectorAll(".day-container")
        dateContainers.forEach(dateContainer => dateContainer.classList.remove("day-container-selected"))
        if (!selectedElement.classList.contains("day-container-today")) {
            selectedElement.classList.add("day-container-selected")
        }
    }

    static markDayWithTask(date, container) {
        if (Task.findTasksForDate(date).length) {
            container.classList.add("day-with-task")
        }
    }

    static handleSwipe(e, touchEvent) {
        touchEvent.setEndEvent(e)
        if (touchEvent.isSwipeRight()) {
            this.switchToPreviousMonth()
        }
        if (touchEvent.isSwipeLeft()) {
            this.switchToNextMonth()
        }
    }

    static handleDayClick(date, selectedElement) {
        this.highlightSelectedDay(selectedElement)
        TasksList.update(date)
        Home.updateDateContainer(date)
    }

    static render() {
        this.htmlElement.classList.add("calendar")
        this.createWidget(this.todaysDate)
        return this.htmlElement
    }
}
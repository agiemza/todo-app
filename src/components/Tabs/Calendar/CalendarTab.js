import "./calendarTab.css"
import Calendar from "../../Calendar/Calendar"
import Nav from "../../UI/Nav"
import ConvertDate from "../../Utils/ConvertDate"
import TasksList from "../../Tasks/TasksList"

export default class CalendarTab {
    static htmlElement = this.createHtmlElement()

    static render() {
        this.clearHtmlElement()
        const today = ConvertDate.toYYYYMMDD(new Date())
        this.htmlElement.appendChild(Calendar.render())
        this.htmlElement.appendChild(this.createDateContainer(today))
        this.htmlElement.appendChild(TasksList.render(today))
        Nav.setButtonActive("nav-button-calendar")
        return this.htmlElement
    }

    static refresh(date) {
        Calendar.createWidget(new Date(date))
    }
    
    static createHtmlElement() {
        const element = document.createElement("div")
        element.classList.add("calendar-tab-container")
        return element
    }

    static clearHtmlElement() {
        this.htmlElement.innerHTML = ""
    }

    static updateDateContainer(date) {
        this.clearDateContainer()
        this.setDateContainerContent(date)
    }

    static clearDateContainer() {
        document.querySelector(".calendar-tab-tasks-list-title").innerHTML = ""
    }

    static createDateContainer(date) {
        const dateContainer = document.createElement("div")
        dateContainer.classList.add("calendar-tab-tasks-list-title")
        dateContainer.appendChild(this.setDateContainerContent(date))
        return dateContainer
    }

    static setDateContainerContent(date) {
        const content = `Tasks for ${ConvertDate.toMoreHuman(date)}`
        const wrapper = document.createElement("div")
        wrapper.textContent = content
        const dateContainer = document.querySelector(".calendar-tab-tasks-list-title")
        if (dateContainer) dateContainer.appendChild(wrapper)
        if (!dateContainer) return wrapper
    }
}
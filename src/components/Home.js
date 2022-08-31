import Calendar from "./Calendar/Calendar"
import Task from "./Project/Task"
import Main from "./UI/Main"
import Navbar from "./UI/Navbar"
import ConvertDate from "./Utils/ConvertDate"

export default class Home {
    static htmlElement = this.createHomeElement()

    static createHomeElement() {
        const element = document.createElement("div")
        return element
    }

    static open() {
        Main.changeContent(this.render())
        Navbar.changeVisibility()
    }

    static clear() {
        this.htmlElement.innerHTML = ""
    }

    static render() {
        this.clear()
        this.htmlElement.appendChild(Calendar.render())
        this.clearTasksList()
        this.htmlElement.appendChild(this.displayTasksFromDate(ConvertDate.toYYYYMMDD(new Date())))
        this.htmlElement.classList.add("home-container")
        return this.htmlElement
    }

    static clearTasksList() {
        const list = document.querySelector(".home-tasks-list-container")
        if (list) {
            list.innerHTML = ""
        }
    }

    static displayTasksFromDate(date) {
        const selectedDateListContainer = this.displayTasksList(
            date === ConvertDate.toYYYYMMDD(new Date()) ? "Today's tasks" : `Tasks for ${date}`
        )
        Task.findTasksForDate(date).forEach(({ task, project }) => this.displayTask(selectedDateListContainer, task, project))
        return selectedDateListContainer
    }

    static displayTask(list, task, project) {
        const listElement = list.querySelector("ul")
        const item = document.createElement("li")
        const projectName = document.createElement("div")
        projectName.classList.add("task-project-name")
        projectName.textContent = project.title
        item.appendChild(projectName)
        item.appendChild(Task.createTaskHtmlElement(task, project))
        listElement.appendChild(item)
    }

    static displayTasksList(titleText) {
        const element = document.createElement("div")
        element.classList.add("home-tasks-list-container")

        const listTitle = document.createElement("div")
        listTitle.classList.add("home-tasks-list-title")
        const title = document.createElement("div")
        title.textContent = titleText
        listTitle.appendChild(title)
        const icon = new Image()
        icon.classList.add("home-tasks-list-expand-icon", "icon-expanded")
        listTitle.appendChild(icon)
        listTitle.addEventListener("click", () => this.toggleTasksList(element))


        const list = document.createElement("ul")
        list.classList.add("home-tasks-list")

        element.appendChild(listTitle)
        element.appendChild(list)

        return element
    }

    static toggleTasksList(listContainer) {
        const icon = listContainer.querySelector(".home-tasks-list-expand-icon")
        const list = listContainer.querySelector("ul")
        if (list.classList.contains("hidden")) {
            icon.classList.remove("icon-collapsed")
            icon.classList.add("icon-expanded")
            list.classList.toggle("hidden")
            return
        }
        if (!list.classList.contains("hidden")) {
            icon.classList.remove("icon-expanded")
            icon.classList.add("icon-collapsed")
            list.classList.toggle("hidden")
            return
        }
    }
}

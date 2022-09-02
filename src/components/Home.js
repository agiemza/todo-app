import Calendar from "./Calendar/Calendar"
import Task from "./Project/Task"
import Main from "./UI/Main"
import Nav from "./UI/Nav"
import ConvertDate from "./Utils/ConvertDate"

export default class Home {
    static htmlElement = this.createHomeElement()

    static createHomeElement() {
        const element = document.createElement("div")
        return element
    }

    static open() {
        Main.changeContent(this.render())
    }

    static clear() {
        this.htmlElement.innerHTML = ""
    }

    static render() {
        this.clear()
        this.htmlElement.appendChild(Calendar.render())
        this.clearTasksList()
        this.htmlElement.appendChild(this.displayList(ConvertDate.toYYYYMMDD(new Date())))
        this.htmlElement.classList.add("home-container")
        Nav.setButtonActive("nav-button-calendar")
        return this.htmlElement
    }

    static clearTasksList() {
        const list = document.querySelector(".home-tasks-list-container")
        if (list) {
            list.innerHTML = ""
        }
    }

    static updateTasksList(date) {
        this.clearTasksList()
        const list = document.querySelector(".home-tasks-list-container")
        list.appendChild(this.displayTasksFromDate(date))
    }

    static displayList(date) {
        const wrapper = document.createElement("div")
        wrapper.classList.add("home-tasks-list-wrapper")
        wrapper.appendChild(this.displayTaskListTitle(date))
        wrapper.appendChild(this.displayTasksFromDate(date))

        return wrapper
    }

    static displayTaskListTitle(date) {
        const titleText = date === ConvertDate.toYYYYMMDD(new Date()) ? "Today's tasks" : `Tasks for ${date}`

        const listTitleContainer = document.createElement("div")
        listTitleContainer.classList.add("home-tasks-list-title")

        const title = document.createElement("div")
        title.textContent = titleText
        listTitleContainer.appendChild(title)

        return listTitleContainer
    }


    static displayTasksFromDate(date) {
        const container = this.createListContainer()
        const selectedDateListContainer = this.displayTasksList()
        container.appendChild(selectedDateListContainer)
        Task.findTasksForDate(date).forEach(({ task, project }) => this.displayTask(container, task, project, date))
        return container
    }

    static displayTask(list, task, project, date) {
        const listElement = list.querySelector("ul")
        const item = document.createElement("li")
        item.appendChild(Task.createTaskHtmlElement(task, project, () => this.updateTasksList(date)))
        listElement.appendChild(item)
    }

    static createListContainer() {
        const element = document.createElement("div")
        element.classList.add("home-tasks-list-container")

        const newTaskButton = document.createElement("button")
        newTaskButton.classList.add("home-new-task-button")
        newTaskButton.textContent = "+"
        element.appendChild(newTaskButton)

        return element
    }

    static displayTasksList() {
        // const element = document.createElement("div")
        // element.classList.add("home-tasks-list-container")

        const list = document.createElement("ul")
        list.classList.add("home-tasks-list")

        // element.appendChild(list)

        // return element

        return list
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
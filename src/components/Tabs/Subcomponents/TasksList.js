import Task from "../../Project/Task"

export default class TasksList {
    static htmlElement = this.createHtmlElement()

    static render(date) {
        this.htmlElement.appendChild(this.showTasks(date))
        return this.htmlElement
    }

    static createHtmlElement() {
        const htmlElement = document.createElement("div")
        htmlElement.classList.add("home-tasks-list-container")
        return htmlElement
    }

    static clearHtmlElement() {
        const container = document.querySelector(".home-tasks-list-container")
        container.innerHTML = ""
    }

    static update(date) {
        this.clearHtmlElement()
        this.createHtmlElement()
        this.htmlElement.appendChild(this.showTasks(date))
    }

    static createList() {
        const list = document.createElement("ul")
        list.classList.add("home-tasks-list")
        return list
    }

    static showTasks(date) {
        const tasks = Task.findTasksForDate(date)
        if (tasks.length === 0) {
            return this.createEmptyListMessage()
        }
        const list = this.createList()
        tasks.forEach((task) => this.addTaskToList(list, task, date))
        return list
    }

    static addTaskToList(list, { task, project }, date) {
        const listItem = document.createElement("li")
        listItem.appendChild(Task.createTaskHtmlElement(task, project, () => this.update(date)))
        list.appendChild(listItem)
    }

    static createEmptyListMessage() {
        const message = document.createElement("div")
        message.classList.add("home-tasks-list-empty")
        message.innerHTML = "No tasks for this day. <br> Click + button to create one."
        return message
    }
}
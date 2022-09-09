import NewTaskForm from "../Forms/NewTaskForm"
import Task from "./Task"
import Main from "../UI/Main"

export default class TasksList {
    static htmlElement = this.createHtmlElement()

    static render(date) {
        this.clearHtmlElement()
        this.htmlElement.appendChild(this.createNewTaskButton(date))
        this.htmlElement.appendChild(this.showTasks(Task.findTasksForDate(date), date))
        return this.htmlElement
    }

    static createHtmlElement() {
        const htmlElement = document.createElement("div")
        htmlElement.classList.add("tasks-list-container")
        return htmlElement
    }

    static clearHtmlElement() {
        this.htmlElement.innerHTML = ""
    }

    static update(date) {
        this.clearHtmlElement()
        this.createHtmlElement()
        this.htmlElement.appendChild(this.createNewTaskButton(date))
        this.htmlElement.appendChild(this.showTasks(Task.findTasksForDate(date), date))
    }

    static createList() {
        const list = document.createElement("ul")
        list.classList.add("tasks-list")
        return list
    }

    static showTasks(tasks) {
        if (tasks.length === 0) {
            return this.createEmptyListMessage()
        }
        const list = this.createList()
        tasks.forEach((task) => this.addTaskToList(list, task))
        return list
    }

    static addTaskToList(list, { task, folder }) {
        const listItem = document.createElement("li")
        listItem.appendChild(Task.createTaskHtmlElement(task, folder))
        list.appendChild(listItem)
    }

    static createEmptyListMessage() {
        const message = document.createElement("ul")
        message.classList.add("tasks-list", "tasks-list-empty")
        message.innerHTML = "No tasks. <br> Click + button to create one."
        return message
    }

    static createNewTaskButton(date) {
        const newTaskButton = document.createElement("button")
        newTaskButton.classList.add("calendar-tab-new-task-button", "floating-button")
        newTaskButton.textContent = "+"
        newTaskButton.addEventListener("click", () => Main.showSlideContent(new NewTaskForm(date).render()))
        return newTaskButton
    }
}
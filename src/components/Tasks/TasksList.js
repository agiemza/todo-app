import NewTaskForm from "../Forms/subcomponents/NewTaskForm"
import EditTaskForm from "../Forms/subcomponents/EditTaskForm"
import Task from "./Task"
import Main from "../UI/Main"
import FolderIcon from '../Icons/folder'
import StarIcon from "../Icons/star"
import Folder from "../Folders/Folder"

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
        listItem.appendChild(this.createTaskHtmlElement(task, folder))
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
        newTaskButton.classList.add("floating-button")
        newTaskButton.textContent = "+"
        newTaskButton.addEventListener("click", () => Main.showSlideContent(new NewTaskForm(date).render()))
        return newTaskButton
    }

    static createTaskHtmlElement(task, folder) {
        const container = document.createElement("div")
        container.classList.add("task-container")
        container.setAttribute("data-task-id", task.id)
        container.addEventListener("click", () => {
            const form = new EditTaskForm(task.id)
            Main.showSlideContent(form.render())
            form.createRemoveTaskButton()
        })

        const check = document.createElement("button")
        check.classList.add("task-check-button")
        check.addEventListener("click", e => this.handleCheckButtonClick(e, task.id))
        container.appendChild(check)

        if (task.checked) {
            container.classList.add("task-container-checked")
            check.classList.add("task-check-button-checked")
        }

        const folderContainer = document.createElement("div")
        folderContainer.classList.add("task-folder-name")
        folderContainer.innerHTML = FolderIcon
        container.appendChild(folderContainer)
        folderContainer.addEventListener("click", e => this.handleFolderClick(e, folder.id))

        const folderName = document.createElement("p")
        folderName.textContent =  folder.name
        folderContainer.appendChild(folderName)

        const name = document.createElement("div")
        name.classList.add("task-text")
        name.textContent = task.name
        container.appendChild(name)

        const important = document.createElement("button")
        important.classList.add("task-important-button")
        important.innerHTML = StarIcon
        important.addEventListener("click", e => this.handleImportantButtonClick(e, task.id))
        container.appendChild(important)

        if (task.important) {
            important.classList.add("task-important-button-active")
        }

        return container
    }

    static handleFolderClick(e, folderId) {
        e.stopPropagation()
        Folder.show(folderId)
    }

    static handleCheckButtonClick(e, taskId) {
        e.stopPropagation()
        Task.check(taskId)
    }

    static handleImportantButtonClick(e, taskId) {
        e.stopPropagation()
        Task.important(taskId)
    }
}
import { nanoid } from "nanoid"
import TaskForm from "../Forms/TaskForm"
import LocalStorage from "../LocalStorage"
import Main from "../UI/Main"
import Navbar from "../UI/Navbar"

export default class Project {

    constructor(title, description) {
        this.id = nanoid()
        this.title = title
        this.description = description
        this.tasks = []
    }

    save() {
        Navbar.addProjectToList(this)
        LocalStorage.add(this)
    }

    static display(projectId) {
        const project = LocalStorage.getProject(projectId)
        const htmlElement = this.createHtmlElement(project)
        Main.changeContent(htmlElement)
    }

    static createHtmlElement(project) {
        const projectContainer = document.createElement("div")
        projectContainer.classList.add("project-container")

        projectContainer.appendChild(this.createDetailsContainer(project.title, project.description, project.id))
        projectContainer.appendChild(this.createTasksContainer(project.tasks))

        return projectContainer
    }

    static createDetailsContainer(title, description, id) {
        const titleContainer = document.createElement("h2")
        titleContainer.textContent = title

        const descriptionContainer = document.createElement("p")
        descriptionContainer.textContent = description

        const addTaskButton = document.createElement("button")
        addTaskButton.classList.add("task-add-button")
        addTaskButton.textContent = "+"
        addTaskButton.addEventListener("click", () => TaskForm.open(id))

        const detailsContainer = document.createElement("div")
        detailsContainer.appendChild(titleContainer)
        detailsContainer.appendChild(descriptionContainer)
        detailsContainer.appendChild(addTaskButton)

        return detailsContainer
    }

    static createTasksContainer(tasks) {
        const tasksContainer = document.createElement("div")

        if (!tasks.length > 0) {
            tasksContainer.textContent = "This project is empty"
            return tasksContainer
        }

        tasks.forEach(task => {
            const container = document.createElement("div")

            container.classList.add("task-container")
            container.setAttribute("data-task-id", task.id)

            const check = document.createElement("button")
            check.classList.add("task-check-button")
            check.textContent = "check"
            check.addEventListener("click", () => console.log("check", task.id))
            container.appendChild(check)

            const content = document.createElement("div")
            content.classList.add("task-text")
            content.textContent = task.content
            container.appendChild(content)

            const dueDate = document.createElement("div")
            dueDate.classList.add("task-date")
            dueDate.textContent = task.dueDate
            container.appendChild(dueDate)

            const edit = document.createElement("button")
            edit.classList.add("task-edit-button")
            edit.textContent = "edit"
            edit.addEventListener("click", () => console.log("edit", task.id))
            container.appendChild(edit)

            const remove = document.createElement("button")
            remove.classList.add("task-remove-button")
            remove.textContent = "remove"
            remove.addEventListener("click", () => console.log("remove", task.id))
            container.appendChild(remove)

            if (task.checked) {
                container.classList.add("task-container-checked")
                check.classList.add("task-check-button-checked")
            }

            tasksContainer.appendChild(container)
        })

        return tasksContainer
    }

}
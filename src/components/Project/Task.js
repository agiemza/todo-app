import { nanoid } from "nanoid"
import LocalStorage from "../LocalStorage"
import Project from "./Project"

export default class Task {
    constructor(content, dueDate) {
        this.id = nanoid()
        this.content = content
        this.dueDate = dueDate
    }

    save(projectId) {
        const project = LocalStorage.getProject(projectId)
        project.tasks.unshift(this)
        LocalStorage.saveProject(project)
    }

    static delete(project, task) {
        project.tasks = project.tasks.filter(item => item.id !== task.id)
        LocalStorage.saveProject(project)
        Project.display(project.id)
    }

    static createTasksContainer(project) {
        const tasksContainer = document.createElement("div")
        const tasks = project.tasks

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
            remove.addEventListener("click", () => this.delete(project, task))
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
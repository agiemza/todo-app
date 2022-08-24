import { nanoid } from "nanoid"
import TaskEditForm from "../Forms/TaskEditForm"
import LocalStorage from "../LocalStorage"
import Project from "./Project"

export default class Task {
    constructor(content, dueDate) {
        this.id = nanoid()
        this.checked = false
        this.content = content
        this.dueDate = dueDate
    }

    static add(task, projectId) {
        const project = LocalStorage.getProject(projectId)
        project.tasks.unshift(task)
        LocalStorage.saveProject(project)
    }

    static check(project, task) {
        project.tasks.find(item => {
            if (item.id === task.id) {
                item.checked = !item.checked
            }
        })
        LocalStorage.saveProject(project)
        Project.display(project.id)
    }

    static edit(project, task) {
        const container = document.querySelector(`[data-task-id=${task.id}]`)
        container.innerHTML = ""
        const form = new TaskEditForm(task, project)
        form.render().forEach(element => container.appendChild(element))
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
            check.addEventListener("click", () => this.check(project, task))
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
            edit.addEventListener("click", () => this.edit(project, task))
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
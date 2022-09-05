import { nanoid } from "nanoid"
import EditTaskForm from "../Forms/EditTaskForm"
import LocalStorage from "../LocalStorage"
import RemoveIcon from "../Icons/remove"
import Main from "../UI/Main"

export default class Task {
    constructor(content, dueDate) {
        this.id = nanoid()
        this.checked = false
        this.content = content
        this.dueDate = dueDate
    }

    static get(taskId) {
        const categories = LocalStorage.get()
        let wantedTask
        let wantedTaskCategory
        categories.forEach(category => {
            category.tasks.filter(task => {
                if (task.id === taskId) {
                    wantedTask = task
                    wantedTaskCategory = category
                }
            })
        })
        return { task: wantedTask, category: wantedTaskCategory }
    }

    static add(task, projectId) {
        const project = LocalStorage.getProject(projectId)
        project.tasks.unshift(task)
        LocalStorage.saveProject(project)
    }

    static check(e, project, task, refreshHandler) {
        e.stopPropagation()
        project.tasks.find(item => {
            if (item.id === task.id) {
                item.checked = !item.checked
            }
        })
        LocalStorage.saveProject(project)
        refreshHandler()
    }

    static edit(project, task) {
        const container = document.querySelector(`[data-task-id="${task.id}"]`)
        container.innerHTML = ""
        const form = new EditTaskForm(task, project)
        form.render().forEach(element => container.appendChild(element))
    }

    static delete(category, task) {
        category.tasks = category.tasks.filter(item => item.id !== task.id)
        LocalStorage.saveProject(category)
    }

    static findTasksForDate(date) {
        const categories = LocalStorage.get()
        const tasks = []
        const tasksDone = []
        categories.forEach(category => {
            category.tasks.forEach(task => {
                if (task.dueDate === date) {
                    if (task.checked) {
                        tasksDone.push({ task, category })
                    }
                    if (!task.checked) {
                        tasks.push({ task, category })
                    }
                }
            })
        })
        return tasks.concat(tasksDone)
    }

    static createTaskHtmlElement(task, project, refreshHandler) {
        const container = document.createElement("div")
        container.classList.add("task-container")
        container.setAttribute("data-task-id", task.id)
        container.addEventListener("click", () => {
            Main.showSlideContent(new EditTaskForm(task.id).render())
        })

        const check = document.createElement("button")
        check.classList.add("task-check-button")
        check.addEventListener("click", e => this.check(e, project, task, refreshHandler))
        container.appendChild(check)

        const content = document.createElement("div")
        content.classList.add("task-text")
        content.textContent = task.content
        container.appendChild(content)

        // const remove = document.createElement("button")
        // remove.classList.add("task-remove-button")
        // remove.innerHTML = RemoveIcon
        // remove.addEventListener("click", () => this.delete(project, task))
        // container.appendChild(remove)

        if (task.checked) {
            container.classList.add("task-container-checked")
            check.classList.add("task-check-button-checked")
        }

        return container
    }
}
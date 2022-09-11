import { nanoid } from "nanoid"
import Calendar from "../Calendar/Calendar"
import EditTaskForm from "../Forms/subcomponents/EditTaskForm"
import LocalStorage from "../Utils/LocalStorage"
import TasksList from "./TasksList"
import Main from "../UI/Main"
import FolderIcon from '../Icons/folder'
import CalendarTab from "../Tabs/Calendar/CalendarTab"
import FoldersList from "../Folders/FoldersList"

export default class Task {
    constructor(name, dueDate) {
        this.id = nanoid()
        this.checked = false
        this.name = name
        this.dueDate = dueDate
    }

    static get(taskId) {
        const folders = LocalStorage.get()
        let wantedTask
        let wantedFolder
        folders.forEach(folder => {
            folder.tasks.filter(task => {
                if (task.id === taskId) {
                    wantedTask = task
                    wantedFolder = folder
                }
            })
        })
        return { task: wantedTask, folder: wantedFolder }
    }

    static add(task, folderId) {
        const folder = LocalStorage.getFolder(folderId)
        folder.tasks.unshift(task)
        LocalStorage.saveFolder(folder)
    }

    static check(taskId) {
        const { task, folder } = this.get(taskId)
        folder.tasks.find(item => {
            if (item.id === task.id) {
                item.checked = !item.checked
            }
        })
        LocalStorage.saveFolder(folder)
        CalendarTab.refresh(task.dueDate)
        FoldersList.refresh(folder.id)
        TasksList.update(task.dueDate)
    }

    static handleCheckButtonClick(e, taskId) {
        e.stopPropagation()
        this.check(taskId)
    }

    static edit(folder, task) {
        const container = document.querySelector(`[data-task-id="${task.id}"]`)
        container.innerHTML = ""
        const form = new EditTaskForm(task, folder)
        form.render().forEach(element => container.appendChild(element))
    }

    static remove(folder, task) {
        folder.tasks = folder.tasks.filter(item => item.id !== task.id)
        LocalStorage.saveFolder(folder)
        Calendar.createWidget(new Date(task.dueDate))
    }

    static findTasksForDate(date) {
        const folders = LocalStorage.get()
        const tasks = []
        const tasksDone = []
        folders.forEach(folder => {
            folder.tasks.forEach(task => {
                if (task.dueDate === date) {
                    if (task.checked) {
                        tasksDone.push({ task, folder })
                    }
                    if (!task.checked) {
                        tasks.push({ task, folder })
                    }
                }
            })
        })
        return tasks.concat(tasksDone)
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

        const folderContainer = document.createElement("div")
        folderContainer.classList.add("task-folder-name")
        folderContainer.innerHTML = `${FolderIcon} ${folder.name}`
        container.appendChild(folderContainer)

        const name = document.createElement("div")
        name.classList.add("task-text")
        name.textContent = task.name
        container.appendChild(name)

        if (task.checked) {
            container.classList.add("task-container-checked")
            check.classList.add("task-check-button-checked")
        }

        return container
    }

}
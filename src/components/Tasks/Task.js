import { nanoid } from "nanoid"
import Calendar from "../Calendar/Calendar"
import EditTaskForm from "../Forms/subcomponents/EditTaskForm"
import LocalStorage from "../Utils/LocalStorage"
import TasksList from "./TasksList"
import CalendarTab from "../Tabs/Calendar/CalendarTab"
import FoldersList from "../Folders/FoldersList"

export default class Task {
    constructor(name, dueDate) {
        this.id = nanoid()
        this.checked = false
        this.important = false
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

    static important(taskId) {
        const { task, folder } = this.get(taskId)
        folder.tasks.find(item => {
            if (item.id === task.id) {
                item.important = !item.important
            }
        })
        LocalStorage.saveFolder(folder)
        CalendarTab.refresh(task.dueDate)
        FoldersList.refresh(folder.id)
        TasksList.update(task.dueDate)
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
}
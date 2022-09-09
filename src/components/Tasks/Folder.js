import { nanoid } from "nanoid"
import EditFolderForm from "../Forms/EditFolderForm"
import LocalStorage from "../LocalStorage"
import Main from "../UI/Main"
import Task from './Task'

export default class Folder {
    constructor(name) {
        this.id = nanoid()
        this.name = name
        this.tasks = []
    }

    static generateDefaultFolder() {
        const defaultFolder = new this("Default")
        defaultFolder.id = "DEFAULT"
        LocalStorage.saveFolder(defaultFolder)
    }

    static getSortedTasks(folderId) {
        const folder = LocalStorage.getFolder(folderId)
        const tasks = []
        const tasksDone = []
        folder.tasks.forEach(task => {
            if (task.checked) {
                tasksDone.push({ task, folder })
            }
            if (!task.checked) {
                tasks.push({ task, folder })
            }
        })
        return tasks.concat(tasksDone)
    }


    save() {
        LocalStorage.add(this)
    }

    static update(folder) {
        LocalStorage.remove(folder)
        LocalStorage.add(folder)
    }

    static delete(folderId) {
        const folders = LocalStorage.get().filter(item => item.id !== folderId)
        LocalStorage.set(folders)
    }

    static edit(folderId) {
        const form = new EditFolderForm(folderId)
        const element = form.render()
        Main.changeContent(element)
        form.inputTitle.focus()
    }

    static display(folderId) {
        const folder = LocalStorage.getFolder(folderId)
        const htmlElement = this.createHtmlElement(folder)
        Main.changeContent(htmlElement)
    }


    static createHtmlElement(folder) {
        const folderContainer = document.createElement("div")
        folderContainer.classList.add("folder-container")

        folderContainer.appendChild(this.createDetailsContainer(folder.name, folder.id))
        folderContainer.appendChild(Task.createTasksContainer(folder))

        return folderContainer
    }

    static createDetailsContainer(name, id) {
        const nameContainer = document.createElement("h2")
        nameContainer.textContent = name

        const editButton = document.createElement("button")
        editButton.classList.add("folder-edit-button")
        editButton.textContent = "edit"
        editButton.addEventListener("click", () => this.edit(id))

        const deleteButton = document.createElement("button")
        deleteButton.classList.add("folder-delete-button")
        deleteButton.textContent = "delete folder"
        deleteButton.addEventListener("click", () => this.delete(id))

        const detailsContainer = document.createElement("div")
        detailsContainer.appendChild(nameContainer)
        detailsContainer.appendChild(editButton)
        detailsContainer.appendChild(deleteButton)

        return detailsContainer
    }
}
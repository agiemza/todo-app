import { nanoid } from "nanoid"
import EditFolderForm from "../Forms/EditFolderForm"
import LocalStorage from "../LocalStorage"
import Main from "../UI/Main"
import Navbar from "../UI/Navbar"
import Task from './Task'

export default class Folder {
    constructor(title, description) {
        this.id = nanoid()
        this.title = title
        this.description = description
        this.tasks = []
    }

    save() {
        Navbar.addFolderToList(this)
        LocalStorage.add(this)
    }

    static update(folder) {
        LocalStorage.remove(folder)
        LocalStorage.add(folder)
        Folder.display(folder.id)
        Navbar.upadateFolderList()
    }

    static delete(folderId) {
        const folders = LocalStorage.get().filter(item => item.id !== folderId)
        LocalStorage.set(folders)
        if (LocalStorage.isEmpty()) {
            this.displayNoFolderMessage()
        }
        if (!LocalStorage.isEmpty()) {
            Folder.display(LocalStorage.get()[0].id)
        }
        Navbar.upadateFolderList()
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

    static displayNoFolderMessage() {
        const message = document.createElement("div")
        message.classList.add("no-folders-message")
        message.textContent = "You have no folders"
        Main.changeContent(message)
    }

    static createHtmlElement(folder) {
        const folderContainer = document.createElement("div")
        folderContainer.classList.add("folder-container")

        folderContainer.appendChild(this.createDetailsContainer(folder.title, folder.description, folder.id))
        folderContainer.appendChild(Task.createTasksContainer(folder))

        return folderContainer
    }

    static createDetailsContainer(title, description, id) {
        const titleContainer = document.createElement("h2")
        titleContainer.textContent = title

        const descriptionContainer = document.createElement("p")
        descriptionContainer.textContent = description

        const editButton = document.createElement("button")
        editButton.classList.add("folder-edit-button")
        editButton.textContent = "edit"
        editButton.addEventListener("click", () => this.edit(id))

        const deleteButton = document.createElement("button")
        deleteButton.classList.add("folder-delete-button")
        deleteButton.textContent = "delete folder"
        deleteButton.addEventListener("click", () => this.delete(id))

        const detailsContainer = document.createElement("div")
        detailsContainer.appendChild(titleContainer)
        detailsContainer.appendChild(descriptionContainer)
        detailsContainer.appendChild(editButton)
        detailsContainer.appendChild(deleteButton)

        return detailsContainer
    }
}
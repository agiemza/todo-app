import "./foldersTab.css"
import Nav from "../../UI/Nav"
import TasksList from "../../Tasks/TasksList"
import ExpandIcon from "../../Icons/expand"
import CollapseIcon from "../../Icons/collapse"
import Task from "../../Tasks/Task"
import Folder from "../../Tasks/Folder"
import LocalStorage from "../../LocalStorage"
import EditFolderForm from "../../Forms/EditFolderForm"

export default class FoldersTab {
    static htmlElement = this.createHtmlElement()

    static render() {
        this.clearHtmlElement()
        this.htmlElement.appendChild(this.createFoldersList())
        Nav.setButtonActive("nav-button-folders")
        return this.htmlElement
    }

    static createHtmlElement() {
        const element = document.createElement("div")
        element.classList.add("folders-tab-container")
        return element
    }

    static clearHtmlElement() {
        this.htmlElement.innerHTML = ""
    }

    static refresh(folderId) {
        const folderContainer = this.htmlElement.querySelector(`[data-folder-id="${folderId}"]`) 
        const list = folderContainer.querySelector(".tasks-list")
        list.remove()

        const newList = TasksList.showTasks(Task.getTasksFromFolder(folderId))
        newList.classList.add("tasks-list-expanded")
        folderContainer.appendChild(newList)
    }

    static handleExpand(folderHtmlElement) {
        const button = folderHtmlElement.querySelector(".folder-expand-button")
        button.classList.toggle("button-expanded")
        const isExpanded = button.classList.contains("button-expanded")
        if (isExpanded) {
            button.innerHTML = CollapseIcon
            this.expandFolder(folderHtmlElement)
        }
        if (!isExpanded) {
            button.innerHTML = ExpandIcon
            this.collapseFolder(folderHtmlElement)
        }
    }

    static expandFolder(folderHtmlElement) {
        const list = folderHtmlElement.querySelector(".tasks-list")
        list.classList.add("tasks-list-expanded")
    }

    static collapseFolder(folderHtmlElement) {
        const list = folderHtmlElement.querySelector(".tasks-list")
        list.classList.remove("tasks-list-expanded")
    }

    static createFoldersList() {
        const folderListContainer = document.createElement("ul")
        folderListContainer.classList.add("folders-list")
        let folders = LocalStorage.get()

        if (folders.length === 0) {
            Folder.generateDefaultFolder()
            folders = LocalStorage.get()
        }

        folders.forEach(folder => {
            folderListContainer.appendChild(this.createFolderItem(folder))
        })

        return folderListContainer
    }

    static createFolderItem(folder) {
        const folderContainer = document.createElement("li")
        folderContainer.setAttribute("data-folder-id", folder.id)

        const topBar = document.createElement("div")
        topBar.classList.add("folders-list-top-bar")
        folderContainer.appendChild(topBar)

        const folderName = document.createElement("div")
        folderName.classList.add("folder-name")
        folderName.textContent = folder.name
        folderName.addEventListener("click", () => {
            const form = new EditFolderForm(folder, topBar)
            form.render()
        })
        topBar.appendChild(folderName)

        const expandButton = document.createElement("button")
        expandButton.classList.add("folder-expand-button")
        expandButton.innerHTML = ExpandIcon
        expandButton.addEventListener("click", () => this.handleExpand(folderContainer))
        topBar.appendChild(expandButton)

        folderContainer.appendChild(TasksList.showTasks(Task.getTasksFromFolder(folder.id)))
        folder.id === "DEFAULT" && this.handleExpand(folderContainer)
        return folderContainer
    }

}
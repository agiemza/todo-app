import TasksList from "../Tasks/TasksList"
import EditIcon from "../Icons/edit"
import ExpandIcon from "../Icons/expand"
import CollapseIcon from "../Icons/collapse"
import PlusIcon from "../Icons/plus"
import Folder from "./Folder"
import LocalStorage from "../Utils/LocalStorage"
import EditFolderForm from "../Forms/subcomponents/EditFolderForm"
import Main from "../UI/Main"
import NewTaskForm from "../Forms/subcomponents/NewTaskForm"

export default class FoldersList {
    static htmlElement = this.createHtmlElement()

    static render(expadedFolders = ["DEFAULT"]) {
        this.clearHtmlElement()
        this.htmlElement.appendChild(this.createFoldersList(expadedFolders))
        return this.htmlElement
    }

    static createHtmlElement() {
        const element = document.createElement("div")
        element.classList.add("folders-list-container")
        return element
    }

    static clearHtmlElement() {
        this.htmlElement.innerHTML = ""
    }

    static refresh() {
        const expadedFolders = this.getExpandedFoldersArray()
        this.render(expadedFolders)
    }

    static createFoldersList(expandedFolders) {
        const folderListContainer = document.createElement("ul")
        folderListContainer.classList.add("folders-list")

        let folders = LocalStorage.get()

        if (folders.length === 0) {
            Folder.generateDefaultFolder()
            folders = LocalStorage.get()
        }

        folders.forEach(folder => {
            folderListContainer.appendChild(this.createListItem(folder, expandedFolders))
        })

        return folderListContainer
    }

    static createListItem(folder, expadedFolders) {
        const folderContainer = document.createElement("li")
        folderContainer.setAttribute("data-folder-id", folder.id)

        const topBar = this.createFolderTopBar(folder)
        folderContainer.appendChild(topBar)

        folderContainer.appendChild(TasksList.showTasks(Folder.getSortedTasks(folder.id)))

        if (expadedFolders.includes(folder.id)) {
            this.handleExpandButtonClick(folder.id, folderContainer)
        }

        return folderContainer
    }

    static createFolderTopBar(folder) {
        const topBar = document.createElement("div")
        topBar.classList.add("folders-list-top-bar")

        const folderName = document.createElement("div")
        folderName.classList.add("folder-name")
        topBar.appendChild(folderName)
        const folderNameText = document.createElement("div")
        folderNameText.textContent = folder.name
        folderName.appendChild(folderNameText)

        if (folder.id !== "DEFAULT") {
            topBar.appendChild(this.createEditFolderButton(folder))
        }
        topBar.appendChild(this.createAddTaskToFolderButton(folder))
        topBar.appendChild(this.createExpandFolderButton(folder.id))

        return topBar
    }

    static createEditFolderButton(folder) {
        const editFolderButton = document.createElement("button")
        editFolderButton.classList.add("folder-list-top-bar-button", "folder-edit-button")
        editFolderButton.innerHTML = EditIcon
        editFolderButton.addEventListener("click", () => {
            const form = new EditFolderForm(folder)
            Main.showSlideContent(form.render())
            form.createRemoveFolderButton()
        })
        return editFolderButton
    }

    static createAddTaskToFolderButton(folder) {
        const addTaskToFolderButton = document.createElement("button")
        addTaskToFolderButton.classList.add("folder-list-top-bar-button")
        addTaskToFolderButton.innerHTML = PlusIcon
        addTaskToFolderButton.addEventListener("click", () => {
            Main.showSlideContent(new NewTaskForm(undefined, folder).render())
        })
        return addTaskToFolderButton
    }

    static createExpandFolderButton(folderId) {
        const expandFolderButton = document.createElement("button")
        expandFolderButton.classList.add("folder-list-top-bar-button", "folder-expand-button")
        expandFolderButton.innerHTML = ExpandIcon
        expandFolderButton.addEventListener("click", () => this.handleExpandButtonClick(folderId))
        return expandFolderButton
    }

    static getExpandedFoldersArray() {
        const expandedHtmlElements = document.querySelectorAll(`[data-folder-expanded="expanded"]`)
        const expadedFoldersArray = []
        expandedHtmlElements.forEach(element => expadedFoldersArray.push(element.getAttribute("data-folder-id")))
        return expadedFoldersArray
    }

    static expandFolder(folderHtmlElement) {
        folderHtmlElement.setAttribute("data-folder-expanded", "expanded")
        const list = folderHtmlElement.querySelector(".tasks-list")
        list.classList.add("tasks-list-expanded")
    }

    static collapseFolder(folderHtmlElement) {
        folderHtmlElement.removeAttribute("data-folder-expanded")
        const list = folderHtmlElement.querySelector(".tasks-list")
        list.classList.remove("tasks-list-expanded")
    }

    static handleExpandButtonClick(folderId, folderContainer) {
        const folderHtmlElement = folderContainer ? folderContainer : this.htmlElement.querySelector(`[data-folder-id="${folderId}"]`)
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
}
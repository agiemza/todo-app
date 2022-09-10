import "./foldersTab.css"
import Nav from "../../UI/Nav"
import TasksList from "../../Tasks/TasksList"
import EditIcon from "../../Icons/edit"
import ExpandIcon from "../../Icons/expand"
import CollapseIcon from "../../Icons/collapse"
import Folder from "../../Tasks/Folder"
import LocalStorage from "../../LocalStorage"
import EditFolderForm from "../../Forms/EditFolderForm"
import NewFolderForm from "../../Forms/NewFolderForm"
import Main from "../../UI/Main"

export default class FoldersTab {
    static htmlElement = this.createHtmlElement()

    static render(expadedFolders = ["DEFAULT"]) {
        this.clearHtmlElement()
        this.htmlElement.appendChild(this.createNewFolderButton())
        this.htmlElement.appendChild(this.createFoldersList(expadedFolders))
        this.htmlElement.appendChild(TasksList.createNewTaskButton())
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

    static refresh() {
        const expadedFolders = this.getExpandedFolders()
        this.render(expadedFolders)
    }

    static getExpandedFolders() {
        const expandedNodes = document.querySelectorAll(`[data-folder-expanded="expanded"]`)
        const expadedFolders = []
        expandedNodes.forEach(node => expadedFolders.push(node.getAttribute("data-folder-id")))
        return expadedFolders
    }

    static handleExpand(folderId, folderContainer) {
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

    static createFoldersList(expandedFolders) {
        const folderListContainer = document.createElement("ul")
        folderListContainer.classList.add("folders-list")
        let folders = LocalStorage.get()

        if (folders.length === 0) {
            Folder.generateDefaultFolder()
            folders = LocalStorage.get()
        }

        folders.forEach(folder => {
            folderListContainer.appendChild(this.createFolderItem(folder, expandedFolders))
        })

        return folderListContainer
    }

    static createFolderItem(folder, expadedFolders) {
        const folderContainer = document.createElement("li")
        folderContainer.setAttribute("data-folder-id", folder.id)

        const topBar = this.generateTopBar(folder)
        folderContainer.appendChild(topBar)

        folderContainer.appendChild(TasksList.showTasks(Folder.getSortedTasks(folder.id)))


        if (expadedFolders.includes(folder.id)) {
            this.handleExpand(folder.id, folderContainer)
        }

        return folderContainer
    }

    static generateTopBar(folder) {
        const topBar = document.createElement("div")
        topBar.classList.add("folders-list-top-bar")

        const folderName = document.createElement("div")
        folderName.classList.add("folder-name")
        topBar.appendChild(folderName)

        const folderNameText = document.createElement("div")
        folderNameText.textContent = folder.name
        folderName.appendChild(folderNameText)

        if (folder.id !== "DEFAULT") {
            const editFormButton = document.createElement("button")
            editFormButton.classList.add("folder-list-top-bar-button", "folder-edit-button")
            editFormButton.innerHTML = EditIcon
            editFormButton.addEventListener("click", () => {
                const form = new EditFolderForm(folder)
                Main.showSlideContent(form.render())
                form.createRemoveFolderButton()
            })
            folderName.appendChild(editFormButton)
        }

        const expandButton = document.createElement("button")
        expandButton.classList.add("folder-list-top-bar-button", "folder-expand-button")
        expandButton.innerHTML = ExpandIcon
        expandButton.addEventListener("click", () => this.handleExpand(folder.id))
        topBar.appendChild(expandButton)

        return topBar
    }

    static createNewFolderButton() {
        const newFolderButton = document.createElement("button")
        newFolderButton.classList.add("folder-new-button")
        newFolderButton.textContent = "+ Add folder"
        newFolderButton.addEventListener("click", () => Main.showSlideContent(new NewFolderForm().render()))
        return newFolderButton
    }

}
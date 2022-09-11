import "./foldersTab.css"
import Nav from "../../UI/Nav"
import NewFolderForm from "../../Forms/subcomponents/NewFolderForm"
import Main from "../../UI/Main"
import FoldersList from "../../Folders/FoldersList"

export default class FoldersTab {
    static htmlElement = this.createHtmlElement()

    static render(folderId) {
        this.clearHtmlElement()
        this.htmlElement.appendChild(this.createNewFolderButton())
        this.htmlElement.appendChild(FoldersList.render(folderId))
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

    static createNewFolderButton() {
        const newFolderButton = document.createElement("button")
        newFolderButton.classList.add("folder-new-button")
        newFolderButton.textContent = "+ Add folder"
        newFolderButton.addEventListener("click", () => Main.showSlideContent(new NewFolderForm().render()))

        const buttonContainer = document.createElement("div")
        buttonContainer.classList.add("folder-new-button-wrapper")
        buttonContainer.appendChild(newFolderButton)

        return buttonContainer
    }
}
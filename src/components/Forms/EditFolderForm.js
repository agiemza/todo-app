import Form from "./Form"
import Folder from '../Tasks/Folder'
import Main from "../UI/Main"
import TasksList from "../Tasks/TasksList"
import FoldersTab from "../Tabs/Folders/FoldersTab"

export default class EditFolderForm extends Form {
    constructor(folder, topBar) {
        super()
        this.folder = folder
        this.topBar = topBar
        this.inputName = this.addInput([
            { type: "type", value: "text" },
            { type: "class", value: "folder-name" },
            { type: "id", value: "name" },
            { type: "value", value: this.folder.name }
        ])
    }

    createRemoveFolderButton() {
        const removeButton = this.createRemoveButton(() => {
            Folder.delete(this.folder.id)
            Main.closeSlideContainer()
        })
        removeButton.classList.add("folder-remove-button")
        const output = document.querySelector(".slide-container")
        output.appendChild(removeButton)
    }

    submitButtonHandler(e) {
        if (e.key !== "Enter") {
            return
        }
        e.preventDefault()
        if (!this.validateForm()) {
            return
        }
        this.folder.name = this.inputName.value
        Folder.update(this.folder)
    }

    render() {
        this.topBar.querySelector(".folder-name").remove()
        this.topBar.prepend(this.inputName)
        this.inputName.addEventListener("keydown", e => this.submitButtonHandler(e))
        this.inputName.focus()

        // this.htmlElement.appendChild(this.createSubmit())
        // this.htmlElement.appendChild(this.errorBox)
        // this.htmlElement.classList.add("folder-form", "edit-folder-form")
        // return this.htmlElement
    }

}
import LocalStorage from "../../Utils/LocalStorage"
import FoldersList from "../../Folders/FoldersList"
import Folder from "../../Folders/Folder"
import TasksList from "../../Tasks/TasksList"
import Main from "../../UI/Main"
import Form from "../Form"

export default class NewFolderForm extends Form {
    constructor() {
        super()
        this.inputName = this.addInput([
            { type: "type", value: "text" },
            { type: "id", value: "folder-name" },
            { type: "placeholder", value: "Input new folder here" }
        ])
        this.folder = null
    }

    submitButtonHandler(e) {
        e.preventDefault()
        if (!this.validateForm()) {
            return
        }
        this.folder = new Folder(this.inputName.value)
        LocalStorage.add(this.folder)
        FoldersList.refresh(this.folder.id)
        TasksList.update(this.dueDate)
        Main.closeSlideContainer()
    }

    render() {
        this.htmlElement.appendChild(this.addLabel("folder-name", "Folder name:"))
        this.htmlElement.appendChild(this.inputName)
        this.htmlElement.appendChild(this.createSubmit())
        this.htmlElement.appendChild(this.errorBox)
        this.htmlElement.classList.add("folder-form")
        return this.htmlElement
    }
}
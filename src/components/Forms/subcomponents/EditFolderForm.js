import Form from "../Form"
import Folder from '../../Folders/Folder'
import Main from "../../UI/Main"
import CalendarTab from "../../Tabs/Calendar/CalendarTab"
import TasksList from "../../Tasks/TasksList"
import FoldersList from "../../Folders/FoldersList"

export default class EditFolderForm extends Form {
    constructor(folder, topBar) {
        super()
        this.folder = folder
        this.topBar = topBar
        this.inputName = this.addInput([
            { type: "type", value: "text" },
            { type: "id", value: "folder-name" },
            { type: "value", value: this.folder.name }
        ])
    }

    createRemoveFolderButton() {
        const removeButton = this.createRemoveButton(() => {
            Folder.delete(this.folder.id)
            FoldersList.refresh(this.folder.id)
            TasksList.update(this.dueDate)
            Main.closeSlideContainer()
        })
        removeButton.classList.add("task-remove-button")
        return removeButton
    }

    submitButtonHandler(e) {
        e.preventDefault()
        if (!this.validateForm()) {
            return
        }
        this.folder.name = this.inputName.value
        Folder.update(this.folder)

        CalendarTab.refresh(this.dueDate)
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
        this.htmlElement.appendChild(this.createRemoveFolderButton())
        return this.htmlElement
    }

}
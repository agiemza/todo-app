import NewFolderForm from "./NewFolderForm"
import Folder from '../Tasks/Folder'
import LocalStorage from "../LocalStorage"

export default class EditFolderForm extends NewFolderForm {
    constructor(folderId) {
        super()
        this.folder = LocalStorage.getFolder(folderId)
    }

    updateDefaultInputValues() {
        this.inputTitle.value = this.folder.title
        this.inputDescription.value = this.folder.description
    }

    cancelHandler() {
        Folder.display(this.folder.id)
    }

    submitButtonHandler(e) {
        e.preventDefault()
        if (!this.validateForm()) {
            return
        }
        this.folder.title = this.inputTitle.value
        this.folder.description = this.inputDescription.value
        Folder.update(this.folder)
    }

    render() {
        this.htmlElement.appendChild(this.inputTitle)
        this.htmlElement.appendChild(this.createCancel())
        this.htmlElement.appendChild(this.createSubmit("Save"))
        this.htmlElement.appendChild(this.inputDescription)
        this.htmlElement.appendChild(this.errorBox)
        this.htmlElement.classList.add("folder-form", "edit-folder-form")
        this.updateDefaultInputValues()
        return this.htmlElement
    }

}
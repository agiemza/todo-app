import Folder from "../Folders/Folder"
import Form from "./Form"

export default class NewFolderForm extends Form {
    constructor() {
        super()
        this.inputTitle = this.addInput([{ type: "type", value: "text" }, { type: "id", value: "name" }, { type: "placeholder", value: "Title" }])
        this.inputDescription = this.addTextArea([{ type: "id", value: "description" }, { type: "placeholder", value: "Description" }])
    }

    submitButtonHandler(e) {
        e.preventDefault()
        if (!this.validateForm()) {
            return
        }
        const folder = new Folder(this.inputTitle.value, this.inputDescription.value)
        folder.save()
        Folder.display(folder.id)
    }

    render() {
        this.htmlElement.appendChild(this.inputTitle)
        this.htmlElement.appendChild(this.createSubmit("Save"))
        this.htmlElement.appendChild(this.inputDescription)
        this.htmlElement.appendChild(this.errorBox)
        this.htmlElement.classList.add("folder-form")
        return this.htmlElement
    }
}
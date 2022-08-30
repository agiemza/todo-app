import Project from "../Project/Project"
import Form from "./Form"

export default class NewProjectForm extends Form {
    constructor() {
        super()
        this.inputTitle = this.addInput([{ type: "type", value: "text" }, { type: "id", value: "title" }, { type: "placeholder", value: "Title" }])
        this.inputDescription = this.addTextArea([{ type: "id", value: "description" }, { type: "placeholder", value: "Description" }])
    }

    addTextArea(attributes) {
        const textArea = document.createElement("textarea")
        attributes.forEach(({ type, value }) => {
            textArea.setAttribute(type, value)
        })
        return textArea
    }

    submitButtonHandler(e) {
        e.preventDefault()
        if (!this.validateForm()) {
            return
        }
        const project = new Project(this.inputTitle.value, this.inputDescription.value)
        project.save()
        Project.display(project.id)
    }

    cancelHandler() {
        console.log("Cancel")
    }

    validateForm() {
        this.errorBox.textContent = ""
        const titlePattern = /^.{1,}$/g
        if (!titlePattern.test(this.inputTitle.value)) {
            this.errorBox.textContent = "Title must contain at least 1 character"
            return false
        }
        return true
    }

    render() {
        this.htmlElement.appendChild(this.inputTitle)
        this.htmlElement.appendChild(this.createSubmit("Save"))
        this.htmlElement.appendChild(this.createCancel())
        this.htmlElement.appendChild(this.inputDescription)
        return this.htmlElement
    }
}
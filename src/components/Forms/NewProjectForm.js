import Project from "../Project/Project"
import Form from "./Form"

export default class NewProjectForm extends Form {
    constructor() {
        super()
        this.inputTitle = this.addInput([{ type: "type", value: "text" }, { type: "id", value: "title" }, { type: "placeholder", value: "Title" }])
        this.inputDescription = this.addTextArea([{ type: "id", value: "description" }, { type: "placeholder", value: "Description" }])
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
        this.htmlElement.appendChild(this.inputDescription)
        this.htmlElement.appendChild(this.errorBox)
        this.htmlElement.classList.add("project-form")
        return this.htmlElement
    }
}
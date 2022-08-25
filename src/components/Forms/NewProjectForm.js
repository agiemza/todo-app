import Project from "../Project/Project"
import Form from "./Form"

export default class NewProjectForm extends Form {
    constructor() {
        super()
        this.inputTitle = this.addInput([{ type: "type", value: "text" }, { type: "id", value: "title" },], "Title")
        this.inputDescription = this.addTextArea([{ type: "id", value: "description" },], "Description")
        this.submitButtonHandler = this.handleSubmit
    }

    addTextArea(attributes, label) {
        const textArea = document.createElement("textarea")
        if (label && attributes.find(item => item.type === "id")) {
            this.htmlElement.appendChild(this.addLabel(
                attributes.find(item => {
                    if (item.type === "id") {
                        return item.value
                    }
                }),
                label
            ))
        }

        attributes.forEach(({ type, value }) => {
            textArea.setAttribute(type, value)
        })

        this.htmlElement.appendChild(textArea)
        return textArea
    }

    handleSubmit(e) {
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
}
import Project from "../Project/Project"
import Form from "./Form"

export default class ProjectForm extends Form {

    constructor() {
        super()
        this.inputTitle = this.addInput([{ type: "type", value: "text" }, { type: "id", value: "title" },], "Title")
        this.inputDescription = this.addInput([{ type: "type", value: "text" }, { type: "id", value: "description" },], "Description")
        this.submitButtonHandler = this.handleSubmit
    }

    handleSubmit(e) {
        e.preventDefault()

        if (!this.validateForm()) {
            return
        }

        const project = new Project(this.inputTitle.value, this.inputDescription.value)
        project.save()
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
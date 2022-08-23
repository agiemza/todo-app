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
        const project = new Project(this.inputTitle.value, this.inputDescription.value)
        project.save()
    }

}
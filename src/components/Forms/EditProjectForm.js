import NewProjectForm from "./NewProjectForm"
import Project from '../Project/Project'
import LocalStorage from "../LocalStorage"

export default class EditProjectForm extends NewProjectForm {
    constructor(projectId) {
        super()
        this.project = LocalStorage.getProject(projectId)
    }

    updateDefaultInputValues() {
        this.inputTitle.value = this.project.title
        this.inputDescription.value = this.project.description
    }

    cancelHandler() {
        Project.display(this.project.id)
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

    render() {
        this.htmlElement.appendChild(this.inputTitle)
        this.htmlElement.appendChild(this.createCancel())
        this.htmlElement.appendChild(this.createSubmit("Save"))
        this.htmlElement.appendChild(this.inputDescription)
        this.htmlElement.appendChild(this.errorBox)
        this.htmlElement.classList.add("project-form", "edit-project-form")
        this.updateDefaultInputValues()
        return this.htmlElement
    }

}
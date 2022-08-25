import Project from "../Project/Project"
import Task from "../Project/Task"
import Form from "./Form"

export default class TaskEditForm extends Form {
    constructor(task, project) {
        super()
        this.task = task
        this.project = project
        this.submitButtonText = "Save"
        this.submitButtonHandler = this.handleSave
        this.submitButton = this.createSubmit()
        this.cancelButton = this.createCancelButton()
        this.inputContent
        this.inputDueDate
        this.content = task.content
        this.dueDate = task.dueDate
    }

    createCancelButton() {
        const cancelButton = document.createElement("button")
        cancelButton.classList.add("cancel-button")
        cancelButton.textContent = "x"
        cancelButton.addEventListener("click", () => this.handleCancel())
        return cancelButton
    }

    handleCancel() {
        Project.display(this.project.id)
    }

    handleSave() {
        this.task.content = this.inputContent.value
        this.task.dueDate = this.inputDueDate.value
        Task.delete(this.project, this.task)
        Task.add(this.task, this.project.id)
        Project.display(this.project.id)
    }

    render() {
        this.inputContent = this.addInput(
            [
                { type: "id", value: "edit-content" },
                { type: "type", value: "text" },
                { type: "value", value: this.content }
            ])

        this.inputDueDate = this.addInput(
            [
                { type: "id", value: "edit-content" },
                { type: "type", value: "date" },
                { type: "value", value: this.dueDate }
            ])

        return [
            this.cancelButton,
            this.inputContent,
            this.inputDueDate,
            this.submitButton,
        ]
    }
}
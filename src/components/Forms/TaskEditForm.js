import Project from "../Project/Project"
import Task from "../Project/Task"
import Form from "./Form"

export default class TaskEditForm extends Form {
    constructor(task, project) {
        super()
        this.task = task
        this.project = project
        this.content = task.content
        this.dueDate = task.dueDate
    }

    cancelHandler() {
        Project.display(this.project.id)
    }

    submitButtonHandler() {
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
            this.createCancel(),
            this.inputContent,
            this.inputDueDate,
            this.createSubmit("Save"),
        ]
    }
}
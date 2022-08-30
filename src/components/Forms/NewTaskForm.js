import Project from "../Project/Project"
import Task from "../Project/Task"
import Main from "../UI/Main"
import Form from "./Form"

export default class NewTaskForm extends Form {
    constructor(projectId) {
        super()
        this.projectId = projectId
        this.inputContent = this.addInput([{ type: "type", value: "text" }, { type: "id", value: "taskContent" }, { type: "placeholder", value: "Task" }])
        this.inputDueDate = this.addInput([{ type: "type", value: "date" }, { type: "id", value: "taskDueDate" }])
        this.errorBox = this.createErrorBox()
    }

    submitButtonHandler(e) {
        e.preventDefault()

        if (!this.validateForm()) {
            return
        }

        const task = new Task(this.inputContent.value, this.inputDueDate.value)
        Task.add(task, this.projectId)
        Project.display(this.projectId)
    }

    cancelHandler() {
        console.log("Cancel")
    }

    validateForm() {
        this.errorBox.textContent = ""
        const contentPatern = /^.{1,}$/g
        if (!contentPatern.test(this.inputContent.value.trim())) {
            this.errorBox.textContent = "Task must contain at least 1 character"
            return false
        }
        return true
    }

    static open(id) {
        const taskForm = new NewTaskForm(id)
        Main.changeContent(taskForm.render())
    }

    render() {
        this.htmlElement.appendChild(this.inputContent)
        this.htmlElement.appendChild(this.inputDueDate)
        this.htmlElement.appendChild(this.createCancel())
        this.htmlElement.appendChild(this.createSubmit("add"))
        this.htmlElement.appendChild(this.errorBox)

        return this.htmlElement
    }
}
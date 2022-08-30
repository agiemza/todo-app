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

    static open(projectId) {
        const taskForm = new NewTaskForm(projectId)
        const container = document.querySelector(".tasks-list")
        container.prepend(taskForm.render())
        taskForm.inputContent.focus()
    }

    submitButtonHandler(e) {
        e.preventDefault()
        if (!this.validateForm()) {
            return
        }
        if (!this.inputDueDate.value) {
            this.inputDueDate.value = new Date().toISOString().split("T")[0]
        }
        const task = new Task(this.inputContent.value, this.inputDueDate.value)
        Task.add(task, this.projectId)
        Project.display(this.projectId)
    }

    cancelHandler() {
        Project.display(this.projectId)
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

    render() {
        this.htmlElement.appendChild(this.inputContent)
        this.htmlElement.appendChild(this.inputDueDate)
        this.htmlElement.appendChild(this.createCancel())
        this.htmlElement.appendChild(this.createSubmit("add"))
        this.htmlElement.appendChild(this.errorBox)
        this.htmlElement.classList.add("task-container", "new-task")
        return this.htmlElement
    }
}
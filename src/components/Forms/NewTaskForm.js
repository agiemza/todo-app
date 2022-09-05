import Task from "../Tasks/Task"
import Form from "./Form"
import SaveIcon from "../Icons/save"
import TasksList from "../Tasks/TasksList"
import Calendar from "../Calendar/Calendar"
import Main from "../UI/Main"

export default class NewTaskForm extends Form {
    constructor(date) {
        super()
        this.date = date
        this.inputContent = this.addTextArea([
            { type: "id", value: "task-content" },
            { type: "placeholder", value: "Input new task here" }
        ])
        this.inputDueDate = this.addInput([
            { type: "type", value: "date" },
            { type: "id", value: "task-due-date" },
            { type: "value", value: this.date }
        ])
        this.inputFolder = this.createFolderSelect()
        this.errorBox = this.createErrorBox()
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
        Task.add(task, this.inputFolder.selectedOptions[0].getAttribute("data-folder-id"))
        if (task.dueDate === this.date) {
            TasksList.update(this.date)
        }
        Calendar.createWidget(new Date(this.date))
        Main.closeSlideContainer()
    }

    render() {
        this.htmlElement.appendChild(this.addLabel("task-folder", "Folder:"))
        this.htmlElement.appendChild(this.inputFolder)
        this.htmlElement.appendChild(this.addLabel("task-due-date", "Due date:"))
        this.htmlElement.appendChild(this.inputDueDate)
        this.htmlElement.appendChild(this.inputContent)
        this.htmlElement.appendChild(this.errorBox)
        this.htmlElement.appendChild(this.createSubmit(SaveIcon))
        this.htmlElement.classList.add("task-form")
        return this.htmlElement
    }
}
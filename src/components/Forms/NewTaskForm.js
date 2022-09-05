import Task from "../Project/Task"
import Form from "./Form"
import SaveIcon from "../Icons/save"
import TasksList from "../Tabs/Subcomponents/TasksList"
import Calendar from "../Calendar/Calendar"

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
        this.inputCategory = this.createCategorySelect()
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
        Task.add(task, this.inputCategory.selectedOptions[0].getAttribute("data-category-id"))
        if (task.dueDate === this.date) {
            TasksList.update(this.date)
        }
        Calendar.createWidget(new Date(this.date))
    }

    render() {
        this.htmlElement.appendChild(this.addLabel("task-category", "Category:"))
        this.htmlElement.appendChild(this.inputCategory)
        this.htmlElement.appendChild(this.addLabel("task-due-date", "Due date:"))
        this.htmlElement.appendChild(this.inputDueDate)
        this.htmlElement.appendChild(this.inputContent)
        this.htmlElement.appendChild(this.errorBox)
        this.htmlElement.appendChild(this.createSubmit(SaveIcon))
        this.htmlElement.classList.add("task-form")
        return this.htmlElement
    }
}
import SaveIcon from "../Icons/save"
import Task from "../Project/Task"
import Form from "./Form"
import TasksList from "../Tabs/Subcomponents/TasksList"
import Calendar from "../Calendar/Calendar"

export default class EditTaskForm extends Form {
    constructor(taskId) {
        super()
        this.object = { ...Task.get(taskId) }
        this.category = this.object.category
        this.content = this.object.task.content
        this.dueDate = this.object.task.dueDate
        this.inputContent = this.addTextArea([
            { type: "id", value: "task-content" }],
            this.content)
        this.inputDueDate = this.addInput([
            { type: "id", value: "edit-content" },
            { type: "type", value: "due-date" },
            { type: "value", value: this.dueDate }
        ])
        this.inputCategory = this.createCategorySelect()
    }

    submitButtonHandler(e) {
        e.preventDefault()
        if (!this.validateForm()) {
            return
        }
        if (!this.inputDueDate.value) {
            this.inputDueDate.value = new Date().toISOString().split("T")[0]
        }
        this.content = this.inputContent.value
        this.dueDate = this.inputDueDate.value

        const task = new Task(this.content, this.dueDate)
        Task.delete(this.category, this.object.task)
        Task.add(task, this.inputCategory.selectedOptions[0].getAttribute("data-category-id"))

        Calendar.createWidget(new Date(this.dueDate))
        TasksList.update(this.dueDate)
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
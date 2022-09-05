import SaveIcon from "../Icons/save"
import RemoveIcon from "../Icons/remove"
import Task from "../Project/Task"
import Form from "./Form"
import TasksList from "../Tabs/Subcomponents/TasksList"
import Calendar from "../Calendar/Calendar"
import Main from "../UI/Main"

export default class EditTaskForm extends Form {
    constructor(taskId) {
        super()
        this.object = { ...Task.get(taskId) }
        this.category = this.object.category
        this.content = this.object.task.content
        this.dueDate = this.object.task.dueDate
        this.inputContent = this.addTextArea([
            { type: "id", value: "task-content" }],
            this.object.task.content)
        this.inputDueDate = this.addInput([
            { type: "id", value: "edit-content" },
            { type: "type", value: "date" },
            { type: "value", value: this.object.task.dueDate }
        ])
        this.inputCategory = this.createCategorySelect()
    }

    createRemoveTaskButton() {
        const removeButton = document.createElement("button")
        removeButton.classList.add("task-remove-button")
        removeButton.innerHTML = RemoveIcon
        removeButton.addEventListener("click", () => Task.remove(this.object.category, this.object.task))

        const output = document.querySelector(".slide-container")
        output.appendChild(removeButton)
    }

    submitButtonHandler(e) {
        e.preventDefault()
        if (!this.validateForm()) {
            return
        }
        if (!this.inputDueDate.value) {
            this.inputDueDate.value = new Date().toISOString().split("T")[0]
        }

        this.object.task.content = this.inputContent.value
        this.object.task.dueDate = this.inputDueDate.value

        Task.delete(this.category, this.object.task)
        Task.add(this.object.task, this.inputCategory.selectedOptions[0].getAttribute("data-category-id"))

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
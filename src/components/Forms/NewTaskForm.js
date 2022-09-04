import LocalStorage from "../LocalStorage"
import Task from "../Project/Task"
import Form from "./Form"
import SendIcon from "../Icons/send"
import TasksList from "../Tabs/Subcomponents/TasksList"
import Calendar from "../Calendar/Calendar"

export default class NewTaskForm extends Form {
    constructor(date) {
        super()
        this.date = date
        this.inputContent = this.addTextArea([
            { type: "id", value: "new-task-content" },
            { type: "placeholder", value: "Input new task here" },
            { type: "minlenght", value: "1" }
        ])
        this.inputDueDate = this.addInput([
            { type: "type", value: "date" },
            { type: "id", value: "new-task-due-date" },
            { type: "value", value: this.date }
        ])
        this.inputCategory = this.createCategorySelect()
        this.errorBox = this.createErrorBox()
    }

    // static open(projectId) {
    //     const taskForm = new NewTaskForm(projectId)
    //     const container = document.querySelector(".tasks-list")
    //     container.prepend(taskForm.render())
    //     taskForm.inputContent.focus()
    // }

    createCategorySelect() {
        const category = document.createElement("select")
        category.classList.add("new-task-category")

        LocalStorage.get().forEach(item => {
            const option = document.createElement("option")
            option.textContent = item.title
            option.setAttribute("data-category-id", item.id)
            category.appendChild(option)
        })

        return category
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
        this.htmlElement.appendChild(this.addLabel("new-task-category", "Category:"))
        this.htmlElement.appendChild(this.inputCategory)
        this.htmlElement.appendChild(this.addLabel("new-task-due-date", "Due date:"))
        this.htmlElement.appendChild(this.inputDueDate)
        this.htmlElement.appendChild(this.inputContent)
        this.htmlElement.appendChild(this.errorBox)
        this.htmlElement.appendChild(this.createSubmit(SendIcon))
        this.htmlElement.classList.add("new-task-form")
        return this.htmlElement
    }
}
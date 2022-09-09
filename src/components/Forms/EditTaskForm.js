import Task from "../Tasks/Task"
import Form from "./Form"
import Main from "../UI/Main"
import CalendarTab from "../Tabs/Calendar/CalendarTab"
import FoldersTab from "../Tabs/Folders/FoldersTab"
import TasksList from "../Tasks/TasksList"

export default class EditTaskForm extends Form {
    constructor(taskId) {
        super()
        this.object = { ...Task.get(taskId) }
        this.folder = this.object.folder
        this.name = this.object.task.name
        this.dueDate = this.object.task.dueDate
        this.inputName = this.addTextArea([
            { type: "id", value: "task-name" }],
            this.object.task.name)
        this.inputDueDate = this.addInput([
            { type: "id", value: "edit-name" },
            { type: "type", value: "date" },
            { type: "value", value: this.object.task.dueDate }
        ])
        this.inputFolder = this.createFolderSelect()
    }

    createRemoveTaskButton() {
        const removeButton = this.createRemoveButton(() => {
            Task.remove(this.folder, this.object.task)
            CalendarTab.refresh(this.dueDate)
            FoldersTab.refresh(this.folder.id)
            TasksList.update(this.dueDate)
            Main.closeSlideContainer()
        })
        removeButton.classList.add("task-remove-button")
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

        this.object.task.name = this.inputName.value
        this.object.task.dueDate = this.inputDueDate.value

        Task.remove(this.folder, this.object.task)
        Task.add(this.object.task, this.inputFolder.selectedOptions[0].getAttribute("data-folder-id"))

        CalendarTab.refresh(this.dueDate)
        FoldersTab.refresh(this.folder.id)
        TasksList.update(this.dueDate)
        Main.closeSlideContainer()
    }

    render() {
        this.htmlElement.appendChild(this.addLabel("task-folder", "Folder:"))
        this.htmlElement.appendChild(this.inputFolder)
        this.htmlElement.appendChild(this.addLabel("task-due-date", "Due date:"))
        this.htmlElement.appendChild(this.inputDueDate)
        this.htmlElement.appendChild(this.inputName)
        this.htmlElement.appendChild(this.errorBox)
        this.htmlElement.appendChild(this.createSubmit())
        this.htmlElement.classList.add("task-form")
        return this.htmlElement
    }
}
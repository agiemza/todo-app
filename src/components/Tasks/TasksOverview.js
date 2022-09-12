import Task from "./Task"
import ConvertDate from "../Utils/ConvertDate"
import Folder from "../Folders/Folder"
import StarIcon from "../Icons/star"
import CalendarIcon from "../Icons/calendar"
import PriorityIcon from "../Icons/priority"

export default class TasksOverview {

    static createWidget() {
        const tasksOverviewContainer = document.createElement("section")
        tasksOverviewContainer.classList.add("tasks-overview-container")

        tasksOverviewContainer.appendChild(this.createTasksOverviewLabel())

        tasksOverviewContainer.appendChild(this.createTaskCounterWidget(Task.getAllPendingTasks().length, "Pending tasks"))
        tasksOverviewContainer.appendChild(this.createTaskCounterWidget(Task.getAllCompletedTasks().length, "Completed tasks"))

        tasksOverviewContainer.appendChild(this.createImportantTasksWidget())
        tasksOverviewContainer.appendChild(this.createUpcomingTasksWidget(0))
        tasksOverviewContainer.appendChild(this.createUpcomingTasksWidget(7))
        tasksOverviewContainer.appendChild(this.createMissedTasksWidget())


        return tasksOverviewContainer
    }

    static createTasksOverviewLabel() {
        const tasksOverviewLabel = document.createElement("div")
        tasksOverviewLabel.classList.add("home-section-label")
        tasksOverviewLabel.textContent = "Tasks overview"
        return tasksOverviewLabel
    }

    static createTaskCounterWidget(number, label) {
        const taskCounterWidget = document.createElement("div")
        taskCounterWidget.classList.add("task-widget", "task-counter-widget")

        const taskCounter = document.createElement("div")
        taskCounter.classList.add("task-counter")
        taskCounter.textContent = number
        taskCounterWidget.appendChild(taskCounter)

        const taskLabel = document.createElement("div")
        taskLabel.classList.add("home-widget-label")
        taskLabel.textContent = label
        taskCounterWidget.appendChild(taskLabel)

        return taskCounterWidget
    }

    static createUpcomingTasksWidget(numberOfDays) {
        const container = this.createListWidget()
        const date = new Date()

        if (numberOfDays === 0) {
            container.childNodes[0].textContent = "Tasks for today"

            const tasks = Task.findTasksForDate(ConvertDate.toYYYYMMDD(date))
            tasks.forEach(({ task, folder }) => {
                if (!task.checked) {
                    container.childNodes[1].appendChild(this.createListWidgetListItem(task, folder))
                }
            })

            return container
        }

        if (numberOfDays !== 0) {
            container.childNodes[0].textContent = `Tasks for next ${numberOfDays > 1 ? `${numberOfDays} days` : "day"}`

            for (let i = 0; i < numberOfDays; i++) {
                date.setDate(date.getDate() + 1)
                const tasks = Task.findTasksForDate(ConvertDate.toYYYYMMDD(date))
                tasks.forEach(({ task, folder }) => {
                    if (!task.checked) {
                        container.childNodes[1].appendChild(this.createListWidgetListItem(task, folder))
                    }
                })
            }

            return container
        }
    }

    static createImportantTasksWidget() {
        const container = this.createListWidget()
        const date = new Date()
        container.childNodes[0].textContent = "Upcoming important tasks"

        for (let i = 0; i < 3; i++) {
            const tasks = Task.findTasksForDate(ConvertDate.toYYYYMMDD(date))
            tasks.forEach(({ task, folder }) => {
                if (task.important && !task.checked) {
                    container.childNodes[1].appendChild(this.createListWidgetListItem(task, folder, StarIcon))
                }
            })
            date.setDate(date.getDate() + 1)
        }

        return container
    }

    static createMissedTasksWidget() {
        const container = this.createListWidget()
        container.childNodes[0].textContent = "Missed tasks"

        const tasks = Task.getAllPendingTasks()
        tasks.forEach(item => {
            if (!item.checked && new Date(item.dueDate) < new Date()) {
                const { task, folder } = Task.get(item.id)
                container.childNodes[1].appendChild(this.createListWidgetListItem(task, folder, PriorityIcon))
            }
        })

        return container
    }

    static createListWidget() {
        const container = document.createElement("div")
        container.classList.add("task-widget", "upcoming-tasks-wigdet")

        const label = document.createElement("div")
        label.classList.add("home-widget-label", "upcoming-tasks-label")
        container.appendChild(label)

        const list = document.createElement("ul")
        container.appendChild(list)

        return container
    }

    static createListWidgetListItem(task, folder, icon) {
        const listItem = document.createElement("li")
        listItem.classList.add("upcoming-task")

        const calendarIcon = document.createElement("div")
        calendarIcon.innerHTML = icon || CalendarIcon
        calendarIcon.classList.add("upcoming-task-icon")
        listItem.appendChild(calendarIcon)

        const name = document.createElement("div")
        name.textContent = task.name
        name.classList.add("upcoming-task-name")
        name.addEventListener("click", () => Folder.show(folder.id))
        listItem.appendChild(name)

        const dueDate = document.createElement("div")
        dueDate.textContent = ConvertDate.YYYYMMDDtoDDMM(task.dueDate)
        dueDate.classList.add("upcoming-task-date")
        listItem.appendChild(dueDate)

        return listItem
    }
}
import { nanoid } from "nanoid"
import TaskForm from "../Forms/TaskForm"
import LocalStorage from "../LocalStorage"
import Main from "../UI/Main"
import Navbar from "../UI/Navbar"
import Task from './Task'

export default class Project {

    constructor(title, description) {
        this.id = nanoid()
        this.title = title
        this.description = description
        this.tasks = []
    }

    save() {
        Navbar.addProjectToList(this)
        LocalStorage.add(this)
    }

    static display(projectId) {
        const project = LocalStorage.getProject(projectId)
        const htmlElement = this.createHtmlElement(project)
        Main.changeContent(htmlElement)
    }

    static createHtmlElement(project) {
        const projectContainer = document.createElement("div")
        projectContainer.classList.add("project-container")

        projectContainer.appendChild(this.createDetailsContainer(project.title, project.description, project.id))
        projectContainer.appendChild(Task.createTasksContainer(project))

        return projectContainer
    }

    static createDetailsContainer(title, description, id) {
        const titleContainer = document.createElement("h2")
        titleContainer.textContent = title

        const descriptionContainer = document.createElement("p")
        descriptionContainer.textContent = description

        const addTaskButton = document.createElement("button")
        addTaskButton.classList.add("task-add-button")
        addTaskButton.textContent = "+"
        addTaskButton.addEventListener("click", () => TaskForm.open(id))

        const detailsContainer = document.createElement("div")
        detailsContainer.appendChild(titleContainer)
        detailsContainer.appendChild(descriptionContainer)
        detailsContainer.appendChild(addTaskButton)

        return detailsContainer
    }

}
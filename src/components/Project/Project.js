import { nanoid } from "nanoid"
import NewTaskForm from "../Forms/NewTaskForm"
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

    static delete(projectId) {
        const projects = LocalStorage.get().filter(item => item.id !== projectId)
        LocalStorage.set(projects)
        if (LocalStorage.isEmpty()) {
            this.displayNoProjectMessage()
        }
        if (!LocalStorage.isEmpty()) {
            Project.display(LocalStorage.get()[0].id)
        }
        Navbar.upadateProjectList()
    }

    static display(projectId) {
        const project = LocalStorage.getProject(projectId)
        const htmlElement = this.createHtmlElement(project)
        Main.changeContent(htmlElement)
    }

    static displayNoProjectMessage() {
        const message = document.createElement("div")
        message.classList.add("empty-no-projects-message")
        message.textContent = "You have no projects"
        Main.changeContent(message)
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

        const deleteProjectButton = document.createElement("button")
        deleteProjectButton.classList.add("project-delete-button")
        deleteProjectButton.textContent = "delete project"
        deleteProjectButton.addEventListener("click", () => this.delete(id))

        const detailsContainer = document.createElement("div")
        detailsContainer.appendChild(titleContainer)
        detailsContainer.appendChild(descriptionContainer)
        detailsContainer.appendChild(deleteProjectButton)

        return detailsContainer
    }
}
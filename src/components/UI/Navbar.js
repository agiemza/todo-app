import HomeIcon from "../../assets/home-icon.svg"
import TodayIcon from "../../assets/today-icon.svg"
import WeekIcon from "../../assets/week-icon.svg"
import MonthIcon from "../../assets/month-icon.svg"
import Main from "./Main"
import Header from "./Header"
import Project from "../Project/Project"
import NewProjectForm from "../Forms/NewProjectForm"
import LocalStorage from "../LocalStorage"
import Home from "../Home"

export default class Navbar {
    static htmlElement = this.createNavElement()
    static projectsList = this.createPojectsList()

    static render(output) {
        this.htmlElement.appendChild(this.createTabsSection())
        this.htmlElement.appendChild(this.createProjectsSection())
        output.appendChild(this.htmlElement)
    }

    static changeVisibility() {
        const menuButton = Header.menuButton
        menuButton.classList.toggle("menu-button-open")
        this.htmlElement.classList.toggle("nav-open")
    }

    static displayProjects() {
        const projects = LocalStorage.get().reverse()
        projects.forEach(project => {
            this.addProjectToList({ title: project.title, id: project.id })
        })
    }

    static upadateProjectList() {
        this.projectsList.innerHTML = ""
        this.displayProjects()
    }

    static createNavElement() {
        const nav = document.createElement("nav")
        return nav
    }

    static createTabsSection() {
        const section = document.createElement("section")
        const tabs = [
            {
                name: "Home",
                icon: HomeIcon,
                handler: () => Home.open()
            },
            {
                name: "Today",
                icon: TodayIcon
            },
            {
                name: "This week",
                icon: WeekIcon
            },
            {
                name: "This month",
                icon: MonthIcon
            }
        ]
        tabs.forEach(tab => {
            const element = document.createElement("button")
            element.classList.add("nav-fixed-button")
            if (tab.icon) {
                const icon = new Image()
                icon.src = tab.icon
                element.appendChild(icon)
            }
            if (tab.handler) {
                element.addEventListener("click", () => tab.handler())
            }
            const text = document.createElement("div")
            text.textContent = tab.name
            element.appendChild(text)
            section.appendChild(element)
        })
        return section
    }

    static createProjectsSection() {
        const section = document.createElement("section")
        section.appendChild(this.createProjectsSectionHeading())
        section.appendChild(this.projectsList)
        this.displayProjects()
        return section
    }

    static createProjectsSectionHeading() {
        const headingContainer = document.createElement("div")
        headingContainer.classList.add("nav-projects-heading")
        const heading = document.createElement("h2")
        heading.textContent = "Projects"
        headingContainer.appendChild(heading)

        const newProjectButton = document.createElement("button")
        newProjectButton.classList.add("nav-projects-new-button")
        newProjectButton.textContent = "+"
        newProjectButton.addEventListener("click", () => this.handleNewProjectClick())
        headingContainer.appendChild(newProjectButton)

        return headingContainer
    }

    static createPojectsList() {
        const list = document.createElement("ul")
        list.classList.add("nav-projects-list")
        return list
    }

    static handleNewProjectClick() {
        const form = new NewProjectForm
        const element = form.render()
        Main.changeContent(element)
        form.inputTitle.focus()
        this.changeVisibility()
    }

    static handleProjectListItemClick(projectId) {
        Project.display(projectId)
        this.changeVisibility()
    }

    static addProjectToList(project) {
        const item = this.createProjectListItem(project)
        this.projectsList.prepend(item)
    }

    static createProjectListItem(project) {
        const projectTitile = document.createElement("div")
        projectTitile.textContent = project.title
        projectTitile.addEventListener("click", () => this.handleProjectListItemClick(project.id))

        const deleteButton = document.createElement("button")
        deleteButton.textContent = "delete"
        deleteButton.addEventListener("click", () => Project.delete(project.id))

        const listItem = document.createElement("li")
        listItem.appendChild(projectTitile)
        listItem.appendChild(deleteButton)

        return listItem
    }
}
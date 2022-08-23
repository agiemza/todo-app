import HomeIcon from "../../assets/home-icon.svg"
import TodayIcon from "../../assets/today-icon.svg"
import WeekIcon from "../../assets/week-icon.svg"
import MonthIcon from "../../assets/month-icon.svg"
import Main from "./Main"

export default class Navbar {

    static render(output) {
        const nav = document.createElement("nav")
        nav.appendChild(this.createTabsSection())
        nav.appendChild(this.createProjectsSection())
        output.appendChild(nav)
    }

    static createTabsSection() {
        const section = document.createElement("section")
        const tabs = [
            {
                name: "Home",
                icon: HomeIcon
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
            const text = document.createElement("div")
            text.textContent = tab.name
            element.appendChild(text)
            section.appendChild(element)
        })
        return section
    }

    static createProjectsSection() {
        const section = document.createElement("section")
        const heading = document.createElement("h2")
        heading.textContent = "Projects"
        const list = document.createElement("ul")
        list.classList.add("nav-projects-list")
        section.appendChild(heading)
        section.appendChild(list)
        // dummy data
        this.addProjectToList({title: "myProject", id: 1}, list)
        this.addProjectToList({title: "myProject", id: 2}, list)
        this.addProjectToList({title: "myProject", id: 3}, list)
        this.addProjectToList({title: "myProject", id: 4}, list)
        this.addProjectToList({title: "myProject", id: 5}, list)
        this.addProjectToList({title: "myProject", id: 6}, list)
        // ----
        return section
    }

    static addProjectToList(project, output) {
        const list =  output || document.querySelector(".nav-projects-list")
        const button = document.createElement("button")
        button.textContent = project.title
        button.addEventListener("click", () => this.handleProjectClick(project.id))
        const listItem = document.createElement("li")
        listItem.appendChild(button)
        list.appendChild(listItem)
    }

    static handleProjectClick(id) {
        console.log(id)
    }

}
export default class Navbar {

    static render(output) {
        const nav = document.createElement("nav")
        nav.appendChild(this.createTabsSection())
        nav.appendChild(this.createProjectsSection())
        output.appendChild(nav)
    }

    static createTabsSection() {
        const section = document.createElement("section")
        const tabs = ["Home", "Today", "This week", "This month"]
        tabs.forEach(tab => {
            const element = document.createElement("button")
            element.classList.add("nav-fixed-button")
            element.textContent = tab
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
        return section
    }

}
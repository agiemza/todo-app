import HomeIcon from "../../assets/home-icon.png"
import CalendarIcon from "../../assets/calendar-icon.png"
import ListIcon from "../../assets/tasks-icon.png"

export default class Navbar {
    static render(output) {
        const nav = document.createElement("nav")
        nav.appendChild(this.createControlsPanel())
        output.appendChild(nav)
    }

    static createControlsPanel() {
        const wrapper = document.createElement("div")
        wrapper.classList.add("nav-buttons-wrapper")

        const buttonsArray = [
            {
                icon: HomeIcon,
                text: "Home",
                event: () => console.log("home"),
            },
            {
                icon: CalendarIcon,
                text: "Calendar",
                event: () => console.log("cal"),
            },
            {
                icon: ListIcon,
                text: "Projects",
                event: () => console.log("tasks"),
            },
        ]

        buttonsArray.forEach(item => {
            wrapper.appendChild(this.createButton(item))
        })

        return wrapper
    }

    static createButton({ icon, text, event }) {
        const button = document.createElement("button")
        button.classList.add("nav-button")
        button.addEventListener("click", () => event())

        const iconContainer = document.createElement("div")
        iconContainer.classList.add("nav-button-icon-container")
        iconContainer.appendChild(this.createIcon(icon))
        button.appendChild(iconContainer)

        const textContainer = document.createElement("div")
        textContainer.classList.add("nav-button-text-container")
        textContainer.textContent = text
        button.appendChild(textContainer)

        return button
    }

    static createIcon(icon) {
        const image = new Image()
        image.src = icon
        return image
    }
}
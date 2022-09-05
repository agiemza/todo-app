import HomeIcon from "../Icons/home"
import CalendarIcon from "../Icons/calendar"
import CategoryIcon from "../Icons/category"

export default class Navbar {

    static nav = document.createElement("nav")

    static render(output) {
        this.nav.appendChild(this.createControlsPanel())
        output.appendChild(this.nav)
    }

    static createControlsPanel() {
        const wrapper = document.createElement("div")
        wrapper.classList.add("nav-buttons-wrapper")

        const buttonsArray = [
            {
                icon: HomeIcon,
                text: "home",
            },
            {
                icon: CalendarIcon,
                text: "calendar",
            },
            {
                icon: CategoryIcon,
                text: "Categories",
            },
        ]

        buttonsArray.forEach(item => {
            wrapper.appendChild(this.createButton(item))
        })

        return wrapper
    }

    static createButton({ icon, text }) {
        const button = document.createElement("button")
        button.classList.add("nav-button")
        button.setAttribute("id", `nav-button-${text}`)
        button.addEventListener("click", () => this.handleButtonClick(button))

        const iconContainer = document.createElement("div")
        iconContainer.classList.add("nav-button-icon-container")
        iconContainer.innerHTML = icon
        button.appendChild(iconContainer)

        const textContainer = document.createElement("div")
        textContainer.classList.add("nav-button-text-container")
        textContainer.textContent = text
        button.appendChild(textContainer)

        return button
    }

    static removeActiveClassFromButtons() {
        this.nav.querySelectorAll("button").forEach(button => button.classList.remove("nav-button-active"))
    }

    static setButtonActive(id) {
        document.querySelector(`#${id}`).classList.add("nav-button-active")
    }

    static handleButtonClick(button) {
        this.removeActiveClassFromButtons()
        this.setButtonActive(button.id)
    }
}
import HomeIcon from "../Icons/home"
import CalendarIcon from "../Icons/calendar"
import FolderIcon from "../Icons/folder"
import Main from "./Main"
import HomeTab from "../Tabs/HomeTab.js/HomeTab"
import CalendarTab from "../Tabs/Calendar/CalendarTab"
import FoldersTab from "../Tabs/Folders/FoldersTab"

export default class Nav {

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
                clickHandler: () => Main.changeContent(HomeTab.render())
            },
            {
                icon: CalendarIcon,
                text: "calendar",
                clickHandler: () => Main.changeContent(CalendarTab.render())
            },
            {
                icon: FolderIcon,
                text: "folders",
                clickHandler: () => Main.changeContent(FoldersTab.render())
            },
        ]

        buttonsArray.forEach(item => {
            wrapper.appendChild(this.createButton(item))
        })

        return wrapper
    }

    static createButton({ icon, text, clickHandler }) {
        const button = document.createElement("button")
        button.classList.add("nav-button")
        button.setAttribute("id", `nav-button-${text}`)
        button.addEventListener("click", () => this.handleButtonClick(button, clickHandler))

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
        this.removeActiveClassFromButtons()
        document.querySelector(`#${id}`).classList.add("nav-button-active")
    }

    static handleButtonClick(button, clickHandler) {
        this.setButtonActive(button.id)
        clickHandler()
    }
}
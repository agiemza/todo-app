import Navbar from "./Navbar"

export default class Header {
    static menuButton = this.createMenuButton()

    static render(output) {
        const header = document.createElement("header")
        header.appendChild(this.menuButton)
        header.appendChild(this.createLogo())
        output.appendChild(header)
    }

    static createLogo() {
        const logo = document.createElement("div")
        logo.classList.add("logo")
        logo.textContent = "TODO APP"
        return logo
    }

    static createMenuButton() {
        const button = document.createElement("button")
        button.classList.add("menu-button", "menu-button-open")
        button.setAttribute("data-menu-open", "false")
        button.addEventListener("click", () => Navbar.changeVisibility(button))
        return button
    }
}
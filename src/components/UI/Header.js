export default class Header {

    static render(output) {
        const header = document.createElement("header")
        header.appendChild(this.createMenuButton())
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
        button.addEventListener("click", () => this.handleMenuClick(button))
        return button
    }

    static handleMenuClick(button) {
        const nav = document.querySelector("nav")
        button.classList.toggle("menu-button-open")
        nav.classList.toggle("nav-open")
    }

}
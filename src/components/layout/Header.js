export default class Header {

    static render(output) {
        const header = document.createElement("header")
        header.appendChild(this.createLogo())
        output.appendChild(header)
    }

    static createLogo() {
        const logo = document.createElement("div")
        logo.classList.add("logo")
        logo.textContent = "TODO APP"
        return logo
    }

}
import Nav from "../../UI/Nav"

export default class HomeTab {
    static htmlElement = this.createHtmlElement()

    static render() {
        Nav.setButtonActive("nav-button-home")
        return this.htmlElement
    }

    static createHtmlElement() {
        const element = document.createElement("div")
        element.classList.add("home-tab-container")
        return element
    }

    static clearHtmlElement() {
        this.htmlElement.innerHTML = ""
    }
}
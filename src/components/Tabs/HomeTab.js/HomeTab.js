import Nav from "../../UI/Nav"
import "./homeTab.css"
import TasksOverview from "../../Tasks/TasksOverview"

export default class HomeTab {
    static htmlElement = this.createHtmlElement()

    static render() {
        this.clearHtmlElement()
        this.htmlElement.appendChild(this.createContent())
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

    static createContent() {
        const homeContentContainer = document.createElement("div")
        homeContentContainer.classList.add("home-content-container")

        homeContentContainer.appendChild(this.createHeader())
        homeContentContainer.appendChild(TasksOverview.createWidget())

        return homeContentContainer
    }

    static createHeader() {
        const welcomeMessage = document.createElement("h1")
        welcomeMessage.textContent = "Hello"

        const header = document.createElement("header")
        header.appendChild(welcomeMessage)

        return header
    }

    // ----
}
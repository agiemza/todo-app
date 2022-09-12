import ArrowBackIcon from '../Icons/arrow-back'

export default class Main {
    constructor() {
        this.main
    }

    static render(output) {
        this.main = document.createElement("main")
        output.appendChild(this.main)
    }

    static changeContent(content) {
        if (this.main.querySelector(".slide-container")) {
            this.closeSlideContainer()
        }
        this.main.innerHTML = ""
        this.main.appendChild(content)
    }

    static showSlideContent(content) {
        const container = this.createSlideContainer()
        container.appendChild(content)
        document.querySelector("main").classList.add("disabled")
        this.main.appendChild(container)
    }

    static createSlideContainer() {
        const slideContainer = document.createElement("div")
        slideContainer.classList.add("slide-container", "slide-in")

        const backButton = document.createElement("button")
        backButton.classList.add("slide-back-button")
        backButton.innerHTML = ArrowBackIcon
        slideContainer.appendChild(backButton)

        backButton.addEventListener("click", () => this.closeSlideContainer())
        document.addEventListener("keydown", this.handleEscClick, true)

        return slideContainer
    }

    static closeSlideContainer() {
        const container = document.querySelector(".slide-container")
        document.removeEventListener("keydown", this.handleEscClick, true)
        container.classList.remove("slide-in")
        container.classList.add("slide-out")
        document.querySelector("main").classList.remove("disabled")
        setTimeout(() => container.remove(), 500)
    }

    static handleEscClick(e) {
        if (e.key === "Escape") {
            Main.closeSlideContainer()
        }
    }
}
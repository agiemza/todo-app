// import ArrowBackIcon from '../Icons/arrow-back'

// export default class Main {
//     constructor() {
//         this.main
//     }

//     static render(output) {
//         this.main = document.createElement("main")
//         output.appendChild(this.main)
//     }

//     static changeContent(content) {
//         if (this.main.querySelector(".slide-container")) {
//             this.closeSlideContainer()
//         }
//         this.main.innerHTML = ""
//         this.main.appendChild(content)
//     }

//     static showSlideContent(content) {
//         const container = this.createSlideContainer()
//         const containerContent = container.querySelector(".slide-container-content")
//         containerContent.appendChild(content)
//         document.querySelector("main").classList.add("disabled")
//         this.main.appendChild(container)
//         this.focusTrap(containerContent)
//     }

//     static createSlideContainer() {
//         const slideContainer = document.createElement("div")
//         slideContainer.classList.add("slide-container", "slide-in")

//         const slideContainerContent = document.createElement("div")
//         slideContainerContent.classList.add("slide-container-content")
//         slideContainer.appendChild(slideContainerContent)

//         const backButton = document.createElement("button")
//         backButton.classList.add("slide-back-button")
//         backButton.innerHTML = ArrowBackIcon
//         slideContainerContent.appendChild(backButton)

//         backButton.addEventListener("click", () => this.closeSlideContainer())
//         document.addEventListener("keydown", this.handleEscClick, true)

//         return slideContainer
//     }

//     static closeSlideContainer() {
//         const container = document.querySelector(".slide-container")
//         document.removeEventListener("keydown", this.handleEscClick, true)
//         container.classList.remove("slide-in")
//         container.classList.add("slide-out")
//         document.querySelector("main").classList.remove("disabled")
//         setTimeout(() => container.remove(), 500)
//     }

//     static handleEscClick(e) {
//         if (e.key === "Escape") {
//             Main.closeSlideContainer()
//         }
//     }

//     static focusTrap(container) {
//         const containerElements = Array.from(container.querySelectorAll("button, input, select, textarea"))
//         const navElements = Array.from(document.querySelector("nav").querySelectorAll("button"))
//         const focusableElements = containerElements.concat(navElements)

//         const firstTextInput = container.querySelectorAll(`input[type="text"], textarea`)[0]
//         let firstElement = focusableElements[0]
//         let lastElement = focusableElements[focusableElements.length - 1]
//         let currentElement = null

//         firstTextInput.focus()
//         currentElement = firstTextInput || firstElement

//         document.addEventListener("focus", e => {
//             e.preventDefault()
//             if (focusableElements.includes(e.target)) {
//                 currentElement = e.target
//             }
//             if(!focusableElements.includes(e.target)) {
//                 if (currentElement === lastElement) {
//                     firstElement.focus()
//                 } else {    
//                     firstElement.focus()
//                 }
//                 currentElement = document.activeElement
//             }
//         }, true)
//     }


// }
import ArrowBackIcon from '../Icons/arrow-back'
import FocusTrap from '../Utils/FocusTrap'

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
        const containerContent = container.querySelector(".slide-container-content")
        containerContent.appendChild(content)
        document.querySelector("main").classList.add("disabled")
        this.main.appendChild(container)
        FocusTrap.activate(containerContent)
    }

    static createSlideContainer() {
        const slideContainer = document.createElement("div")
        slideContainer.classList.add("slide-container", "slide-in")

        const slideContainerContent = document.createElement("div")
        slideContainerContent.classList.add("slide-container-content")
        slideContainer.appendChild(slideContainerContent)

        const backButton = document.createElement("button")
        backButton.classList.add("slide-back-button")
        backButton.innerHTML = ArrowBackIcon
        slideContainerContent.appendChild(backButton)

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
        FocusTrap.deactivate()
    }

    static handleEscClick(e) {
        if (e.key === "Escape") {
            Main.closeSlideContainer()
        }
    }
}
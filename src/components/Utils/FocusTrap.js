export default class FocusTrap {
    static focusableElements = null
    static firstElement = null
    static lastElement = null
    static currentElement = null
    static boundFocusHandler = this.handleTrapFocus.bind(this)

    static activate(container) {
        const containerElements = Array.from(container.querySelectorAll("button, input, select, textarea"))
        const navElements = Array.from(document.querySelector("nav").querySelectorAll("button"))
        this.focusableElements = containerElements.concat(navElements)

        const firstTextInput = container.querySelectorAll(`input[type="text"], textarea`)[0]
        this.firstElement = this.focusableElements[0]
        this.lastElement = this.focusableElements[this.focusableElements.length - 1]

        firstTextInput.focus()
        this.currentElement = firstTextInput || this.firstElement

        document.addEventListener("focus", this.boundFocusHandler, true)
    }

    static deactivate() {
        document.removeEventListener("focus", this.boundFocusHandler, true)
    }

    static handleTrapFocus(e) {
        e.preventDefault()
        if (this.focusableElements.includes(e.target)) {
            this.currentElement = e.target
        }
        if (!this.focusableElements.includes(e.target)) {
            if (this.currentElement === this.lastElement) {
                this.firstElement.focus()
            } else {
                this.firstElement.focus()
            }
            this.currentElement = document.activeElement
        }
    }

}
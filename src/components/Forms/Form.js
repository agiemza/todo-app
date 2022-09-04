export default class Form {
    constructor() {
        this.htmlElement = this.createForm()
        this.errorBox = this.createErrorBox()
    }

    createForm() {
        const form = document.createElement("form")
        return form
    }

    addInput(attributes) {
        const input = document.createElement("input")
        attributes.forEach(({ type, value }) => {
            input.setAttribute(type, value)
        })
        return input
    }

    addLabel(id, text) {
        const label = document.createElement("label")
        label.setAttribute("for", id)
        label.textContent = text
        return label
    }

    addTextArea(attributes) {
        const textArea = document.createElement("textarea")
        attributes.forEach(({ type, value }) => {
            textArea.setAttribute(type, value)
        })
        return textArea
    }

    createErrorBox() {
        const errorBox = document.createElement("div")
        errorBox.classList.add("form-error")

        return errorBox
    }

    createCancel() {
        const button = document.createElement("button")
        button.classList.add("cancel-button")
        button.type = "button"
        button.textContent = "x"
        button.addEventListener("click", e => this.cancelHandler(e))
        return button
    }

    createSubmit(buttonText) {
        const button = document.createElement("button")
        button.classList.add("submit-button", "floating-button")
        button.innerHTML = buttonText
        button.addEventListener("click", e => this.submitButtonHandler(e))
        return button
    }
}
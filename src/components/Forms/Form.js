import LocalStorage from "../LocalStorage"

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

    addTextArea(attributes, text) {
        const textArea = document.createElement("textarea")
        attributes.forEach(({ type, value }) => {
            textArea.setAttribute(type, value)
        })
        if (text) {
            textArea.textContent = text
        }
        return textArea
    }

    createFolderSelect() {
        const folder = document.createElement("select")
        folder.classList.add("task-folder")

        LocalStorage.get().forEach(item => {
            const option = document.createElement("option")
            option.textContent = item.title
            option.setAttribute("data-folder-id", item.id)
            if (this.folder && item.id === this.folder.id) {
                option.setAttribute("selected", "selected")
            }
            if (!this.folder && item.id === "0") {
                option.setAttribute("selected", "selected")
            }
            folder.appendChild(option)
        })

        return folder
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

    validateForm() {
        this.errorBox.textContent = ""
        const contentPatern = /^(.|.\n){1,}$/g
        if (!contentPatern.test(this.inputContent.value.trim())) {
            this.errorBox.textContent = "Task must contain at least 1 character"
            return false
        }
        this.inputContent.value = this.inputContent.value.trim()
        return true
    }
}
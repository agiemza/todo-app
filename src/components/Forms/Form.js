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
        label.for = id
        label.textContent = text
        return label
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
        button.classList.add("submit-button")
        button.textContent = buttonText
        button.addEventListener("click", e => this.submitButtonHandler(e))
        return button
    }
}
// export default class Form {
//     constructor() {
//         this.htmlElement = this.createForm()
//         this.submitButtonText = "Submit"
//         this.submitButton = this.createSubmit()
//         this.errorBox = this.createErrorBox()
//     }

//     createForm() {
//         const form = document.createElement("form")
//         return form
//     }

//     addInput(attributes, label) {
//         const input = document.createElement("input")
//         if (label && attributes.find(item => item.type === "id")) {
//             this.htmlElement.appendChild(this.addLabel(
//                 attributes.find(item => {
//                     if (item.type === "id") {
//                         return item.value
//                     }
//                 }),
//                 label
//             ))
//         }

//         attributes.forEach(({ type, value }) => {
//             input.setAttribute(type, value)
//         })

//         this.htmlElement.appendChild(input)
//         return input
//     }

//     addLabel(id, text) {
//         const label = document.createElement("label")
//         label.for = id
//         label.textContent = text
//         return label
//     }

//     createErrorBox() {
//         const errorBox = document.createElement("div")
//         errorBox.classList.add("form-error")

//         return errorBox
//     }

//     createSubmit() {
//         const button = document.createElement("button")
//         button.textContent = this.submitButtonText
//         button.addEventListener("click", e => this.submitButtonHandler(e))
//         return button
//     }

//     render() {
//         this.htmlElement.appendChild(this.submitButton)
//         this.htmlElement.appendChild(this.errorBox)
//         return this.htmlElement
//     }
// }
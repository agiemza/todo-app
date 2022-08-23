export default class Form {

    constructor() {
        this.htmlElement = this.createForm()
        this.submitButtonText = "Submit"
    }

    createForm() {
        const form = document.createElement("form")
        return form
    }

    addInput(attributes, label) {
        const input = document.createElement("input")
        if (label && attributes.find(item => item.type === "id")) {
            this.htmlElement.appendChild(this.addLabel(
                attributes.find(item => {
                    if (item.type === "id") {
                        return item.value
                    }
                }),
                label
            ))
        }

        attributes.forEach(({ type, value }) => {
            input.setAttribute(type, value)
        })

        this.htmlElement.appendChild(input)
        return input
    }

    addLabel(id, text) {
        const label = document.createElement("label")
        label.for = id
        label.textContent = text
        return label
    }

    addSubmit() {
        const button = document.createElement("button")
        button.textContent = this.submitButtonText
        button.addEventListener("click", e => this.submitButtonHandler(e))
        return button
    }

    render() {
        this.htmlElement.appendChild(this.addSubmit())
        return this.htmlElement
    }

}
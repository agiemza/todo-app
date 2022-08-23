export default class Main {

    constructor() {
        this.main
    }

    static render(output) {
        this.main = document.createElement("main")
        output.appendChild(this.main)
    }

    static changeContent(content) {
        this.main.innerHTML = ""
        this.main.appendChild(content)
    }

    static createProjectElement(id) {
        const projectContent = document.createElement("div")
        projectContent.innerHTML = id
        return projectContent
    }

}
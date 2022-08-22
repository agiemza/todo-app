export default class Main {
    
    constructor() {
        this.main
    }

    static render(output) {
        this.main = document.createElement("main")
        this.main.textContent = "hi"
        output.appendChild(this.main)
    }

    static changeContent(content) {
        this.main.innerHTML = ""
        this.main.appendChild(content)
    }

}
import Icon from "../../assets/github-icon.png"

export default class Footer {

    static render(output) {
        const footer = document.createElement("footer")
        footer.appendChild(this.createGitHubLink())
        output.appendChild(footer)
    }

    static createGitHubLink() {
        const link = document.createElement("a")
        link.href = "https://github.com/agiemza/todo-app"

        const icon = new Image()
        icon.src = Icon
        icon.alt = "GitHub icon"
        link.appendChild(icon)

        const author = document.createElement("p")
        author.textContent = "Arkadiusz Giemza"
        link.appendChild(author)

        return link
    }
    
}
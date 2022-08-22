import Navbar from "./layout/Navbar"

export default class App {
    static root = document.querySelector("#root")

    static load() {
        this.loadLayout()
    }

    static loadLayout() {
        Navbar.render(root)
    }
}
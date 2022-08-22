import Footer from "./layout/Footer"
import Header from "./layout/Header"
import Navbar from "./layout/Navbar"

export default class App {
    static root = document.querySelector("#root")

    static load() {
        this.loadLayout()
    }

    static loadLayout() {
        Header.render(root)
        Navbar.render(root)
        Footer.render(root)
    }
}
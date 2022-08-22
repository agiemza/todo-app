import Footer from "./UI/Footer"
import Header from "./UI/Header"
import Main from "./UI/Main"
import Navbar from "./UI/Navbar"

export default class App {

    static root = document.querySelector("#root")

    static load() {
        this.loadLayout()
    }

    static loadLayout() {
        Header.render(root)
        Navbar.render(root)
        Main.render(root)
        Footer.render(root)
    }

}
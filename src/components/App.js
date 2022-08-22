import Footer from "./layout/Footer"
import Header from "./layout/Header"
import Main from "./layout/Main"
import Navbar from "./layout/Navbar"

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
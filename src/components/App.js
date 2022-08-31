import Footer from "./UI/Footer"
import Header from "./UI/Header"
import Main from "./UI/Main"
import Navbar from "./UI/Navbar"
import Home from './Home'
import Calendar from "./Calendar/Calendar"

export default class App {
    static root = document.querySelector("#root")

    static load() {
        this.loadLayout()
        Main.changeContent(Calendar.render())
    }

    static loadLayout() {
        // Header.render(root)
        Navbar.render(root)
        Main.render(root)
        Footer.render(root)
    }
}
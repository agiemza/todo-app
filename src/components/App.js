import Nav from "./UI/Nav"
import Main from "./UI/Main"
import Navbar from "./UI/Navbar"
import CalendarTab from './Tabs/Calendar/CalendarTab'

export default class App {
    static root = document.querySelector("#root")

    static load() {
        this.loadLayout()
        Main.changeContent(CalendarTab.render())
    }

    static loadLayout() {
        // Navbar.render(root)
        Main.render(root)
        Nav.render(root)
    }
}
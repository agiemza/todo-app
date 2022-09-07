import Nav from "./UI/Nav"
import Main from "./UI/Main"
import Navbar from "./UI/Navbar"
import CalendarTab from './Tabs/Calendar/CalendarTab'
import FoldersTab from "./Tabs/Folders/FoldersTab"
import HomeTab from "./Tabs/HomeTab.js/HomeTab"

export default class App {
    static root = document.querySelector("#root")

    static load() {
        this.loadLayout()
        // Main.changeContent(HomeTab.render())
        // Main.changeContent(CalendarTab.render())
        Main.changeContent(FoldersTab.render())
    }

    static loadLayout() {
        // Navbar.render(root)
        Main.render(root)
        Nav.render(root)
    }
}
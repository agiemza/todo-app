import Nav from "./UI/Nav"
import Main from "./UI/Main"
import HomeTab from "./Tabs/HomeTab.js/HomeTab"

export default class App {
    static root = document.querySelector("#root")

    static load() {
        this.loadLayout()
        Main.changeContent(HomeTab.render())
    }

    static loadLayout() {
        Main.render(root)
        Nav.render(root)
    }
}
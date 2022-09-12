import Nav from "./UI/Nav"
import Main from "./UI/Main"
import HomeTab from "./Tabs/HomeTab.js/HomeTab"
import LocalStorage from "./Utils/LocalStorage"
import Folder from "./Folders/Folder"

export default class App {
    static root = document.querySelector("#root")

    static load() {
        this.loadLayout()
        this.loadLocalStorage()
        Main.changeContent(HomeTab.render())
    }

    static loadLayout() {
        Main.render(root)
        Nav.render(root)
    }

    static loadLocalStorage() {
        if (LocalStorage.isEmpty()) {
            Folder.generateDefaultFolder()
        }
    }
}
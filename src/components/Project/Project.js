import { nanoid } from "nanoid"
import LocalStorage from "../LocalStorage"
import Navbar from "../UI/Navbar"

export default class Project {

    constructor(title, description) {
        this.id = nanoid()
        this.title = title
        this.description = description
        this.tasks = []
    }

    save() {
        Navbar.addProjectToList(this)
        LocalStorage.add(this)
    }

}
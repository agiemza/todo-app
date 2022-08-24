import Navbar from "./UI/Navbar"

export default class LocalStorage {

    static add(item) {
        const array = this.get()
        array.unshift(item)
        localStorage.setItem("todo-projects", JSON.stringify(array))
    }

    static remove(item) {
        const array = this.get()
        localStorage.setItem("todo-projects", JSON.stringify(array.filter(project => project.id !== item.id)))
    }

    static get() {
        return JSON.parse(localStorage.getItem("todo-projects")) || []
    }

    static drop() {
        localStorage.setItem("todo-projects", JSON.stringify(""))
    }

    static getProject(id) {
        return this.get().find(project => project.id === id)
    }

    static saveProject(project) {
        this.remove(project)
        this.add(project)
        Navbar.upadateProjectList()
    }

}
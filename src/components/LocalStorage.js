export default class LocalStorage {

    static add(item) {
        const array = this.get()
        array.push(item)
        localStorage.setItem("todo-projects", JSON.stringify(array))
    }

    static get() {
        return JSON.parse(localStorage.getItem("todo-projects")) || []
    }

    static drop() {
        localStorage.setItem("todo-projects", JSON.stringify(""))
    }

    static getProject(id) {
        return LocalStorage.get().find(project => project.id === id)
    }

}
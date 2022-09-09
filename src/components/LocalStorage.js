export default class LocalStorage {
    static itemName = "todo-projects"

    static set(item) {
        localStorage.setItem(this.itemName, JSON.stringify(item))
    }

    static add(item) {
        const array = this.get()
        array.push(item)
        localStorage.setItem(this.itemName, JSON.stringify(array))
    }

    static remove(item) {
        const array = this.get()
        localStorage.setItem(this.itemName, JSON.stringify(array.filter(folder => folder.id !== item.id)))
    }

    static get() {
        return JSON.parse(localStorage.getItem(this.itemName)) || []
    }

    static drop() {
        localStorage.setItem(this.itemName, JSON.stringify(""))
    }

    static getFolder(id) {
        return this.get().find(folder => folder.id === id)
    }

    static saveFolder(folder) {
        const array = this.get()
        const currentFolderIndex = array.findIndex(item => item.id === folder.id)
        if (currentFolderIndex === -1) {
            array.push(folder)
        }
        if (currentFolderIndex !== -1) {
            array[currentFolderIndex] = folder
        }
        localStorage.setItem(this.itemName, JSON.stringify(array))
    }

    static isEmpty() {
        return !this.get()[0]
    }
}
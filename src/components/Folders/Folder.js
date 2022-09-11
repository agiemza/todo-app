import { nanoid } from "nanoid"
import FoldersTab from "../Tabs/Folders/FoldersTab"
import Main from "../UI/Main"
import LocalStorage from "../Utils/LocalStorage"

export default class Folder {
    constructor(name) {
        this.id = nanoid()
        this.name = name
        this.tasks = []
    }

    static show(folderId) {
        Main.changeContent(FoldersTab.render(folderId))
    }

    static generateDefaultFolder() {
        const defaultFolder = new this("Default")
        defaultFolder.id = "DEFAULT"
        LocalStorage.saveFolder(defaultFolder)
    }

    static getSortedTasks(folderId) {
        const folder = LocalStorage.getFolder(folderId)
        const tasks = []
        const tasksDone = []
        folder.tasks.forEach(task => {
            if (task.checked) {
                tasksDone.push({ task, folder })
            }
            if (!task.checked) {
                tasks.push({ task, folder })
            }
        })
        return tasks.concat(tasksDone)
    }

    static update(folder) {
        LocalStorage.remove(folder)
        LocalStorage.add(folder)
    }

    static delete(folderId) {
        const folders = LocalStorage.get().filter(item => item.id !== folderId)
        LocalStorage.set(folders)
    }
}
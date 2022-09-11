import { nanoid } from "nanoid"
import LocalStorage from "../Utils/LocalStorage"

export default class Folder {
    constructor(name) {
        this.id = nanoid()
        this.name = name
        this.tasks = []
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
import { nanoid } from "nanoid"
import LocalStorage from "../LocalStorage"

export default class Task {
    constructor(content, dueDate) {
        this.id = nanoid()
        this.content = content
        this.dueDate = dueDate
    }

    save(projectId) {
        const project = LocalStorage.getProject(projectId)
        project.tasks.unshift(this)
        LocalStorage.saveProject(project)
    }
}
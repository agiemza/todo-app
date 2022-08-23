import { nanoid } from "nanoid"

export default class Project {
    constructor(title, description) {
        this.id = nanoid()
        this.title = title
        this.description = description
    }
}
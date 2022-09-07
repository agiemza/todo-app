// import HomeIcon from "../../assets/home-icon.svg"
// import TodayIcon from "../../assets/today-icon.svg"
// import WeekIcon from "../../assets/week-icon.svg"
// import MonthIcon from "../../assets/month-icon.svg"
// import Main from "./Main"
// import Folder from "../Tasks/Folder"
// import NewFolderForm from "../Forms/NewFolderForm"
// import LocalStorage from "../LocalStorage"
// import Home from "../Tabs/Calendar/CalendarTab"

// export default class Navbar {
//     static htmlElement = this.createNavElement()
//     static foldersList = this.createPojectsList()

//     static render(output) {
//         this.htmlElement.appendChild(this.createTabsSection())
//         this.htmlElement.appendChild(this.createFoldersSection())
//         output.appendChild(this.htmlElement)
//     }

//     static displayFolders() {
//         const folders = LocalStorage.get().reverse()
//         folders.forEach(folder => {
//             this.addFolderToList({ title: folder.title, id: folder.id })
//         })
//     }

//     static upadateFoldersList() {
//         this.foldersList.innerHTML = ""
//         this.displayFolders()
//     }

//     static createNavElement() {
//         const nav = document.createElement("nav")
//         return nav
//     }

//     static createTabsSection() {
//         const section = document.createElement("section")
//         const tabs = [
//             {
//                 name: "Home",
//                 icon: HomeIcon,
//                 handler: () => Home.open()
//             },
//             {
//                 name: "Today",
//                 icon: TodayIcon
//             },
//             {
//                 name: "This week",
//                 icon: WeekIcon
//             },
//             {
//                 name: "This month",
//                 icon: MonthIcon
//             }
//         ]
//         tabs.forEach(tab => {
//             const element = document.createElement("button")
//             element.classList.add("nav-fixed-button")
//             if (tab.icon) {
//                 const icon = new Image()
//                 icon.src = tab.icon
//                 element.appendChild(icon)
//             }
//             if (tab.handler) {
//                 element.addEventListener("click", () => tab.handler())
//             }
//             const text = document.createElement("div")
//             text.textContent = tab.name
//             element.appendChild(text)
//             section.appendChild(element)
//         })
//         return section
//     }

//     static createFoldersSection() {
//         const section = document.createElement("section")
//         section.appendChild(this.createFoldersSectionHeading())
//         section.appendChild(this.foldersList)
//         this.displayFolders()
//         return section
//     }

//     static createFoldersSectionHeading() {
//         const headingContainer = document.createElement("div")
//         headingContainer.classList.add("nav-folders-heading")
//         const heading = document.createElement("h2")
//         heading.textContent = "Folders"
//         headingContainer.appendChild(heading)

//         const newFolderButton = document.createElement("button")
//         newFolderButton.classList.add("nav-folders-new-button")
//         newFolderButton.textContent = "+"
//         newFolderButton.addEventListener("click", () => this.handleNewFolderClick())
//         headingContainer.appendChild(newFolderButton)

//         return headingContainer
//     }

//     static createPojectsList() {
//         const list = document.createElement("ul")
//         list.classList.add("nav-folders-list")
//         return list
//     }

//     static handleNewFolderClick() {
//         const form = new NewFolderForm
//         const element = form.render()
//         Main.changeContent(element)
//         form.inputTitle.focus()
//     }

//     static handleFolderListItemClick(folderId) {
//         Folder.display(folderId)
//     }

//     static addFolderToList(folder) {
//         const item = this.createFolderListItem(folder)
//         this.foldersList.prepend(item)
//     }

//     static createFolderListItem(folder) {
//         constfolderTitile = document.createElement("div")
//         folderTitile.textContent = folder.title
//         folderTitile.addEventListener("click", () => this.handleFolderListItemClick(folder.id))

//         const deleteButton = document.createElement("button")
//         deleteButton.textContent = "delete"
//         deleteButton.addEventListener("click", () => Folder.delete(folder.id))

//         const listItem = document.createElement("li")
//         listItem.appendChild(folderTitile)
//         listItem.appendChild(deleteButton)

//         return listItem
//     }
// }
const to_do = document.getElementById('todo')
const add_task = document.getElementById('addtask')
const input_field = document.getElementById('inputfield')
const add_btn = document.getElementById('btn-add-task')
const cancel_btn = document.getElementById('btn-cancel')
const task_input = document.getElementById('taskinput')
const list = document.getElementById('list')
const projectFolders = document.getElementById('projects')
const projectInput = document.getElementById('inputfield-projects')
const folderAdd = document.getElementById('add-folder')
const add_btn_col = document.getElementById('btn-add-task-clm')
// Create a class that can hold all the notes we provide to it.
// The class name is going to be same as the project folder

class projectList {
    constructor() {
        listOfProjects = []
    }
    addProject(todoList) {
        this.listOfProjects.push(todoList)
    }
}

class todoList {
    constructor () {
        this.list = []
        this.selected = false
    }
    add(text) {
        this.list.push(text)
    }
}



let Sample_Project = new todoList
Sample_Project.selected = true
Sample_Project.add('This is a sample to do')



function addNote(text) {
    let newNote = document.createElement('div');
    newNote.innerHTML = text
    list.appendChild(newNote)
    return
}

add_task.addEventListener('click', ()=>{
    add_task.style.display = 'none'
    input_field.style.display = 'block'
})

add_btn.addEventListener('click',() => {
    if (task_input.value == '') {
       return alert('Please enter a note in the text field')
    }
    addNote(task_input.value)
    task_input.value = ''
    add_task.style.display = 'block'
    input_field.style.display = 'none'
    
})

folderAdd.addEventListener('click', () => {
    projectInput.style.display = 'block'
})

add_btn_col.addEventListener('click',() => {
    let input = document.getElementById('taskinput-clm').value
    let newFolder = document.createElement('div')
    newFolder.className = 'projectss'
    newFolder.innerHTML = input
    projectFolders.appendChild(newFolder)
    projectInput.style.display = 'none'
})



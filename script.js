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

let projects = {}
let currentFolder = 'Initial Folder'

// Initializing the folder

projects[currentFolder] = []
function showInput() {
    add_task.style.display = 'none'
    input_field.style.display = 'block'
}

function addNote() {
    if (task_input.value == '') {
        return alert('Please enter a note in the text field')
    }
    // Creating the text field.
    let text = task_input.value
    let newNote = document.createElement('div');
    newNote.innerHTML = text
    list.appendChild(newNote)

    projects[currentFolder].push(text)
    task_input.value = ''
    add_task.style.display = 'block'
    input_field.style.display = 'none'
    return
}

function addFolder() {
    let input = document.getElementById('taskinput-clm').value
    let newFolder = document.createElement('div')
    newFolder.className = `project ${input}`
    newFolder.innerHTML = input
    projectFolders.appendChild(newFolder)
    projectInput.style.display = 'none'

    currentFolder = input
    projects[input] = []

    removeNotes()

}

function removeNotes() {
    while(list.firstChild){
        list.firstChild.remove()
    }
}

function reapplyNotes(folder) {
    if (projects[folder] == undefined) {
        return
    }

    let currentNotes = projects[folder]
    for(let i = 0; i<currentNotes.length; i++){
        let newNote = document.createElement('div');
        newNote.innerHTML = currentNotes[i]
        list.appendChild(newNote)
    }
}

function getFolder(target) {
    if(target.className.includes('project')) {
        let folder = target.className.replace('project ','')
        currentFolder = folder
        removeNotes()
        reapplyNotes(folder)
    }
}



add_btn_col.addEventListener('click',addFolder)
add_task.addEventListener('click', showInput)
add_btn.addEventListener('click',addNote)
folderAdd.addEventListener('click', () => {
    projectInput.style.display = 'block'
})
projectFolders.addEventListener('click',(event) => {
    let target = event.target
    getFolder(target)
})


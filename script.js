const to_do = document.getElementById('todo')
const add_task = document.getElementById('addtask')
const input_field = document.getElementById('inputfield')
const add_btn = document.getElementById('btn-add-task')
const cancel_btn = document.getElementById('btn-cancel')
const task_input = document.getElementById('taskinput')
const list = document.getElementById('list')


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
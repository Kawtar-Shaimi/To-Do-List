/* Add Model Script */
let addBtn = document.getElementById('add-btn')
let addModel = document.getElementById('add-model')
let removeAddModel = document.getElementById('remove-add-model')

function toggleAddModel(){
    addModel.classList.toggle('hidden')
}

addBtn.addEventListener("click",toggleAddModel)
removeAddModel.addEventListener("click",toggleAddModel)



/* Update Model Script */
let updateModel = document.getElementById("update-model")

function showUpdateModel(index){
    /* Task Info */
    let title = document.querySelector(`#task-${index} .title`).textContent
    let description = document.querySelector(`#task-${index} .description`).textContent
    let date = document.querySelector(`#task-${index} .date`).textContent
    let priority = document.querySelector(`#task-${index} .priority`).textContent
    /* Update Modal Inputs */
    let titleInput = document.querySelector(`#update-model .title`)
    let descriptionInput = document.querySelector(`#update-model .description`)
    let dateInput = document.querySelector(`#update-model .date`)
    let priorityInput = document.querySelector(`#update-model .priority`)
    let indexInput = document.querySelector(`#update-model .priority`)
    /* Assgin Info To Inputs */
    titleInput.value = title
    descriptionInput.value = description
    dateInput.value = date
    priorityInput.value = priority
    indexInput.value = index
    /* Show Update Model */
    updateModel.classList.toggle("hidden")
}

function updateTaskInfo(){
    /* Update Modal Inputs */
    let titleInput = document.querySelector(`#update-model .title`).value
    let descriptionInput = document.querySelector(`#update-model .description`).value
    let dateInput = document.querySelector(`#update-model .date`).value
    let priorityInput = document.querySelector(`#update-model .priority`).value
    let index = document.querySelector(`#update-model .task-index`).value
    /* Task Info */
    let title = document.querySelector(`#task-${index} .title`)
    let description = document.querySelector(`#task-${index} .description`)
    let date = document.querySelector(`#task-${index} .date`)
    let priority = document.querySelector(`#task-${index} .priority`)
    /* Assgin Info To Inputs */
    title.textContent = titleInput
    description.textContent = descriptionInput
    date.textContent = dateInput
    priority.textContent = priorityInput
    /* Show Update Model */
    updateModel.classList.toggle("hidden")
}


let removeUpdateModel = document.getElementById('remove-update-model')
removeAddModel.addEventListener("click",()=>{
    updateModel.classList.toggle("hidden")
})


/* Update Model Script */

let updateModel = document.getElementById("update-model") //Get Update Model
//Function To Show Update Model With Task Infos
function showUpdateModel(index){
    /* Get Task Info */
    let title = document.querySelector(`#task-${index} p.title`).textContent
    let description = document.querySelector(`#task-${index} p.description`).textContent
    let date = document.querySelector(`#task-${index} p.date`).textContent
    let priority = document.querySelector(`#task-${index} span.priority`).textContent
    let status = document.querySelector(`#task-${index} span.status`).textContent
    /* Get Update Modal Inputs */
    let titleInput = document.querySelector(`#update-model input.title`)
    let descriptionInput = document.querySelector(`#update-model textarea.description`)
    let dateInput = document.querySelector(`#update-model input.date`)
    let priorityInput = document.querySelector(`#update-model select.priority`)
    let statusInput = document.querySelector(`#update-model select.status`)
    let indexInput = document.querySelector(`#update-model input.task-index`)
    /* Assign Task Info To Update Model Inputs */
    titleInput.value = title
    descriptionInput.value = description
    dateInput.value = date
    priorityInput.value = priority
    statusInput.value = status
    indexInput.value = index
    /* Show Update Model */
    updateModel.classList.toggle("hidden")
}

//Function For Update Task Infos
function updateTaskInfo(){
    /* Get Update Modal Inputs Values */
    let titleInput = document.querySelector(`#update-model input.title`).value
    let descriptionInput = document.querySelector(`#update-model textarea.description`).value
    let dateInput = document.querySelector(`#update-model input.date`).value
    let priorityInput = document.querySelector(`#update-model select.priority`).value
    let statusInput = document.querySelector(`#update-model select.status`).value
    let index = document.querySelector(`#update-model input.task-index`).value
    /* Get Task Info */
    let title = document.querySelector(`#task-${index} p.title`)
    let description = document.querySelector(`#task-${index} p.description`)
    let date = document.querySelector(`#task-${index} p.date`)
    let priority = document.querySelector(`#task-${index} span.priority`)
    /* Update Priorities Count */
    if (priority.textContent != priorityInput) {
        let count
        if (priorityInput == "P1") {
            count = document.querySelector("#P1 span")
        } else if(priorityInput == "P2") {
            count = document.querySelector("#P2 span")
        }else{
            count = document.querySelector("#P3 span")
        }
        count.textContent = parseInt(count.textContent) + 1
        /* Reduce Old Priority Count By 1 */
        let oldPriority = document.querySelector(`#${priority.textContent} span`)
        oldPriority.textContent = parseInt(oldPriority.textContent) - 1
    }
    /* Assign New Inputs Values To Task Infos*/
    title.textContent = titleInput
    description.textContent = descriptionInput
    date.textContent = dateInput
    priority.parentElement.outerHTML = `<p class="${priorityInput == "P1" ? "bg-red-600" : priorityInput == "P2" ? "bg-orange-400" : "bg-green-500"} text-white text-center w-full rounded-md md:text-xl"><span class="priority">${priorityInput}</span> : <span class="status">${statusInput}</span></p>`
    /* Assign Update Task In LocalStorage*/
    let taskArray = JSON.parse(localStorage.getItem("taskArray"))
    const taskIndex = taskArray.findIndex(task => task.index === parseInt(index));
    taskArray[taskIndex] = {
        index: parseInt(index),
        title: titleInput,
        description: descriptionInput,
        date: dateInput,
        priority: priorityInput,
        status: statusInput
    }
    localStorage.setItem("taskArray", JSON.stringify(taskArray))

    /* Hide Update Model */
    updateModel.classList.toggle("hidden")
}

//Get Update Model Close Btn
let removeUpdateModelBtn = document.getElementById('remove-update-model-btn')
//Add Event To Btn To Close Update Model
removeUpdateModelBtn.addEventListener("click",()=>{
    /* Hide Update Model */
    updateModel.classList.toggle("hidden")
})
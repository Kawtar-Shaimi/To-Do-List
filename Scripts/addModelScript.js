/* Add Model Script */

let addTaskBtn = document.getElementById('add-task-btn') //Get Add Task Btn
let addModel = document.getElementById('add-model') //Get Add Model
let removeAddModelBtn = document.getElementById('remove-add-model-btn') //Get Model Close Btn
//Functio To Toggle Model
function toggleAddModel(){
    addModel.classList.toggle('hidden')
}
//Add Events To Btns
addTaskBtn.addEventListener("click",toggleAddModel)
removeAddModelBtn.addEventListener("click",toggleAddModel)

//Function For Adding A New Task
function addTask(){
    /* Get Tasks Container */
    let tasksContainer = document.getElementById(`task-container`)
    /* Get Add Modal Inputs Values */
    let titleInput = document.querySelector(`#add-model input.title`)
    let descriptionInput = document.querySelector(`#add-model textarea.description`)
    let dateInput = document.querySelector(`#add-model input.date`)
    let priorityInput = document.querySelector(`#add-model select.priority`)
    let statusInput = document.querySelector(`#add-model select.status`)
    /* Get Task Array From LocalStorage */
    let taskArray = JSON.parse(localStorage.getItem("taskArray"))
    /* Get Index From  Last Task*/
    let index = taskArray.length > 0 ? taskArray[taskArray.length - 1].index + 1 : 1
    /* Create New Task With Modal Inputs Values */
    let newTask = `
        <div id="task-${index}"  class="task w-4/5 m-auto my-10 border rounded-md border-black  sm:h-32 sm:w-11/12">
            <p class="${priorityInput.value == "P1" ? "bg-red-600" : priorityInput.value == "P2" ? "bg-orange-400" : "bg-green-500"} text-white text-center w-full rounded-md md:text-xl"><span class="priority">${priorityInput.value}</span> : <span class="status">${statusInput.value}</span></p>
            <div class="flex justify-between px-5">
                <p class="title font-bold text-xl">${titleInput.value}</p>
                <p class="date text-gray-400 text-sm flex items-center">
                    ${dateInput.value}
                    <svg class="ml-4 text-gray-400 w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="rgb(156 163 175 / 1)" d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg>
                </p>
            </div>
            <div class="flex justify-between pl-10 pr-5 pb-3 sm:pl-5">
                <p class="description text-gray-500 w-2/3 sm:w-72 sm:text-sm md:pt-3">${descriptionInput.value}</p>
                <div class=" flex gap-2 sm:mt-2">
                    <button onclick="showUpdateModel(${index})" class="bg-yellow-400 text-white px-5 py-2 rounded-md sm:px-3 sm:py-2 sm:text-sm md:text-xl md:px-6">Edit</button>
                    <button onclick="showDeleteModel(${index})" class="bg-red-400 text-white px-3 py-2 rounded-md sm:px-3 sm:py-2 sm:text-sm md:text-xl md:px-4">Delete</button>
                </div>
            </div>
        </div>
    `
    /* Assign New Task To Tasks Container*/
    tasksContainer.insertAdjacentHTML("afterbegin",newTask)
    /* Assign New Task To LocalStorage*/
    taskArray.push({
        index: index,
        title: titleInput.value,
        description: descriptionInput.value,
        date: dateInput.value,
        priority: priorityInput.value,
        status: statusInput.value
    })
    localStorage.setItem("taskArray", JSON.stringify(taskArray))
    /* Hide The No Tasks If It's Shown*/
    if (taskArray.length == 1) {
        document.getElementById("no-tasks").classList.toggle("hidden")
    }
    /* Update Statics Count */
    let count
    if (priorityInput.value == "P1") {
        count = document.querySelector("#P1 span")
    } else if(priorityInput.value == "P2") {
        count = document.querySelector("#P2 span")
    }else{
        count = document.querySelector("#P3 span")
    }
    count.textContent = parseInt(count.textContent) + 1
    /* Empty Add Inputs */
    titleInput.value = descriptionInput.value =  dateInput.value = priorityInput.value = statusInput.value = ""
    
    /* Hide Add Model */
    addModel.classList.toggle("hidden")
}
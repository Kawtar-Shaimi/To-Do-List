/* Delete Model Script */

let deleteModel = document.getElementById("delete-model") //Get Delete Model
//Function To Show Delete Model With Task Infos
function showDeleteModel(index){
    /* Get Delete Modal Inputs */
    let indexInput = document.querySelector(`#delete-model input.task-index`)
    /* Assign Task Index To Delete Model Input */
    indexInput.value = index
    /* Show Delete Model */
    deleteModel.classList.toggle("hidden")
}

//Function For Delete Task Infos
function deleteTask(){
    /* Get Delete Modal Input Value */
    let index = document.querySelector(`#delete-model input.task-index`).value
    /* Get Task With Index */
    let task = document.getElementById(`task-${index}`)
    /* Get Tasks From LocalStorage*/
    let taskArray = JSON.parse(localStorage.getItem("taskArray"))
    /* Update Priorities Count */
    console.log(taskArray)
    console.log(parseInt(index))
    console.log(taskArray.find(task => task.index === parseInt(index)))
    console.log(taskArray.find(task => task.index === parseInt(index)).priority)
    let priority =  taskArray.find(task => task.index === parseInt(index)).priority
    let count
    if (priority == "P1") {
        count = document.querySelector("#P1 span")
    } else if(priority == "P2") {
        count = document.querySelector("#P2 span")
    }else{
        count = document.querySelector("#P3 span")
    }
    count.textContent = parseInt(count.textContent) - 1
    /* Remove Task From LocalStorage*/
    taskArray = taskArray.filter(task => task.index !== parseInt(index));
    localStorage.setItem("taskArray", JSON.stringify(taskArray))
    /* Check If There's No Tasks */
    if (taskArray.length == 0) {
        document.getElementById("no-tasks").classList.toggle("hidden")
    }
    /* Remove Task */
    task.remove()
    /* Hide Delete Model */
    deleteModel.classList.toggle("hidden")
}

//Get Delete Model Close Btn
let removeDeleteModelBtn = document.getElementById('remove-delete-model-btn')
//Add Event To Btn To Close Delete Model
removeDeleteModelBtn.addEventListener("click",()=>{
    /* Hide Delete Model */
    deleteModel.classList.toggle("hidden")
})
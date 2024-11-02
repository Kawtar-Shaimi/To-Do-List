/* Filter Task Function */
function filter(){
    /* Get Task Array From LocalStorage */
    let taskArray = JSON.parse(localStorage.getItem("taskArray"))
    /* Check If There's Tasks */
    if (taskArray.length > 0 ) {
        /* Get The Filter Option */
        let option = document.getElementById("filterSelect").value
        /* Check If It's By Date */
        if (option === "Date") {
            /* Filter By Date From New To Old*/
            taskArray.sort((a, b) => new Date(a.date) - new Date(b.date));
        } 
        /* Or By Priority */
        else if (option === "Priority") {
            /* Define Priority Order */
            const priorityOrder = {
                P1: 1,
                P2: 2,
                P3: 3,
            };
            /* Filter By Priority From The Most Important To The less */
            taskArray.sort((a, b) => priorityOrder[b.priority] - priorityOrder[a.priority]);
        }
        /* Get Tasks Container */
        let tasksContainer = document.getElementById(`task-container`)
        tasksContainer.innerHTML = ""
        /* Initi Priorities Count By 0 */
        let p1Count = 0, p2Count = 0, p3Count = 0
        /* Loop All Array Tasks */
        for (let i = 0; i < taskArray.length; i++) {
            /* Create New Task */
            let task = `
                <div id="task-${taskArray[i].index}"  class="task w-4/5 m-auto my-10 border rounded-md border-black  sm:h-32 sm:w-11/12">
                    <p class="${taskArray[i].priority == "P1" ? "bg-red-600" : taskArray[i].priority == "P2" ? "bg-orange-400" : "bg-green-500"} text-white text-center w-full rounded-md md:text-xl"><span class="priority">${taskArray[i].priority}</span> : <span class="status">${taskArray[i].status}</span></p>
                    <div class="flex justify-between px-5">
                        <p class="title font-bold text-xl">${taskArray[i].title}</p>
                        <p class="date text-gray-400 text-sm">${taskArray[i].date}</p>
                    </div>
                    <div class="flex justify-between pl-10 pr-5 pb-3 sm:pl-5">
                        <p class="description text-gray-500 w-2/3 sm:w-72 sm:text-sm md:pt-3">${taskArray[i].description}</p>
                        <div class=" flex gap-2 sm:mt-2">
                            <button onclick="showUpdateModel(${taskArray[i].index})" class="bg-yellow-400 text-white px-5 py-2 rounded-md sm:px-3 sm:py-2 sm:text-sm md:text-xl md:px-6">Edit</button>
                            <button onclick="showDeleteModel(${taskArray[i].index})" class="bg-red-400 text-white px-3 py-2 rounded-md sm:px-3 sm:py-2 sm:text-sm md:text-xl md:px-4">Delete</button>
                        </div>
                    </div>
                </div>
            `
            /* Assign New Task To Tasks Container*/
            tasksContainer.insertAdjacentHTML("afterbegin",task)
            /* Update Priorities Count*/
            if (taskArray[i].priority == "P1") {
                p1Count++
            } else if (taskArray[i].priority == "P2") {
                p2Count++
            } else {
                p3Count++
            }
        }
        /* Assign Priorities Count */
        document.querySelector("#P1 span").textContent = p1Count
        document.querySelector("#P2 span").textContent = p2Count
        document.querySelector("#P3 span").textContent = p3Count
    }
}
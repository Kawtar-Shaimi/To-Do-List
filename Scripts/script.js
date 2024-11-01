/* Create New Tasks Array If It Desn't Exist In The LocalStorage */
if (!localStorage.getItem("taskArray")) {
    tasks = [
        {
            index: 1,
            title: "Task 1",
            description: "This is just a dump description fr a dump task This is just a dump description",
            date: "2025-10-11",
            priority: "P1",
            status: "to-do"
        },
        {
            index: 2,
            title: "Task 2",
            description: "This is just a dump description fr a dump task This is just a dump description",
            date: "2025-10-13",
            priority: "P2",
            status: "in-progress"
        },
        {
            index: 3,
            title: "Task 3",
            description: "This is just a dump description fr a dump task This is just a dump description",
            date: "2025-10-14",
            priority: "P3",
            status: "done"
        },
        {
            index: 4,
            title: "Task 4",
            description: "This is just a dump description fr a dump task This is just a dump description",
            date: "2025-10-12",
            priority: "P1",
            status: "to-do"
        },
    ]
    /* Assign Array To LocalStorage */
    localStorage.setItem("taskArray", JSON.stringify(tasks))
}

/* Get Task Array From LocalStorage */
let taskArray = JSON.parse(localStorage.getItem("taskArray"))
if (taskArray.length > 0 ) {
    /* Get Tasks Container */
    let tasksContainer = document.getElementById(`task-container`)
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
}else{
    document.getElementById("no-tasks").classList.toggle("hidden")
}
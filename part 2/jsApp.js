function addTask() {
    const mainInput = document.getElementById("input");
    // let currentValue = JSON.parse(localStorage.getItem(date))
    // const currentTasks = currentValue ? currentValue.tasks : []
    // const setItem = (tasks) => localStorage.setItem("userTasks", tasks);
    console.log('task')

    addElement(mainInput.value, 1);
    mainInput.value = "";
    selectTasks()
}




// const getTasklistFromLocalStorage = () => {
//     const tasks = localStorage.getItem("userTasks", tasks);
// };
// const addTaskToLocalStorage = (tasks) => localStorage.setItem("userTasks", tasks);

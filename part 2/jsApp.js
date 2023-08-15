function addTask() {
    const mainInput = document.getElementById("input");
    addElement(mainInput.value);
    mainInput.value = "";
}



// !Переменной (строка 2) checkbox нужно добавить addEvenlistener
// !и при изменении длины массива проверять все чекбоксы на наличие checked и модифицировать innerHTML <s></s>
// !так же была идея задействовать локалсторедж (для работы с хот релоадом)
// !Либо же, при клике на чекбокс, брать его id, cheched value и по нему через тернарное выражение добавлять <s></s>
//

// const getTasklistFromLocalStorage = () => {
//     const tasks = localStorage.getItem("userTasks", tasks);
// };
// const addTaskToLocalStorage = (tasks) => localStorage.setItem("userTasks", tasks);

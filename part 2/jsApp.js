// getTasklistFromLocalStorage();
let checkbox = document.querySelectorAll( "input[type=checkbox]" )

const addTask = function () {
    const textValue = document.getElementById("input");
    addElement(textValue.value)
    textValue.value = ""
    checkbox = document.querySelectorAll( "input[type=checkbox]" )
};



function addElement(value) {
    const newTask = document.createElement("p");
    const taskValue = document.createTextNode(value);
    newTask.appendChild(taskValue);

    const newCHecknox = document.createElement("input");
    newCHecknox.setAttribute("type", "checkbox")
    newCHecknox.setAttribute("id", value)
    console.log(newCHecknox)
    newTask.appendChild(newCHecknox);
  
    // add the newly created element and its content into the DOM
    const currentInput = document.getElementById("input");
    document.body.insertBefore(newTask, currentInput);
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




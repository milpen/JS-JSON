const taskName = document.getElementById('input-task');
const buttonAddTask = document.getElementById('input-btn');
const errorMessage = document.getElementById('error');
const hiddenItem = document.getElementById('hidden-item');
const toDoList = document.getElementById('to-do-list');
const checkbox = document.getElementById('checkbox');
const deleteButton = document.getElementById('btn-delete');

const finalTodoList = []; // массив для хранения списка задач

getTasks();
renderTodos();

buttonAddTask.addEventListener('click', () => {
  const taskItem = taskName.value;  //получаем значение input
  if (taskName.value === "" || taskName.value === " " ) { //составляем условие
    alert("Вы ничего не написали!");
} else {
    hiddenItem.classList.add("hidden");// если Input не пустой, то "прячем" надпись "задачи отсутствуют"
    const toDoObject = {
    task: taskItem,
      }; // создаем объект, в который попадает Info из input
    finalTodoList.push(toDoObject); // добавляем объект в конец массива
    //console.log(finalTodoList);

    //ВОПРОС: хотела сделать шаблон для добавления записи, по типу, как в строке ниже, но... запнулась на том, что мне нужна не просто строка li, а еще и checkbox, здесь не докрутила до конца: checkbox нужно было в строку-шаблон li как-то встроить (если да, то как), или сделать вторую шаблонную строку для checkbox? Подскажи, пож-ста
    // const newItemHTML = `<li>${taskItem}</li><input>`; //создали шаблон для записи дел
    // toDoList.insertAdjacentHTML("beforeend", newItemHTML); //добавляем элемент в установленном порядке

    const finalTodoListJSON =JSON.stringify(finalTodoList); //записали массив в json-строку
    localStorage.setItem("todo-list", finalTodoListJSON); //записали эту json-строку в локальное хранилище

    const newItem = document.createElement('li'); // создаем элемент списка
    newItem.textContent = taskItem;
    toDoList.append(newItem); // добавляем элемент списка в список

    const check = document.createElement('input');
    check.type = "checkbox";
    check.classList.add('checkbox');
    newItem.append(check);

    taskName.value = ""; //очищаем input
    }
}
);

function getTasks() { // функция получает данные из локального хранилища и записывает их в массив, который выведет список на экран (не потеряв данные при обновлении страницы)
const todosJSON = localStorage.getItem("todo-list");
finalTodoList.innerHTML = JSON.parse(todosJSON);
}

function renderTodos() { // функция получает данные из массива и записывает их в список
finalTodoList.forEach((item) => {
    const newItem = document.createElement('li'); // создаем элемент списка
    newItem.textContent = taskItem;
    toDoList.append(newItem); // добавляем элемент списка в список

    const check = document.createElement('input');
    check.type = "checkbox";
    check.classList.add('checkbox');
    newItem.append(check);

    taskName.value = ""; //очищаем input
}
)
}

deleteButton.addEventListener('click', () => {
toDoList.remove();
hiddenItem.classList.remove("hidden");
});
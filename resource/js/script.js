const button = document.querySelector(".buttoninput");
const textInput = document.querySelector(".textinput");
const listItem = document.querySelector(".todoitem");
const list = document.querySelector("ul");
const counter = document.querySelector("span");
const editArea = document.querySelector(".editArea");
const editInput = document.querySelector("#editInput");
const editButton = document.querySelector("#editButton");

let todos = [];
let editedItemIndex = 0;

// create task element

function createListItem(txt) {
  const li = document.createElement("li");
  const p = document.createElement("p");
  const i1 = document.createElement("i");
  const i2 = document.createElement("i");

  li.setAttribute("class", "todoitem");
  i1.setAttribute("class", "fa-solid fa-trash");
  p.setAttribute("class", "listText");
  i2.setAttribute("class", "fa-regular fa-pen-to-square");

  p.appendChild(document.createTextNode(txt));
  li.appendChild(p);
  li.appendChild(i2);
  li.appendChild(i1);
  return li;
}

// add task to list

button.addEventListener("click", (e) => {
  e.preventDefault();

  if (textInput.value.trim()) {
    todos.push(textInput.value.trim());
    list.appendChild(createListItem(todos.at(-1)));
    counter.textContent++;
    textInput.value = "";
  }
});

// remove task from list

list.addEventListener("click", (e) => {
  if (e.target.classList[0] == "fa-solid") {
    todos.splice(Array.from(list.children).indexOf(e.target.parentElement), 1);
    e.target.parentElement.remove();
    counter.textContent--;
  }
});

// remove all tasks

function deleteAll() {
  if (
    counter.textContent != 0 &&
    confirm("Do you want to delete all tasks ?")
  ) {
    todos.length = 0;
    list.innerHTML = "";
    counter.textContent = 0;
    textInput.value = "";
  }
}

// edit tasks

list.addEventListener("click", (e) => {
  if (e.target.classList[0] == "fa-regular") {
    editArea.style.display = "flex";

    editInput.value = e.target.previousSibling.textContent;

    editedItemIndex = Array.from(list.children).indexOf(e.target.parentElement);
  }
});

editButton.addEventListener("click", (e) => {
  if (editInput.value.trim()) {
    todos[editedItemIndex] = editInput.value;

    list.children[editedItemIndex].children[0].textContent = editInput.value;

    editArea.style.display = "none";
  }
});

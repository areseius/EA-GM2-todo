const button = document.querySelector(".buttoninput");
const text = document.querySelector(".textinput");
const listItem = document.querySelector(".todoitem");
const list = document.querySelector("ul");
const counter = document.querySelector("span");
let task = "";

// create task element

function createListItem(txt) {
  const li = document.createElement("li");
  const p = document.createElement("p");
  const i = document.createElement("i");

  li.setAttribute("class", "todoitem");
  i.setAttribute("class", "fa-solid fa-trash");
  p.setAttribute("class", "listText");

  p.textContent = txt;

  li.appendChild(p);
  li.appendChild(i);

  return li;
}

// add task to list

button.addEventListener("click", (e) => {
  e.preventDefault();

  task = text.value;
  text.value = "";
  task.trim() &&
    list.appendChild(createListItem(task.trim())) &&
    counter.textContent++;
});

// remove task from list

window.addEventListener("click", (e) => {
  if (e.target.classList[0] == "fa-solid") {
    e.target.parentElement.remove();
    counter.textContent--;
  }
});

// remove all tasks

function deleteAll() {
  list.innerHTML = "";
  counter.textContent = 0;
  text.value = "";
}

const button = document.querySelector(".buttoninput");
const textInput = document.querySelector(".textinput");
const listItem = document.querySelector(".todoitem");
const list = document.querySelector("ul");
const counter = document.querySelector("span");

// create task element

function createListItem(txt) {
  const li = document.createElement("li");
  const p = document.createElement("p");
  const i = document.createElement("i");

  li.setAttribute("class", "todoitem");
  i.setAttribute("class", "fa-solid fa-trash");
  p.setAttribute("class", "listText");

  p.appendChild(document.createTextNode(txt));
  li.appendChild(p);
  li.appendChild(i);

  return li;
}

// add task to list

button.addEventListener("click", (e) => {
  e.preventDefault();

  textInput.value.trim() &&
    list.appendChild(createListItem(textInput.value.trim())) &&
    counter.textContent++;

  textInput.value = "";
});

// remove task from list

list.addEventListener("click", (e) => {
  if (e.target.classList[0] == "fa-solid") {
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
    list.innerHTML = "";
    counter.textContent = 0;
    textInput.value = "";
  }
}

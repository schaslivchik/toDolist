"use strict";

const newToDoInput = document.querySelector(".new-todo");

const addBtn = document.querySelector("button");
const toDoListItem = document.querySelector(".todos-list");

addBtn.onclick = (e) => {
  const REG_EXP = /^\s*$/;
  if (!REG_EXP.test(newToDoInput.value)) {
    newToDoInput.classList.remove("invalid");

    const newListItem = document.createElement("li");
    newListItem.classList.add("list-item");

    const removeBtn = document.createElement("button");
    removeBtn.innerText = "-";

    toDoListItem.append(newListItem);
    newListItem.append(newToDoInput.value, removeBtn);
    newToDoInput.value = "";

    removeBtn.onclick = (e) => {
      e.currentTarget.closest(".list-item").remove();
    };
  } else {
    newToDoInput.classList.add("invalid");
  }
};

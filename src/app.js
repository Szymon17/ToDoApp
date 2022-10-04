//code
import style from "./css/style.css";

import { EditTask } from "./js/EditTask.js";
import { DeleteTask } from "./js/DeleteTask.js";

class ToDo {
  constructor() {
    this.index = 0;
    this.tasks = [];
    this.btn = document.querySelector(".addTask");
    this.contener = document.querySelector(".task-contener");
    this.todayDate = new Date().toISOString().split("T")[0];

    this.user_params = {
      title: document.querySelector(".user-form .title-input"),
      content: document.querySelector(".user-form textarea"),
      date: document.querySelector(".user-form .date-input"),
    };

    this.user_params.date.value = this.todayDate;

    this.btn.addEventListener("click", this.addTask.bind(this));
  }

  addTask() {
    if (this.user_params.title.value == "" || this.user_params.content.value == "") {
      alert("Uzupełnij pola");
      return;
    }

    const newTask = this.newHtml();
    this.contener.append(newTask);

    this.tasks.push(newTask);
    this.index++;

    this.user_params.title.value = "";
    this.user_params.content.value = "";
    this.user_params.date.value = this.todayDate;
  }

  newHtml() {
    const task = document.createElement("div");
    task.classList.add("task");
    task.dataset.index = this.tasks.length;

    const taskCnt = document.createElement("div");
    taskCnt.classList.add("task-contener");

    const header = document.createElement("header");

    const date = document.createElement("div");
    date.classList.add("date");
    date.textContent = this.user_params.date.value;

    const buttons = document.createElement("div");
    buttons.classList.add("buttons");

    const title = document.createElement("h2");
    date.classList.add("title");
    title.textContent = this.user_params.title.value;

    const text = document.createElement("text");
    text.classList.add("text");
    text.textContent = this.user_params.content.value;

    const editTask = new EditTask(this.tasks);
    const deleteTask = new DeleteTask(this.tasks);

    const deleteBtn = deleteTask.createButton();
    const editBtn = editTask.createButton();

    buttons.append(editBtn, deleteBtn);
    header.append(date, buttons);
    taskCnt.append(header, title, text);
    task.append(taskCnt);

    return task;
  }
}

const toDo = new ToDo();

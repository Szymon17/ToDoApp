export class EditTask {
  constructor(taskList) {
    this.taskList = taskList;
    this.btn = null;
    this.task = null;
    this.form = {};
  }

  createButton() {
    const editBtn = document.createElement("button");
    editBtn.classList.add("editBtn");
    editBtn.innerHTML = `<i class="far fa-edit"></i>`;
    editBtn.addEventListener("click", () => this.editTask());
    this.btn = editBtn;

    return editBtn;
  }

  setEditFormContent(userForm) {
    this.form.title = userForm.querySelector(".title-input");
    this.form.content = userForm.querySelector("textarea");
    this.form.date = userForm.querySelector(".date-input");

    this.form.title.value = this.task.querySelector("h2").textContent;
    this.form.content.value = this.task.querySelector(".text").textContent;
    this.form.date.value = this.task.querySelector(".date").textContent;
  }

  editTask() {
    this.task = this.btn.closest(".task");
    const form = document.querySelector(".user-form form").cloneNode(true);
    const clonedTask = this.task.firstChild.cloneNode(true);
    const oldButtons = this.task.querySelector(".buttons");

    form.querySelector(".addTask").remove();
    this.setEditFormContent(form);

    this.task.textContent = "";

    const saveBtn = this._createSaveBtn(clonedTask, oldButtons);
    const canelBtn = this._createCanelBtn(clonedTask, oldButtons);

    const btnCnt = document.createElement("div");
    btnCnt.classList.add("buttons");
    btnCnt.append(saveBtn, canelBtn);

    this.task.append(btnCnt, form);
  }

  _createSaveBtn(clonedTask, oldButtons) {
    const saveBtn = document.createElement("button");
    saveBtn.classList.add("saveBtn");
    saveBtn.innerHTML = `<i class="far fa-save"></i>`;
    saveBtn.addEventListener("click", saveTask.bind(this));

    function saveTask() {
      this.task.textContent = "";
      this.task.append(clonedTask);
      this.task.querySelector("header .buttons").remove();
      this.task.querySelector("header").append(oldButtons);

      this.task.querySelector("h2").textContent = this.form.title.value;
      this.task.querySelector(".text").textContent = this.form.content.value;
      this.task.querySelector(".date").textContent = this.form.date.value;
    }

    return saveBtn;
  }

  _createCanelBtn(clonedTask, oldButtons) {
    const canelBtn = document.createElement("button");
    canelBtn.classList.add("canelBtn");
    canelBtn.innerHTML = `<i class="fa-solid fa-ban"></i>`;
    canelBtn.addEventListener("click", canelTask.bind(this));

    function canelTask() {
      this.task.textContent = "";
      this.task.append(clonedTask);
      this.task.querySelector("header .buttons").remove();
      this.task.querySelector("header").append(oldButtons);
    }

    return canelBtn;
  }

  canelTask() {}
}

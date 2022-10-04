export class DeleteTask {
  constructor(taskList) {
    this.taskList = taskList;
    this.btn = null;
  }

  createButton() {
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delBtn");
    deleteBtn.innerHTML = `<i class="far fa-trash-alt"></i>`;
    deleteBtn.addEventListener("click", () => this.deleteTask(this.taskList));

    this.btn = deleteBtn;
    return deleteBtn;
  }

  deleteTask() {
    const task = this.btn.closest(".task");
    const taksIndex = task.dataset.index;
    task.remove();
    this.taskList.splice(taksIndex, 1);
    this.setNewDataIndex();
  }

  setNewDataIndex() {
    const tasks = document.querySelectorAll(".task-contener .task");
    tasks.forEach((task, index) => (task.dataset.index = index));
  }
}

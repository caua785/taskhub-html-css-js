const inputSearch = document.getElementById("input-search");
const inputTask = document.getElementById("input-task");
const inputTimeStart = document.getElementById("input-time-start");
const inputTimeEnd = document.getElementById("input-time-end");
const inputDate = document.getElementById("input-date");

const modal = document.getElementById("modal");

const buttonAddTask = document.getElementById("button-add-task");
const buttonCancel = document.getElementById("button-cancel");
const buttonConfirm = document.getElementById("button-confirm");

let tasks = [];

buttonAddTask.addEventListener("click", () => {
  modal.setAttribute("view-modal", true);
});

buttonCancel.addEventListener("click", () => {
  modal.setAttribute("view-modal", false);
});

buttonConfirm.addEventListener("click", () => {
  const task = {
    description: inputTask.value,
    start: inputTimeStart.value,
    end: inputTimeEnd.value,
    date: inputDate.value,
  };

  tasks.push(task);

  console.log(tasks);

  clearForm();
});

function clearForm() {
  inputTask.value = "";
  inputTimeStart.value = "";
  inputTimeEnd.value = "";
  inputDate.value = "";
}

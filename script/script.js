const inputSearch = document.getElementById("input-search");
const inputTask = document.getElementById("input-task");
const inputTimeStart = document.getElementById("input-time-start");
const inputTimeEnd = document.getElementById("input-time-end");
const inputDate = document.getElementById("input-date");

const modal = document.getElementById("modal");

const buttonAddTask = document.getElementById("button-add-task");
const buttonCancel = document.getElementById("button-cancel");
const buttonConfirm = document.getElementById("button-confirm");

const boxTask = document.getElementById("box-task");
const taskCards = document.getElementById("task-cards");

// const sectionTitle = document.createElement("h2");

// sectionTitle.textContent = "Amanhã";
// sectionTitle.className = "task--title";

// boxTask.appendChild(sectionTitle);

let tasks = [];
// Abrir o modal
buttonAddTask.addEventListener("click", () => {
  modal.setAttribute("view-modal", true);
});

// Fechar o modal
buttonCancel.addEventListener("click", () => {
  modal.setAttribute("view-modal", false);
});

// Cadastrar uma tarefa
buttonConfirm.addEventListener("click", () => {
  const isValid = validationForm();
  const task = {
    description: inputTask.value,
    start: inputTimeStart.value,
    end: inputTimeEnd.value,
    date: inputDate.value,
  };

  if (isValid) {
    createTask(task);
    tasks.push(task);
    clearForm();
  } else {
    alert("Preencha todos os campos");
  }

});

// Limpar o formuladrio
function clearForm() {
  inputTask.value = "";
  inputTimeStart.value = "";
  inputTimeEnd.value = "";
  inputDate.value = "";
}
// Valida os campos do formulario
function validationForm() {
  return (
    inputTask.value !== "" &&
    inputTimeStart.value !== "" &&
    inputTimeEnd.value !== "" &&
    inputDate.value !== ""
  );
}

function createTask(task) {
  // Criando novos componentes
  const card = document.createElement("span");
  const cardHeader = document.createElement("span");
  const cardTime = document.createElement("p");
  const cardDate = document.createElement("p");
  const cardDescription = document.createElement("p");
  const cardButtonBox = document.createElement("span");
  const cardButton = document.createElement("button");

  const formattedDate = formatDate(task.date);

  // Validando se a data passada por parametro é menor que a data atual
  const isValid = validationState(formattedDate, task.end);

  // Declarando as classes pelo HTML
  card.className = `card ${isValid ? "card--blue" : "card--white"}`;
  cardHeader.className = "card--header";
  cardDescription.className = "card-description";
  cardButtonBox.className = "card--button";
  cardButton.className = `button-state ${
    isValid ? "state--concluido" : "state--nao-concluido"
  }`;

  // Adicionando os textos dos componentes criados
  cardTime.textContent = `${task.start} - ${task.end}`;
  cardDate.textContent = formattedDate;
  cardDescription.textContent = task.description;
  cardButton.textContent = isValid ? "Concluido" : "Em progresso";

  cardHeader.appendChild(cardTime);
  cardHeader.appendChild(cardDate);
  cardButtonBox.appendChild(cardButton);

  // Adicionando os elementos criados no card
  card.appendChild(cardHeader);
  card.appendChild(cardDescription);
  card.appendChild(cardButtonBox);

  taskCards.appendChild(card);
}

function validationState(paramDate, paramTime) {

  // Obtenha a data e hora atuais
  const currentDateTime = new Date();

  // Converta a data recebida por parâmetro para um objeto Date
  const [day, month, year] = paramDate.split("/");

  // Converta a hora recebida por parâmetro para componentes individuais
  const [hours, minutes] = paramTime.split(":");

  // Crie um objeto Date combinando a data e a hora recebida
  const dateParam = new Date(year, month - 1, day, hours, minutes);

  // Compare as datas e horas
  return dateParam < currentDateTime;
}

function formatDate(paramDate) {
  const [year, month, day] = paramDate.split("-");

  // Formate a data no formato "dd/mm/yyyy"
  const formattedDate = `${day}/${month}/${year}`;

  return formattedDate;
}

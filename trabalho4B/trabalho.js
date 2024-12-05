
const caixatarefa = document.getElementById("caixa_tarefa");
const addtarefa  = document.getElementById("adicionar_tar");
const listatarefa = document.getElementById("lista_tar");
const contartar = document.getElementById("tar_concluida");

let tarcompleta = 0; // Contador de tarefas concluídas

function addTask() {
  const taskText = caixatarefa.value.trim(); // Texto da tarefa

  if (taskText) {
    // Criando o item da lista (li)
    const li = document.createElement("li");

    // Adicionando o item à lista de tarefas
    listatarefa.appendChild(li);

    // Limpando o campo de entrada
    caixatarefa.value = "";

    // Configurando o botão de completar tarefa
    const completeButton = li.querySelector(".complete-task");
    completeButton.addEventListener("click", function () {
      toggleCompleteTask(li);
    });


  // Atualizando o contador de tarefas concluídas
  contartar.textContent = {${tarcompleta} tarefas concluídas
}

  // Atualizando o contador de tarefas concluídas
  contartar.textContent = ${tarcompleta} tarefas concluídas;
}

// Event listeners
addtarefa.addEventListener("click", addTask); // Adiciona uma tarefa


document.addEventListener("keydown", function (event) {
  if (event.ctrlKey && event.key === "h") {
    openModal(); // Abre o modal com Ctrl + H
  }
});
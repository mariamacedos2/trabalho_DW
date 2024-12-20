let contador = 0
let concluidas = 0
let input = document.getElementById('caixa_tarefa');
let adicionar_tar = document.getElementById('adicionar_tar');
let main = document.getElementById('lista_tar');
let tarConcluida = document.getElementById('tar_concluida');
const closeModalButton = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

const toggleModal =() => {
    [modal, fade].forEach((el) => el.classList.toggle("hide"));
}

function atualizarContagem() {
  const totalTarefas = document.querySelectorAll('.item').length;
  const progresso = document.getElementById('progresso');

  tarConcluida.textContent = `${concluidas}/${totalTarefas} tarefas concluídas`;


  const percentual = totalTarefas > 0 ? (concluidas / totalTarefas) * 100 : 0;


  progresso.style.width = `${percentual}%`;

  if (percentual < 50) {
    progresso.style.backgroundColor = '#f44336';
  } else if (percentual < 75) {
    progresso.style.backgroundColor = '#ff9800';
  } else {
    progresso.style.backgroundColor = '#4caf50';
  }
}



function addTarefa() {
  //Pegar o valor digitado no input
  let valorInput = input.value;

  if((valorInput !== "") && (valorInput !== null) && (valorInput !== undefined)){
   
   ++contador;
   
    let novoItem = `<div id="${contador}" class="item ">
          <div onclick="marcarTarefa(${contador})" class="item-icone">
            <i id = "icone_${contador}" class="fa-regular fa-circle"></i>
          </div>
          <div  onclick="marcarTarefa(${contador})" class="item-nome">
              ${valorInput}
          </div>
           <div class="ediTarefa">
              <button class="editBotao" onclick = "ediTarefa(${contador})"><i class="fa-solid fa-pen-to-square"></i></button>
          </div>
          <div class="item-botao">
              <button onclick="deletar(${contador})" class="delete"><i class="fa-solid fa-trash-can"></i></button>
          </div>
        </div>`;

        main.innerHTML += novoItem;

        input.value = "";
      
        atualizarContagem();
  }
}

function deletar(id){
  var tarefa = document.getElementById(id);

  if (tarefa.classList.contains('clicado')) {
    concluidas--;
  }
  tarefa.remove();

  atualizarContagem();
}

function marcarTarefa(id) {
  var item = document.getElementById(id); 
  var isConcluido = item.classList.contains('clicado'); 

  if (!isConcluido) {
    item.classList.add('clicado'); 
    //verifica se o elemento(tarefa) possui a classe CSS chamada clicado
    var icone = document.getElementById('icone_' + id);
    icone.classList.remove('fa-circle');
    icone.classList.add('fa-circle-check');
    console.log(item.parentNode)
    item.parentNode.appendChild(item);
   
    concluidas++; 
  } else {
    item.classList.remove('clicado'); 
    var icone = document.getElementById('icone_' + id);
    icone.classList.remove('fa-circle-check');
    icone.classList.add('fa-circle');
    concluidas--; 
  }
  atualizarContagem();
}

function ediTarefa(id) {
  const item = document.getElementById(id); // Encontra o elemento da tarefa pelo ID
  const nomeDiv = item.querySelector(".item-nome"); // Seleciona o div que contém o nome da tarefa
  const novoTexto = prompt("Editar Tarefa:", nomeDiv.textContent); 
  
  if (novoTexto !== null && novoTexto.trim() !== "") {
    nomeDiv.textContent = novoTexto.trim(); 
  }
}

input.addEventListener("keyup", function(event){
  if (event.key === "Enter") {
    event.preventDefault();
    adicionar_tar.click();
  }
})

function dianoite() {
  const body = document.body;

  if (body.classList.contains('dark-mode')) {
    body.classList.remove('dark-mode');
    document.getElementById('tema').textContent = '🌙';
  } else {
    body.classList.add('dark-mode');
    document.getElementById('tema').textContent = '🌞'; 
  }
}

[closeModalButton, fade].forEach((el) => {
    el.addEventListener("click", () => toggleModal())
});

document.addEventListener("keydown", function(event) {
    if (event.ctrlKey && event.key === "h") {
      event.preventDefault();
      toggleModal();
    }
  });
  
  
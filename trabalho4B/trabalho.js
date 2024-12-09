let contador = 0
let input = document.getElementById('caixa_tarefa');
let adicionar_tar = document.getElementById('adicionar_tar');
let main = document.getElementById('lista_tar');

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
        input.focus();
  }

}

function deletar(id){
  var tarefa = document.getElementById(id);
  tarefa.remove();
}

function marcarTarefa(id){
  var item = document.getElementById(id);
  var classe = item.getAttribute('class');
  console.log(classe);

  if(classe == "item"){
    item.classList.add('clicado');

    var icone = document.getElementById('icone_'+ id);
    icone.classList.remove('fa-circle');
    icone.classList.add('fa-circle-check');

    item.parentNode.appendChild(item);
  }else{
    item.classList.remove('clicado');

    var icone = document.getElementById('icone_'+ id);
    icone.classList.remove('fa-circle-check');
    icone.classList.add('fa-circle');

  }
}

function ediTarefa(id) {
  const item = document.getElementById(id); // Encontra o elemento da tarefa pelo ID
  const nomeDiv = item.querySelector(".item-nome"); // Seleciona o div que contém o nome da tarefa
  const novoTexto = prompt("Editar Tarefa:", nomeDiv.textContent); // Exibe o prompt para editar
  
  if (novoTexto !== null && novoTexto.trim() !== "") {
    nomeDiv.textContent = novoTexto.trim(); // Atualiza o texto da tarefa
  }
}

input.addEventListener("Keyup", function(event){
  if (event.keyCode === 13) {
    event.preventDefault();
    adicionar_tar.click();
  }
})

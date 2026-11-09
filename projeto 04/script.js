
// Captura os elementos do HTML
const formulario = document.getElementById("formulario");
const campoTarefa = document.getElementById("tarefa");
const lista = document.getElementById("lista");
const contador = document.getElementById("contador");


// Função para atualizar o contador
function atualizarContador() {

    // Guarda a quantidade de tarefas pendentes
    let pendentes = 0;

    // Percorre todas as tarefas da lista
    for (let tarefa of lista.children) {

        // Verifica se a tarefa NÃO está concluída
        if (!tarefa.classList.contains("concluida")) {
            pendentes++;
        }

    }

    // Atualiza o texto na página
    contador.innerText = "Tarefas pendentes: " + pendentes;
}


// Evento executado quando o formulário é enviado
formulario.addEventListener("submit", function(evento) {

    // Impede a página de recarregar
    evento.preventDefault();

    // Pega o texto digitado e remove espaços extras
    const texto = campoTarefa.value.trim();

    // Verifica se o campo está vazio
    if (texto === "") {
        return;
    }

    // Cria um novo elemento de lista
    const novaTarefa = document.createElement("li");

    // Cria um elemento para guardar o texto
    const textoTarefa = document.createElement("span");

    // Coloca o texto digitado dentro do span
    textoTarefa.innerText = texto;


    // Cria o botão de concluir
    const botaoConcluir = document.createElement("button");

    botaoConcluir.innerText = "Concluir";

    // Quando clicar, marca ou desmarca a tarefa
    botaoConcluir.addEventListener("click", function() {

        novaTarefa.classList.toggle("concluida");

        // Atualiza o contador
        atualizarContador();

    });


    // Cria o botão de excluir
    const botaoExcluir = document.createElement("button");

    botaoExcluir.innerText = "Excluir";

    // Adiciona a classe CSS do botão
    botaoExcluir.classList.add("excluir");

    // Quando clicar, remove a tarefa
    botaoExcluir.addEventListener("click", function() {

        novaTarefa.remove();

        // Atualiza o contador
        atualizarContador();

    });


    // Adiciona os elementos dentro da tarefa
    novaTarefa.append(textoTarefa);
    novaTarefa.append(botaoConcluir);
    novaTarefa.append(botaoExcluir);

    // Adiciona a tarefa dentro da lista
    lista.append(novaTarefa);

    // Limpa o campo de texto
    campoTarefa.value = "";

    // Atualiza o contador
    atualizarContador();

});

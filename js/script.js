import { adicionarFilme, buscarFilme, alternarAssistido, apagarFilme } from "./CRUD.JS";

const meuInput = document.getElementById("meuInput");
const formulario = document.getElementById("formulario");
const listaUl = document.getElementById("Lista"); 
const avisoMsg = document.getElementById("avisoMsg");

async function carregarFilmes() {
    listaUl.innerHTML = "";
    const snapshot = await buscarFilme();

    if (!snapshot.exists()){
        avisoMsg.style.display = "block";
        return;
    } else {
        avisoMsg.style.display = "none";
    }

    snapshot.forEach(function(item){
        const dados = item.val();
        const id = item.key;

        const li = document.createElement("li");
        li.className = dados.assistido ? "habit-item completed" : "habit-item";

        li.innerHTML = `
            <div class="habit-info" onclick="mudarStatusFilme('${id}', ${dados.assistido})">
                <input type="checkbox" ${dados.assistido ? "checked" : ""}>
                <span>${dados.nome}</span>
            </div>
            <button class="delete-btn" onclick="deletarFilme('${id}')">Excluir</button>
        `;

        listaUl.appendChild(li);
    });
}

formulario.addEventListener("submit", async function (e) {
    e.preventDefault();
    const texto = meuInput.value.trim(); 

    if (texto === "") {
        alert("Digita o nome de um filme!");
        return;
    }

    await adicionarFilme(texto);
    meuInput.value = "";
    carregarFilmes();
});

window.mudarStatusFilme = async function(id, statusAtual) {
    await alternarAssistido(id, statusAtual);
    carregarFilmes();
};

window.deletarFilme = async function(id) {
    await apagarFilme(id);
    carregarFilmes();
};

carregarFilmes();
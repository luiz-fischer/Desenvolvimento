function formCadastro() {
    let pergunta = document.getElementById("pergunta");

    if ((pergunta.value != "")) {
        let tabela = document.getElementById("tbLista");
        let linha = tabela.insertRow();

        let cel0 = linha.insertCell(0);
        let cel1 = linha.insertCell(1);
        let cel2 = linha.insertCell(2);
        let cel3 = linha.insertCell(3);
        let cel4 = linha.insertCell(4);
        let cel5 = linha.insertCell(5);

        cel0.innerHTML = pergunta.value;
        cel4.innerHTML = "<button value='Editar' class='btn btn-warning' onclick='formEditar(this)'>Editar</button>";
        cel5.innerHTML = "<button value='Excluir' class='btn btn-danger' onclick='formExcluir(this)'>Excluir</button>";
        limparCampos();
    }
}

function limparCampos() {
    let pergunta = document.getElementById("pergunta");

    pergunta.value = "";
}

function formExcluir(obj) {
    let confirma = confirm("Deseja Excluir?");

    if (confirma) {
        obj.parentNode.parentNode.remove();
    }

    limparCampos();
}

var arrayChild = "";
function formEditar(obj) {
    arrayChild = obj.parentNode.parentNode.childNodes;

    let pergunta = document.getElementById("pergunta");

    pergunta.value = arrayChild[0].innerText;
    idade.value = arrayChild[1].innerText;
    genero.value = arrayChild[2].innerText;

    let btnCadastrar = document.getElementById("btnCadastrar").style.display = "none";
    let btnEditar = document.getElementById("btnEditar").style.display = "block";

}
function Alterar() {
    let pergunta = document.getElementById("pergunta");

    arrayChild[0].innerText = pergunta.value;

    let btnCadastrar = document.getElementById("btnCadastrar").style.display = "block";
    let btnEditar = document.getElementById("btnEditar").style.display = "none";

    limparCampos();
}
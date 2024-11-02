import { conectaApi } from "./conectaApi.js";
import constroiCard from "./mostrarProduto.js";

const inputPesquisa = document.querySelector('#pesquisa');

async function buscarProduto() {
    const cards = document.querySelector('#cards');
    const busca = await conectaApi.buscarProduto(inputPesquisa.value);
    let linha = 0;

    while (cards.firstChild) {
        cards.removeChild(cards.firstChild);
    }

    if (busca.length == 0) {
        cards.innerHTML = '<h2>Nenhum produto encontrado na pesquisa.</h2>';
        return;
    }

    busca.forEach((element, index) => {
        if (index % 3 == 0) {
            linha = document.createElement('div');
            linha.className = 'linha';
        }

        linha.appendChild(constroiCard(element.imagem, element.nome, element.preco, element.id));
        cards.appendChild(linha);
    });
}

inputPesquisa.addEventListener('keydown', evento => {
    if (evento.code === "Enter") {
        buscarProduto()
    }
});
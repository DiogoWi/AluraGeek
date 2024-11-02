import { conectaApi } from "./conectaApi.js";

const formulario = document.querySelector('form');

async function criarVideo(evento) {
    evento.preventDefault();

    const nome = formulario.querySelector('input[type=text]').value;
    const valor = Number(formulario.querySelector('input[type=number]').value);
    const imagem = formulario.querySelector('input[type=url]').value;

    try {
        await conectaApi.criarProduto(nome, valor, imagem);
    } catch (error) {
        const mensagem = document.createElement('p');
        mensagem.innerHTML = error;

        if (formulario.lastElementChild.tagName == 'P') {
            formulario.removeChild(formulario.lastChild);
        }
        formulario.appendChild(mensagem);
    }
}

formulario.addEventListener('submit', evento => criarVideo(evento));
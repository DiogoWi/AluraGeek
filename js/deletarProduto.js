import { conectaApi } from "./conectaApi.js";
import { listaProdutos } from "./mostrarProduto.js";

await listaProdutos();

const lixeiras = [...document.querySelectorAll('.lixeira')];

lixeiras.map(elemento => {
    elemento.addEventListener('click', () => {
        conectaApi.deletarProduto(elemento.getAttribute('data-id'));
    })
});
import { conectaApi } from "./conectaApi.js";

const cards = document.querySelector('#cards');

export default function constroiCard(imagem, nome, preco, id) {
    const card = document.createElement('div');
    card.className = 'card';

    preco = preco.toFixed(2).replace('.', ',');
    preco = preco.replace(/(\d)(?=(?:[0-9]{3})+\b)/g, "$1.");

    card.innerHTML = `<img src="${imagem}" alt="imagen do produto">
                        <div class="card--info">
                            <p>${nome}</p>
                            <div class="card--value">
                                <p>R$ ${preco}</p>
                                <img src="imagens/lixeira.png" alt="icone de lixeira" class="lixeira" data-id="${id}">
                            </div>
                        </div>`;
    
    return card;
}

export async function listaProdutos() {
    try {
        const listaProdutos = await conectaApi.Produtos();
        let linha = 0;
        
        listaProdutos.forEach((element, index) => {
            if (index % 3 == 0) {
                linha = document.createElement('div');
                linha.className = 'linha';
            }
    
            linha.appendChild(constroiCard(element.imagem, element.nome, element.preco, element.id));
            cards.appendChild(linha);
        });
    } catch {
        cards.innerHTML = '<h2>Não foi possível carregar a lista de produtos</h2>';
    }
}
async function Produtos() {
    const conexao = await fetch('http://localhost:3000/produtos');
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}

async function criarProduto(nome, preco, imagem) {
    const conexao = await fetch('http://localhost:3000/produtos', {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            nome: nome,
            preco: preco,
            imagem: imagem
        })
    });

    if (!conexao.ok) {
        throw new Error('Não foi possível enviar o produto!');
    }

    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}

async function buscarProduto(termoDeBusca) {
    const conexao = await fetch(`http://localhost:3000/produtos?q=${termoDeBusca}`);
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}

async function deletarProduto(id) {
    const conexao = await fetch(`http://localhost:3000/produtos/${id}`, {
        method: "DELETE"
    });
}

export const conectaApi = {
    Produtos,
    criarProduto,
    buscarProduto,
    deletarProduto
}
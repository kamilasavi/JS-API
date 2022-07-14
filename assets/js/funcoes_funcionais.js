const vetorProduto = 
[
    {
        "produto": "Produto 01",
        "preco": 3.65,
        "descricao": "Lorem ipsum!",
        "em_estoque": true,
        "img": "assets/imgs/img001.jpg"
    },
    {
        "produto": "Produto 02",
        "preco": 100.00,
        "descricao": "Lorem ipsum! Not ipsum!",
        "em_estoque": false,
        "img": "assets/imgs/img002.jpg"
    },
    {
        "produto": "Produto 03",
        "preco": 0.90,
        "descricao": "Lorem ipsum! Not ipsum! Outro ipsum!",
        "em_estoque": true,
        "img": "assets/imgs/img003.jpg"
    },
    {
        "produto": "Produto 04",
        "preco": 7.95,
        "descricao": "Lorem ipsum!",
        "em_estoque": false,
        "img": "assets/imgs/img004.jpg"
    },
    {
        "produto": "Produto 05",
        "preco": 50.99,
        "descricao": "Lorem ipsum! Not ipsum!",
        "em_estoque": false,
        "img": "assets/imgs/img005.jpg"
    },
    {
        "produto": "Produto 06",
        "preco": 1.95,
        "descricao": "Lorem ipsum! Not ipsum! Outro ipsum!",
        "em_estoque": true,
        "img": "assets/imgs/img006.jpg"
    }
]

/**
 * filter utilizado par filtrar itens de um array
 */

const emEstoque = (elemento) =>{
    return elemento.em_estoque === true;
};

console.log('filter',emEstoque);

const preco = vetorProduto.filter((elemento) =>{
    return elemento.preco >= 10.0;
});

console.log('filter',preco);


/**map
 * Map: utilizado para transformar um valor em outro de todos os itens
 */

const converterDolar = (elemento) => {
    const newElemento = {...elemento};
    newElemento.preco = newElemento.preco/5.43;
    return newElemento;
};
const produtos_em_dolar = vetorProduto.map (converterDolar);
console.log('Map', produtos_em_dolar);

const retornaNomeProdutos = (elemento) =>{
    return elemento.produto;
};

const nomesProdutos = vetorProduto.map(retornaNomeProdutos);
console.log(nomesProdutos);


//** reduce - fazer um cálculo com todos os elementos retornando um único valor */

const somaPreco = (totalizador, elemento) =>{
    return totalizador + elemento.preco;
}
const media_preco = vetorProduto.reduce(somaPreco, 0);

console.log('reduce', media_preco)
console.log('reduce: media', media_preco / vetorProduto.length)

const divListaProdutos = document.getElementById("lista-produtos")

const divMediaProdutos = document.getElementById("media-produtos")

//**for(valor of vetor)
// for(indice in vetor) */


function exibirProdutos(vetor) {
    divListaProdutos.innerText = "";
    for (let elemento of vetor) {
        const divProduto = `
            <div class="produto">
            <h1>${elemento.produto}</h1>
            <p>${elemento.descricao}</p>
            <h5>${elemento.preco}</h5>
            </div>
        `;
        divListaProdutos.innerHTML += divProduto;
    }
}


exibirProdutos(vetorProduto);

let estadoFiltroEstoque = false;
const btnFiltraApenasEstoque = document.getElementById('filtro01');
btnFiltraApenasEstoque.onclick = () =>{
    estadoFiltroEstoque = !estadoFiltroEstoque;
    
    if(estadoFiltroEstoque){
        const vetorFiltrado = vetorProduto.filter(emEstoque);
        exibirProdutos(vetorFiltrado);
        btnFiltraApenasEstoque.innerText = "Remover filtro";
        exibirMedia(vetorFiltrado);
    }else{
        exibirProdutos(vetorProduto);
        btnFiltraApenasEstoque.innerText = "Filtrar Apenas em Estoque";
        exibirMedia(vetorProduto);
    }
    
}
    
const exibirMedia = (vetor) => {
    const media_preco = calcularMediaPreco (vetor);
    const divExibirMedia =
    document.getElementById('media');
    divExibirMedia.innerHTML = media_preco.toFixed(2);
};

const calcularMediaPreco = (vetorMedia) => {
    const media_preco = vetorMedia.reduce(somaPreco, 0);
    return media_preco / vetorMedia.length;
}

exibirMedia (vetorProduto);


let estadoConverter = false;
const btnConverter = document.getElementById('converter');
btnConverter.onclick = () =>{
    estadoConverter = !estadoConverter;
    
    if(estadoConverter){
        const vetorFiltrado = vetorProduto.map(converterDolar);
        exibirProdutos(vetorFiltrado);
        btnConverter.innerText = "Converter para Real";
        exibirMedia(vetorFiltrado);
    }else{
        exibirProdutos(vetorProduto);
        btnConverter.innerText = "Converter para Dólar";
        exibirMedia(vetorProduto);
    }
    
}
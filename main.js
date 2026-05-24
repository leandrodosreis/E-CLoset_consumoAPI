'use strict'

async function getDadosProdutos(dados){
    const url =`https://fakestoreapi.com/products/category/${dados}`
    const response = await fetch(url)
    const data = await response.json()
    return data
}

//Dinamica 1
// CRIAR CARD
function criarCard(produto){

    const card = document.createElement('div')
    card.className = 'card'

    // IMAGEM
    const imagem = document.createElement('img')
    imagem.src = produto.image

    // TITULO
    const titulo = document.createElement('h3')
    titulo.textContent = produto.title

    // PREÇO
    const preco = document.createElement('span')
    preco.textContent =`R$ ${produto.price}`

    // APPEND
    card.appendChild(imagem)
    card.appendChild(titulo)
    card.appendChild(preco)

    // EVENTO
    card.addEventListener('click', function(){mostrarDetalhes(produto)})

    return card
}


async function carregarCategoria(categoria){

    const produtos = await getDadosProdutos(categoria)

    const container = document.getElementById('products')

    const cards = produtos.map(criarCard)

    container.replaceChildren(...cards)

    // MOSTRAR HOME
    container.classList.remove('hidden')

    document
        .querySelector('.hero')
        .classList.remove('hidden')

    document
        .querySelector('.categories')
        .classList.remove('hidden')

    // ESCONDER DETALHES
    document
        .getElementById('detalhes')
        .classList.add('hidden')
}

// Tela 2
// MOSTRAR DETALHES
function mostrarDetalhes(produto){

    // SECTIONS
    const products =
        document.getElementById('products')

    const detalhes =
        document.getElementById('detalhes')

    // ESCONDER HOME
    products.classList.add('hidden')

    document
        .querySelector('.hero')
        .classList.add('hidden')

    document
        .querySelector('.categories')
        .classList.add('hidden')

    // MOSTRAR DETALHES
    detalhes.classList.remove('hidden')

    // LIMPAR DETALHES
    detalhes.replaceChildren()


    //Criação tela 2
    // CONTAINER
    const container =
        document.createElement('div')
        container.className = 'detalhes-container'

    // IMAGEM
    const imagem =
        document.createElement('img')
        imagem.src = produto.image

    // INFO
    const info =
        document.createElement('div')
        info.className = 'info'

    // TITULO
    const titulo =
        document.createElement('h2')
        titulo.textContent = produto.title

    // PREÇO
    const preco =
        document.createElement('p')
        preco.textContent = `Preço: ${produto.price}`

    // CATEGORIA
    const categoria =
        document.createElement('p')
        categoria.textContent = `Categoria: ${produto.category}`

    // AVALIAÇÃO
    const avaliacao =
        document.createElement('p')
        avaliacao.textContent = `Avaliação: ${produto.rating.rate}`

    // QUANTIDADE
    const quantidade =
        document.createElement('p')
        quantidade.textContent = `Quantidade: ${produto.rating.count}`

    // BOTÃO COMPRAR
    const comprar =
        document.createElement('button')
        comprar.textContent = 'Comprar'

    // DESCRIÇÃO
    const descricao =
        document.createElement('p')
        descricao.textContent = `Descrição: ${produto.description}`

    // BOTÃO VOLTAR
    const voltar =
        document.createElement('button')
        voltar.textContent = 'Voltar'

    // EVENTO VOLTAR
    voltar.addEventListener('click', () => {

        detalhes.classList.add('hidden')

        products.classList.remove('hidden')

        document
            .querySelector('.hero')
            .classList.remove('hidden')

        document
            .querySelector('.categories')
            .classList.remove('hidden')
    })

    // APPEND INFO
    info.appendChild(titulo)
    info.appendChild(preco)
    info.appendChild(categoria)
    info.appendChild(avaliacao)
    info.appendChild(quantidade)
    info.appendChild(comprar)
    info.appendChild(descricao)
    info.appendChild(voltar)

    // APPEND CONTAINER
    container.appendChild(imagem)
    container.appendChild(info)

    // APPEND DETALHES
    detalhes.appendChild(container)

}

//Categoria da tela 1
carregarCategoria("men's clothing")
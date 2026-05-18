'use strict'

async function getDadosProdutos(dados){
    const url = `https://fakestoreapi.com/${dados}`
    const response = await fetch(url)
    const data = await response.json()
    return data
}
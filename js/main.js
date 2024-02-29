'use strict'

import {getFilmes, getFilme} from "./filmes.js"


function criarCard(filme){

    const card = document.createElement('div')
    const titulo = document.createElement('h2')
    const preco = document.createElement('p')
    const filmeCapa = document.createElement('img')
    const texto = document.createElement('textarea')
    const dataLancamento = document.createElement('p')


    titulo.textContent = filme.nome
    texto.textContent = filme.sinopse
    preco.textContent = filme.valor_unitario
    filmeCapa.src = filme.foto_capa
    dataLancamento.textContent = filme.data_lancamento

    card.append(titulo, texto, preco, filmeCapa, dataLancamento)

    return card
}

async function preencherContainer(){

    const container = document.querySelector('body')

    const filmes = await getFilmes()

    filmes.forEach(filme => {
        const card = criarCard(filme)
        container.appendChild(card)
        console.log(card)
    });

}



preencherContainer()
criarCard()
'use strict'

import {getFilmes} from "./filmes"


function criarCard(filme){

   
    const card = document.createElement('div')
    card.classList.add('flex', 'flex-col','bg-white', 'rounded-lg', 'shadow-lg', 'p-4', 'mb-4', 'transform', 'transition', 'hover:scale-105', 'duration-300', 'max-w-sm', 'mx-auto');

    const titulo = document.createElement('h2')
    titulo.classList.add('text-lg', 'font-bold', 'text-gray-900', 'mb-2', 'text-center');

    const preco = document.createElement('p')
    preco.classList.add('text-md', 'text-gray-800', 'font-semibold', 'mb-2', 'text-center');

    const filmeCapa = document.createElement('img')
    filmeCapa.classList.add('w-full', 'h-full', 'object-cover', 'rounded-lg', 'mb-2');

    const texto = document.createElement('textarea')
    texto.classList.add('hidden');

    const dataLancamento = document.createElement('p')
    dataLancamento.classList.add('hidden');

    card.addEventListener('click', () =>{
        window.location.href = `./pages/filme.html?filme_id=${filme.id}`

    })

    titulo.textContent = filme.nome;
    texto.textContent = filme.sinopse;
    preco.textContent = `Preço: R$${filme.valor_unitario}`;
    filmeCapa.src = filme.foto_capa;
    dataLancamento.textContent = `Lançamento: ${filme.data_lancamento}`;

    card.append(filmeCapa, titulo, preco, dataLancamento, texto);

    return card;
}



async function preencherContainer(){

    const container = document.getElementById('sobre')

    const filmes = await getFilmes()

    filmes.forEach(filme => {
        const card = criarCard(filme)
        container.appendChild(card)
        console.log(card)
    });

}

preencherContainer()
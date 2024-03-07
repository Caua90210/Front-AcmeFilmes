'use strict'

import {getFilmes, getFilme} from "./filmes.js"


function criarCard(filme){
    const card = document.createElement('div')
    // Reduzindo o padding e a margem para tornar o cartão mais compacto
    card.classList.add('flex', 'flex-col','bg-white', 'rounded-lg', 'shadow-lg', 'p-4', 'mb-4', 'transform', 'transition', 'hover:scale-105', 'duration-300', 'max-w-sm', 'mx-auto');

    const titulo = document.createElement('h2')
    // Mantendo o tamanho do título, mas você pode ajustar se necessário
    titulo.classList.add('text-lg', 'font-bold', 'text-gray-900', 'mb-2');

    const preco = document.createElement('p')
    // Ajustando o tamanho do texto para economizar espaço
    preco.classList.add('text-md', 'text-gray-800', 'font-semibold', 'mb-2');

    const filmeCapa = document.createElement('img')
    // Reduzindo a altura da imagem para tornar o cartão menor
    filmeCapa.classList.add('w-full', 'h-full', 'object-cover', 'rounded-lg', 'mb-2');

    const texto = document.createElement('textarea')
    // Ajustando a altura do textarea para torná-lo mais compacto
    texto.classList.add('hidden');

    const dataLancamento = document.createElement('p')
    // Ajustando o estilo do texto para manter a consistência
    dataLancamento.classList.add('hidden');

    titulo.textContent = filme.nome;
    texto.textContent = filme.sinopse;
    preco.textContent = `Preço: R$${filme.valor_unitario}`;
    filmeCapa.src = filme.foto_capa;
    dataLancamento.textContent = `Lançamento: ${filme.data_lancamento}`;

    card.append(filmeCapa, titulo, preco, dataLancamento, texto);

    return card;
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
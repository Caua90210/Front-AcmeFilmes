'use strict'

import {getFilmes, getFilme, postFilme} from "./filmes.js"


function criarCard(filme){

    const ListaCards = document.cre

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

    titulo.textContent = filme.nome;
    texto.textContent = filme.sinopse;
    preco.textContent = `Preço: R$${filme.valor_unitario}`;
    filmeCapa.src = filme.foto_capa;
    dataLancamento.textContent = `Lançamento: ${filme.data_lancamento}`;

    card.append(filmeCapa, titulo, preco, dataLancamento, texto);

    return card;
}


async function preencherContainer(){

    const container = document.getElementById('lista')

    const filmes = await getFilmes()

    filmes.forEach(filme => {
        const card = criarCard(filme)
        container.appendChild(card)
        console.log(card)
    });

}



preencherContainer()

const filme ={
    "nome": "Bastardos Inglórios",
            "sinopse": "Em Bastardos Inglórios, na Segunda Guerra Mundial, a França está ocupada pelos nazistas. O tenente Aldo Raine (Brad Pitt) é o encarregado de reunir um pelotão de soldados de origem judaica, com o objetivo de realizar uma missão suicida contra os alemães. O objetivo é matar o maior número possível de nazistas, da forma mais cruel possível. Paralelamente Shosanna Dreyfuss (Mélanie Laurent) assiste a execução de sua família pelas mãos do coronel Hans Landa (Christoph Waltz), o que faz com que fuja para Paris. Lá ela se disfarça como operadora e dona de um cinema local, enquanto planeja um meio de se vingar.",
            "duracao": "02:33:00",
            "data_lancamento": "2009-10-09",
            "data_relancamento": "2017-02-02",
            "foto_capa": "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/90/43/36/20096333.jpg",
            "valor_unitario": 50
}
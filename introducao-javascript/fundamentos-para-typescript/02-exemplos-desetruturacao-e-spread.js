// Desestruturação

<<<<<<< HEAD
const arrayDeFrutas = ['maçã', 'banana', 'morango']
=======
const usuario = {
    nome: 'Joao',
    idade: 17,
    cidade: 'Cataguases',
}
const cliente = {
    nome: 'Cleiton',
    idade: 92,
    cidade: 'Londes',
}
const arrayDeFrutas = ['maçã', 'banana', 'morango']
console.log(arrayDeFrutas)
>>>>>>> 4f4ea2f (Atualizado 2026?)
const frutaMaca = arrayDeFrutas[0]

const [fruta1, fruta2, fruta3] = arrayDeFrutas

<<<<<<< HEAD
=======
const { nome, idade, cidade} = usuario
const { nomeCliente, idadeCliente, cidadeCliente} = cliente

console.log(nome)

>>>>>>> 4f4ea2f (Atualizado 2026?)
// console.log(fruta1)

// const varA = ['A']
// const varB = 'A'
// const nome = 'DANIEL'

// console.log(varA)
// console.log(varB)
// console.log( varA[0] === nome[1] )
// console.log('varA' , typeof varA)
// console.log('varA é array ?' , Array.isArray(varA))
// console.log('varA[0]' , typeof varA[0])
// console.log(nome[0], nome[1], nome[2], nome[3], nome[4], nome[5])
// console.log(nome)

// return;
async function buscaCep(url){
    try {
        const response = await fetch(url).then(respostaDaApi => respostaDaApi.json())
        return response;
        // if(response.status !== 200){
        //     return console.log('ocorreu um erro em sua requisição')
        // }

    } catch (error) {
        console.error(error)
    }
}

const cep = '36772182'
const url = `http://viacep.com.br/ws/${cep}/json/`

const divResposta = document.getElementById('resposta')
const btn = document.getElementById('btn')
btn.addEventListener('click', async () => {
    const prevTag = document.createElement('prev')
    const response = await buscaCep(url);
    prevTag.innerHTML = JSON.stringify(response, null, 2)
    divResposta.appendChild(prevTag)
    console.log('response', response)
})



// const verificaCep = await fetch(url)
// console.log(verificaCep)

// assincronismo 
// const [responseServico1, responseServico2] = await Promise.all(servico1, servico2) => Array com 2 respostas
// console.log('primeiro log')
// setTimeout(() => {
//     console.log('segundo log')
// }, 0) // 5s -> 1000ms é igual a 1s
// console.log('terceiro log')


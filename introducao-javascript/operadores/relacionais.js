// Igual (==): 5 == 5
// Diferente (!=): 8 != 80
// Maior que (>): 12 > 11
// Menor que (<): 11 < 12
// Maior ou igual (>=): 18 >= 17
// Menor ou igual (<=): 16 <= 16

const maior = 5 > 4
const menor = 4 < 5
const maiorOuIgual = 5 >= 5
const menorOuIgual = 10 <= 20

console.log(' maior: ', maior)
console.log(' menor: ', menor)
console.log(' maiorOUIgual: ', maiorOuIgual)
console.log(' menorOuIgual: ', menorOuIgual)

// O cliente dispensa acompanhamento da instalacao ? ** ERRADO
const naoAcompanhaInstalacao = true
// Voce deseja acompanhar a instalacao? ** CORRETO
const acompanharInstalacao = true


// Igualdade simples e estrita
// Igualdade simples -> não leva em consideração o tipo
const stringENumberSaoIguais = 5 == "5"

// Igualdade estrita -> leva em consideração o tipo
const stringENumberNaoSaoIguais = 5 === "5"

console;log('Igualdade simples: ', stringENumberSaoIguais)
console;log('Igualdade estrita: ', stringENumberNaoSaoIguais)

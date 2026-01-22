// Tipos Primitivos
let nome: string = 'Daniel'
let idade: number = 34
let matriculaAtiva: boolean = true

// Inferência de Tipos
let segundoNome = 'Ventura de Almeida'

// Arrays
let notas: number[] = [8.5, 9, 10]

let alunos: string[] = ['Daniel', 'João Pedro', 'Helena', 'Tarcísio']

// Funções
function validaSeEhPar(n1: number, n2: number): boolean | undefined {
    if (n1 === 0 || n2 === 0) return undefined;

    const soma = n1 + n2;
    const isPar: boolean = soma % 2 === 0;

    return isPar;
}

type TCurso = {
    nome: string
    cargaHoraria: number
    cidade?: string
}


interface IEndereco {
    rua: string
    numero: string
}


// Exemplo de uso para evitar aviso de não utilizado:
const enderecoAluno: IEndereco = { rua: 'Rua das Flores', numero: '123' }

interface IAluno {
    nome: string
    idade: number
    cidade: string
    curso: TCurso
}

type ICliente = Pick<IAluno, 'nome' | 'idade'>

type ICliente2 = Omit<IAluno, 'curso' | 'cidade'>

let aluno: IAluno = {
    nome: 'Daniel',
    cidade: 'Cataguases',
    curso: {
        nome: 'RPV Senai',
        cargaHoraria: 1500
    },
    idade: 34
};



























// const input = document.getElementById("inputTarefa")
// const button = document.getElementById("btnAdicionar")
// const lista = document.getElementById("listaTarefas")
// const inputError = document.getElementById("erroInput")

// const itemLista = document.createElement("li")

// button.addEventListener('click', () => {
//     const tarefa = input.value.trim();

//     if (tarefa.length === 0) {
//         inputError.textContent = 'Campo obrigatório.'
//         return;
//     }

//     if (tarefa.length < 3) {
//         inputError.textContent = 'Mínimo de 3 caracteres.'
//         return;
//     }


//     const item = document.createElement('li')
//     item.textContent = tarefa
//     lista.appendChild(item)

//     input.value = ""
// })
// 1

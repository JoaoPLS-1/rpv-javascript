// // Tipos Primitivos
// let nome: string = 'Daniel'
// let idade: number = 34
// let matriculaAtiva: boolean = true
// // Inferência de Tipos
// let segundoNome = 'Ventura de Almeida'
// // Arrays
// let notas: number[] = [8.5, 9, 10]
// let alunos: string[] = ['Daniel', 'João Pedro', 'Helena', 'Tarcísio']
// // Funções
// function validaSeEhPar(n1: number, n2: number): boolean | undefined {
//     if (n1 === 0 || n2 === 0) return undefined;
//     const soma = n1 + n2;
//     const isPar: boolean = soma % 2 === 0;
//     return isPar;
// }
// type TCurso = {
//     nome: string
//     cargaHoraria: number
//     cidade?: string
// }
// interface IEndereco {
//     rua: string
//     numero: string
// }
// // Exemplo de uso para evitar aviso de não utilizado:
// const enderecoAluno: IEndereco = { rua: 'Rua das Flores', numero: '123' }
// interface IAluno {
//     nome: string
//     idade: number
//     cidade: string
//     curso: TCurso
// }
// type ICliente = Pick<IAluno, 'nome' | 'idade'>
// type ICliente2 = Omit<IAluno, 'curso' | 'cidade'>
// let aluno: IAluno = {
//     nome: 'Daniel',
//     cidade: 'Cataguases',
//     curso: {
//         nome: 'RPV Senai',
//         cargaHoraria: 1500
//     },
//     idade: 34
// };
var input = document.getElementById("inputTarefa");
var button = document.getElementById("btnAdicionar");
var lista = document.getElementById("listaTarefas");
var inputError = document.getElementById("erroInput");
var listaTarefas = [];
function renderizarTarefas() {
    lista.innerHTML = "";
    listaTarefas.forEach(function (tarefa, index) {
        var li = document.createElement("li");
        li.textContent = tarefa.titulo;
        if (tarefa.concluido === true) {
            li.classList.add('concluida');
        }
        li.addEventListener('click', function () {
            tarefa.concluido = !tarefa.concluido;
            renderizarTarefas();
        });
        lista.appendChild(li);
    });
}
function adicionarTarefa() {
    inputError.textContent = ""; //Input de erro limpo
    var texto = input.value.trim(); // valor do input salvo na var texto (trim retira o excesso de espaço)
    if (texto.length === 0) {
        inputError.textContent = 'Campo obrigatório.';
        return;
    }
    if (texto.length < 3) {
        inputError.textContent = 'Mínimo de 3 caracteres.';
        return;
    }
    var novaTarefa = {
        titulo: texto,
        concluido: false
    };
    listaTarefas.push(novaTarefa);
    input.value = "";
    input.focus();
    renderizarTarefas();
}
button.addEventListener('click', adicionarTarefa);
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

const input = document.getElementById("inputTarefa")
const button = document.getElementById("btnAdicionar")
const lista = document.getElementById("listaTarefas")
const inputError = document.getElementById("erroInput") 

const itemLista = document.createElement("li")

// itemLista.textContent = "estudar HTML"

// lista.appendChild(itemLista)

let listaDeTarefas = []

button.addEventListener('click', () => {
    const tarefa = input.value.trim();
    if (tarefa.length === 0) {
        inputError.textContent = 'Campo obrigatório.'
        return;
    } else if (tarefa.length < 3) {
        inputError.textContent = 'Mínimo de 3 caracteres.'
        return;
    } else {
        const item = document.createElement('li')
        item.textContent = tarefa
        lista.appendChild(item)

        input.value = ""
    }
    
    // const item = document.createElement('li')
    // item.textContent = tarefa
    // lista.appendChild(item)
    // listaDeTarefas.push(tarefa) //Pega o "valor", ou seja, o texto que está no imput e joga dentro da posição do array

    // listaDeTarefas.push('estudar HTML')
    // listaDeTarefas.push('estudar CSS')

    // listaDeTarefas.forEach(element => {
    //     // const item = document.createElement('li')
    //     // item.textContent = element
    //     // lista.appendChild(item)

    // });

})
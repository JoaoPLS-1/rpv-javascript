const input = document.getElementById("inputTarefa")
const button = document.getElementById("btnAdicionar")
const lista = document.getElementById("listaTarefas")
const inputError = document.getElementById("erroInput") 

const itemLista = document.createElement("li")

// itemLista.textContent = "estudar HTML"

// lista.appendChild(itemLista)

// let listaDeTarefas = [] nao é preciso um array usando o metodo que está em funcionamento

button.addEventListener('click', () => {
    const tarefa = input.value.trim(); //Tarefa recebendo o valor(conteúdo) do imput
    if (tarefa.length === 0) {
        inputError.textContent = 'Campo obrigatório.'
        return;
    }
    if (tarefa.length < 3) {
        inputError.textContent = 'Mínimo de 3 caracteres.'
        return;
    }  // Fazendo validação para o scan criar imput erro
        const item = document.createElement('li') //Coloca o item para criar o li que gera a lista
        item.textContent = tarefa //Faz com que o elemento criado receba o conteudo do imput que a tarefa está recebendo
        lista.appendChild(item)
        inputError.textContent = '' //Limpando o valor do span de erro após passar condição do if
        input.value = "" //Limpando o valor do imput
    
    
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
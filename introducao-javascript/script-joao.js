const tituloDaHome = document.getElementById("title-home");

tituloDaHome.innerHTML = "Joao"
tituloDaHome.style.color = "#c2c2c2"
tituloDaHome.setAttribute("style", "color: #101010; font-size: 80px" )

const idHome = document.getElementById("home")
console.log('innerText', idHome.innerText)
console.log('innerHTML', idHome.innerHTML)

const buttonHome = document.getElementById("btn-home")

buttonHome.innerHTML = "Clique aqui"
// Tirando apenas o alerta para a atividade
// buttonHome.addEventListener('click', () => {
//     alert('Você clicou no botão! ')
// })

// Ao clicar no botão
// O h1 da página deverá receber o seguinte texto: Seu Futuro começa hoje!!!
const classBg2 = document.querySelector(".bg2")

buttonHome.addEventListener('click', () => {
    tituloDaHome.innerHTML = "Seu Futuro começa hoje!!!"
    classBg2.setAttribute("style", "background-color: red")
})

const secondTitle = document.getElementById("second-title")
console.log('bg2', classBg2)
console.log('secondTitle', secondTitleId)

// mude a cor do background-color de bg2 para red ao clicar no botão 

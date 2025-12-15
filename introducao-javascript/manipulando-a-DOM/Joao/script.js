const mainElement = document.createElement('main')
const h1Element = document.createElement('h1')
const pElement = document.createElement('p')
const spanElement = document.createElement('span')

const bodyElement = document.querySelector('body')

h1Element.innerHTML = "João Pedro Luciano"
pElement.innerHTML = "Desenvolvedor"
spanElement.innerHTML = "Cataguases - MG"

mainElement.classList.add('flex', 'flex-col', 'gap-4')

h1Element.style.fontSize = '2.4rem'
pElement.style.fontSize = '1.8rem'
spanElement.style.fontSize = '1.4rem'

bodyElement.appendChild(mainElement)
mainElement.appendChild(h1Element)
mainElement.appendChild(pElement)
mainElement.appendChild(spanElement)

function ifReset(position){
    const arrayCard = [cardFiat, cardFerrari, cardJeep, cardRam] 
    if (arrayCard[position].style.backgroundColor === "red") {
        resetarCoresDeFundoPadrao()
    } else {
    resetarCoresDeFundoPadrao()
    arrayCard[position].style.backgroundColor = 'red'
}
}

function resetarCoresDeFundoPadrao() {
    cardFiat.style.backgroundColor = '#202020'
    cardFerrari.style.backgroundColor = '#202020'
    cardJeep.style.backgroundColor = '#202020'
    cardRam.style.backgroundColor = '#202020'
}

const cardFiat = document.getElementById("fiat")
cardFiat.addEventListener('click', () => {
   ifReset(0)


})

const cardFerrari = document.getElementById("ferrari")
cardFerrari.addEventListener('click', () => {
   ifReset(1)


})

const cardJeep = document.getElementById("jeep")
cardJeep.addEventListener('click', () => {
   ifReset(2)

})

const cardRam = document.getElementById("ram")
cardRam.addEventListener('click', () => {
   ifReset(3)
})

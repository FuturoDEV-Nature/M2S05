const horasElemento = document.querySelector('.hour strong')
const minutosElemento = document.querySelector('.minutes strong')
const segundosElemento = document.querySelector('.seconds strong')
const buttonElemento = document.querySelector('button')

function relogio() {
    // console.log('chamando a cada 1s')
    const dataAtual = new Date()
    const horas = dataAtual.getHours().toString().padStart(2, '0')
    const minutos = dataAtual.getMinutes().toString().padStart(2, '0')
    const segundos = dataAtual.getSeconds().toString().padStart(2, '0')
    //  padEnd(...)

    horasElemento.innerHTML = horas
    minutosElemento.innerHTML = minutos
    segundosElemento.innerHTML = segundos
}

const idIntervaloRelogio = setInterval(relogio, 1000)


buttonElemento.addEventListener('click', () => {
    clearInterval(idIntervaloRelogio)
})

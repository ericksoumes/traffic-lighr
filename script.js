const redLight = document.getElementById('red-light')
const yellowLight = document.getElementById('yellow-light')
const greenLight = document.getElementById('green-light')
const btnGreen = document.querySelector('.btn-green')
const btnRed = document.querySelector('.btn-red')

function turnGreen(){
    redLight.classList.replace('red-able', 'red-disable')
    greenLight.classList.replace('green-disable', 'green-able')
}

function turnRed(){
    greenLight.classList.replace('green-able', 'green-disable')
    yellowLight.classList.replace('yellow-disable', 'yellow-able')
    setTimeout(() => {
        yellowLight.classList.replace('yellow-able', 'yellow-disable')
        redLight.classList.replace('red-disable', 'red-able')
    }, 2000)
}

btnGreen.addEventListener('click', e => {
    greenLight.classList == 'green-able' ? alert(`It's already green!`) : setTimeout(turnGreen, 1500)
})

btnRed.addEventListener('click', e => {
    redLight.classList == 'red-able' ? alert(`Take a look. It's already red!`) : setTimeout(turnRed, 1500)
})
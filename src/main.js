const randomNumber = Math.round(Math.random()* 10)

let xAttempts = 1


function handleTryClick(event){
    event.preventDefault() // nao faca o padrao desse evento

    let inputNumber = document.querySelector('#inputNumber')

    if(Number(inputNumber.value) == randomNumber){
        document.querySelector(".screen1").classList.add("hide")
        document.querySelector(".screen2").classList.remove("hide")

        document.querySelector(".screen2 h2").innerHTML =  "voce acertou em "+ xAttempts + " tentativas"
    }
    console.info(xAttempts)
    inputNumber.value = ""
    xAttempts++
}

function volta(){
    document.querySelector(".screen1").classList.remove("hide")
    document.querySelector(".screen2").classList.add("hide")
}

// Eventos

const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")

btnTry.addEventListener('click',handleTryClick)
btnReset.addEventListener('click', volta)
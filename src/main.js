const randomNumber = Math.round(Math.random()* 10)

let xAttempts = 1


function handleClick(event){
    event.preventDefault()

    let inputNumber = document.querySelector('#inputNumber')

    if(Number(inputNumber.value) == randomNumber){
        document.querySelector(".screen1").classList.add("hide")
        document.querySelector(".screen2").classList.remove("hide")

        document.querySelector(".screen2 h2").innerHTML =  "voce acertou em "+ xAttempts + " tentativas"
    }
    console.info(xAttempts)
    xAttempts++
}

function volta(){
    document.querySelector(".screen1").classList.remove("hide")
    document.querySelector(".screen2").classList.add("hide")
}
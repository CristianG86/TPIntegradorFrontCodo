let valueTicket = 200;
let alertEl = document.getElementById("alert-el")
let alertDiv = document.getElementById("alertcont")
document.getElementById("inputamount").value = 1

let buttonestudiante = document.getElementById("buttonestudiante")
let buttontrainee = document.getElementById("buttontrainee")
let buttonjunior = document.getElementById("buttonjunior")
function success(){
    Swal.fire({ 
    title: '¡Excelente!',
    text: '¡Verás el resumen a pagar!',
    icon: 'succes',
})}

let botonsummary = document.getElementById("botonsummary")
let count = 0;
function changebgc(){
    if(count === 0){
        alertEl.classList.add('blue');
        count = 1;
    }
    else{
        alertEl.classList.remove('blue');
        count = 0;
    }

}
botonsummary.addEventListener('click',changebgc ,true)

function selectestudiante (){

    document.getElementById("categoria-el").value = "estudiante"
}
function selecttrainee (){

    document.getElementById("categoria-el").value = "trainee"
}
function selectjunior (){

    document.getElementById("categoria-el").value = "junior"
}

buttonestudiante.addEventListener('click',selectestudiante,true)
buttontrainee.addEventListener('click',selecttrainee,true)
buttonjunior.addEventListener('click',selectjunior,true)

function summary() {
    let amountEl = Math.ceil(document.getElementById("inputamount").value)
    let categoryEl = document.getElementById("categoria-el").value
    document.getElementById("inputamount").value = amountEl 

    if (amountEl < 0) {
        amountEl = 1
        document.getElementById("inputamount").value = amountEl 
    } else if (amountEl > 10) {
        amountEl = 10
        document.getElementById("inputamount").value = amountEl 
        var tag = document.createElement("div")
        tag.classList.add('alert-danger')
        tag.classList.add('alert')
        let text = document.createTextNode("Cantidad máxima de entradas por persona: 10");
        tag.appendChild(text);
        alertDiv.appendChild(tag);
    }

    if (categoryEl == "estudiante") {
        let totalPay = valueTicket * amountEl
        totalPay = totalPay * 0.20
        alertEl.innerText = "Total a Pagar: $"
        alertEl.innerText = alertEl.innerText + " " + totalPay
        success()
    } else if (categoryEl == "trainee") {
        let totalPay = valueTicket * amountEl
        totalPay = totalPay * 0.50
        alertEl.innerText = "Total a Pagar: $"
        alertEl.innerText = alertEl.innerText + " " + totalPay
        success()
    } else if (categoryEl == "junior") {
        let totalPay = valueTicket * amountEl
        totalPay = totalPay * 0.85
        alertEl.innerText = "Total a Pagar: $"
        alertEl.innerText = alertEl.innerText + " " + totalPay
        success()
    } else {
        let totalPay = valueTicket * amountEl
        alertEl.innerText = "Total a Pagar: $"
        alertEl.innerText = alertEl.innerText + " " + totalPay
        success()
    }
}


function erase() {
    let cantidadEl = Math.ceil(document.getElementById("inputamount").value)
    let categoriaEl = document.getElementById("categoria-el").value
    document.getElementById("inputamount").value = 1
    alertEl.innerText = "Total a Pagar: $"
}
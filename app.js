let valueTicket = 200;
let alertEl = document.getElementById("alert-el")
let alertDiv = document.getElementById("alertcont")
document.getElementById("inputamount").value = 1

function success(){
    Swal.fire({ 
    title: '¡Excelente!',
    text: '¡Verás el resumen a pagar!',
    icon: 'succes',
})}

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
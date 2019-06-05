function somar(){
    var tn1 = document.querySelector("input#txtn1")

    var tn2 = document.querySelector("input#txtn2")

    var resultado = document.querySelector("div#resultado")

    var n1 = Number(tn1.value)

    var n2 = Number(tn2.value)

    var s = n1 + n2

    resultado.innerHTML = `A Soma entre ${n1} + ${n2} é : <strong>${s}</strong>`
}

document.querySelector("#somar").addEventListener('click', somar)
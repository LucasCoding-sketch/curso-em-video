function calcular() {
    const limite = 60
    var velocidadeTxt = window.document.getElementById('velocidade')
    var elementToResultado = document.querySelector('div#resultado')

    var velocidade = Number(velocidadeTxt.value)
    elementToResultado.innerHTML = `
        <p>Sua velocidade atual é <strong>${velocidade}</strong></p>
    `

    if (velocidade >= limite) {
        elementToResultado.innerHTML += `
        <p>Você ultapasou o limite de ${limite} Km/h. <strong>MULTADO</strong></p>
        `
    }

    elementToResultado.innerHTML += '<p>Difija sempre com o sinto de segurança</p>'
}


window.document.querySelector('input#calcular').addEventListener('click', calcular)
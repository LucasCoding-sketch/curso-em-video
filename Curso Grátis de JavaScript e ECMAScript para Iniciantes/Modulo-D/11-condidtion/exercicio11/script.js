function validar(event){
    event.preventDefault()
    
    var paisDestino = 'Brasil'

    var paisOrigem = document.getElementById('pais').value

    var resultado = document.getElementById('resultado')

    if (paisDestino.toUpperCase() != paisOrigem.toUpperCase()){
        resultado.innerHTML = 'Você é <strong>Extrangeiro</strong>'
    } else {
        resultado.innerHTML = 'Você é <strong>Nativo</strong>'
    }
}


document.querySelector('form#validaExtrangeiro').addEventListener('submit', validar)
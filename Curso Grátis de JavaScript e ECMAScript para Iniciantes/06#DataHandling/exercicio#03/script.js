var um_numero = window.prompt('Informe um número:')
var outro_numero = Number.parseFloat(window.prompt('Informe outro número'))

um_numero = Number.parseInt(um_numero)
var resultado = um_numero + outro_numero

window.alert("Resposta " + resultado)
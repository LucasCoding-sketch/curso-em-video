function calcularTabuada(event){
    event.preventDefault()
    console.log('calcularTabuada')
    let numerator = document.getElementById('numerator').value
    let resultDiv = document.querySelector('#resultError')
    resultDiv.innerHTML == ""
    document.querySelector('#result').innerHTML = ""

    if(isNaN(numerator)|| numerator.length == 0){
        
        var div = document.createElement('div')

        div.setAttribute('role', 'alert')
        div.classList.add('alert', 'alert-warning', 'alert-dismissible', 'fade', 'show')
        div.innerHTML = '<span><strong>informe um numero valido</strong></span><button class="close" data-dismiss="alert"><span aria-hidden="true">x</span></button>'
        resultDiv.append(div)
    }else{
       for (let index = 1; index <= 10; index++) {
           let options = document.createElement('option')
           options.innerHTML = `${index} X ${numerator} = ${index * numerator}`
           document.querySelector('#result').append(options)
       } 
    }
}
document.querySelector('form#calcularTabuada').addEventListener('submit',calcularTabuada)
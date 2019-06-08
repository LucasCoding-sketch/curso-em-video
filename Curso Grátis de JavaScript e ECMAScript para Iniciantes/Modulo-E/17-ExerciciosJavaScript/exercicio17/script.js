function showErrorResult(message){
    event.preventDefault()
    var resultDiv = document.querySelector('#result')
    var div = document.createElement('div')

    div.setAttribute('role', 'alert')
    div.classList.add('alert', 'alert-warning', 'alert-dismissible', 'fade', 'show')
    div.innerHTML = `<span><strong>${message}</strong></span><button class="close" data-dismiss="alert"><span aria-hidden="true">x</span></button>`
    resultDiv.append(div)
}



function getBegin(){
    var begin = document.querySelector('input#begin')

    if (begin.value.length == 0){
        showErrorResult("Numero De Inicio é obrigatório")
    } else {
        return Number(begin.value)
    }
}


function getEnd(){
    var begin = document.querySelector('input#end')

    if (begin.value.length == 0){
        showErrorResult("Numero De Fim é obrigatório")
    } else {
        return Number(begin.value)
    }
}



function getStep(){
    var begin = document.querySelector('input#step')

    if (begin.value.length == 0){
        showErrorResult("Numero De Passo é obrigatório")
    }else if(begin.value <= 0){
        showErrorResult("Numero De Passo é deve ser maio que 0, estamos rodando com 1")
        return 1
    } else {
        return Number(begin.value)
    }
}


function addNinja(text){
    var resultPlace = document.getElementById('resultPlace')
    var image = document.createElement('img')
    var spam = document.createElement('span')

    image.setAttribute('src', 'ninja.png')
    spam.innerHTML = text
    spam.append(image)
    resultPlace.append(spam)
}


function stepByStep(event){
    event.preventDefault()
    

    for(var i = getBegin(); i <=  getEnd(); i+=getStep()){
        addNinja(i)
    }
    //addHappy(i)
}

document.querySelector('#stepByStep').addEventListener('submit', stepByStep)
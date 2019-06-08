function addInfoClass(htmlElement){
    htmlElement.classList.remove('alert-danger')
    htmlElement.classList.add('alert', 'alert-info')
}


function addDangerClass(htmlElement){
    htmlElement.classList.remove('alert-info')
    htmlElement.classList.add('alert', 'alert-danger')
}


function verify(){
    const ZERO = 0

    var date  = new Date()

    var year = date.getFullYear()

    var informedYear = document.getElementById('textyear').value

    var result = document.querySelector('div#result')

    var radioGen = document.getElementsByName('radsex')

    if (informedYear.length == ZERO || Number(informedYear) > year){
        result.innerHTML = 'Verifique o ano e tente novamente.'
        addDangerClass(result)
    } else {        
        var yearOld = year - Number(informedYear)

        var genere = 'undefined genere'

        if (radioGen[0].checked){
            genere = radioGen[0].value
        } else {
            genere = radioGen[1].value
        }

        result.innerHTML = `${yearOld} + ${genere}`
        addInfoClass(result)
    }
}

document.querySelector("input#verify").addEventListener('click', verify)
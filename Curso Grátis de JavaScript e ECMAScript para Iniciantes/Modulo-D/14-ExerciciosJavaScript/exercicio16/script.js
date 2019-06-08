function addInfoClass(htmlElement){
    htmlElement.classList.remove('alert-danger')
    htmlElement.classList.add('alert', 'alert-info')
}


function addDangerClass(htmlElement){
    htmlElement.classList.remove('alert-info')
    htmlElement.classList.add('alert', 'alert-danger')
}


function defineGenere(){

    var radioGen = document.getElementsByName('radsex')

    if (radioGen[0].checked){
        return radioGen[0].value
    } else {
        return radioGen[1].value
    }
}


function verify(){
    const ZERO = 0

    var year = new Date().getFullYear()

    var informedYear = document.getElementById('textyear').value

    var result = document.querySelector('div#result')

    var isZeroInformadYearSize = informedYear.length == ZERO

    var informedYearIsLessThanActualYear = Number(informedYear) > year

    if (isZeroInformadYearSize || informedYearIsLessThanActualYear){
        result.innerHTML = 'Verifique o ano e tente novamente.'
        addDangerClass(result)
    } else {        
        var yearOld = year - Number(informedYear)

        var genere = defineGenere()

        result.innerHTML = `Detectado ${genere} de ${yearOld} anos!`
        addInfoClass(result)
    }
}

document.querySelector("input#verify").addEventListener('click', verify)
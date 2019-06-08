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


function htmlImageByAgeAndGenere(age, genere){

    var image = document.createElement('img')

    var srcAgeCategory = ''

    var srcGenenere = ''

    if (age >= 0 && age  < 10){
        srcAgeCategory = 'bebe' 
    } else if ( age < 21 ){
        srcAgeCategory = 'jovem' 
    } else if (age < 50){
        srcAgeCategory = 'adulto' 
    } else {
        srcAgeCategory = 'idoso' 
    }

    if(genere == "Homem"){
        srcGenenere = 'homem'
    }else{
        srcGenenere = 'mulher'
    }

    image.setAttribute('id', 'imageGenere')
    image.setAttribute('src', `src/${srcAgeCategory}-${srcGenenere}.png`)

    return image
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

        var image= htmlImageByAgeAndGenere(yearOld, genere)

        result.innerHTML = `Detectado ${genere} de ${yearOld} anos!`
        addInfoClass(result)
        result.append(image)
    }
}


document.querySelector("input#verify").addEventListener('click', verify)
const ZERO = 0
const ONE  = 1

let informedNumbers = []

document.querySelector("form#show").addEventListener('submit', (event) => { event.preventDefault() })

let getNumber = () => { return window.document.querySelector('input#number').value }

let hasSomeContent = (inputText) => { return inputText.length > 0 }

let addToArray = (currentArray, inputData) => {
    if (currentArray.indexOf(inputData) < ZERO) {
        currentArray.push(inputData)
    }
    return currentArray
}


let updateSelectElement = (currentArray) => {
    let selectElement = window.document.querySelector('select#showResult')
    $('#showResult').empty()
    currentArray.forEach(e => {
        let optionElement = window.document.createElement('option')
        optionElement.innerHTML = e
        selectElement.append(optionElement)
    })
}


window.document.querySelector('#add').addEventListener('click',()=>{
    if (hasSomeContent(getNumber())){
        addToArray(informedNumbers, getNumber())
        informedNumbers.sort()
        updateSelectElement(informedNumbers)
        window.document.querySelector('input#number').value = ''
    }else{
        alert("Informe um número")
    }
})


let displayResultSummary = (great, less, sum, median)=>{
    $('#displayResultSummary').empty()
    let ul = window.document.createElement('ul')
    document.querySelector("#displayResultSummary").append(ul)
    datas = [['Maior', great], ['Menor', less],['Soma',sum],['Media',median]]
    
    datas.forEach((e)=>{
        console.log(e[0])
        console.log(e[1])
        let li = window.document.createElement('li')
        li.innerHTML = `${e[0]} : <strong>${e[1]}</strong>.`
        ul.append(li)
    })
}


window.document.querySelector('#showResultAdded').addEventListener('click',()=>{
    if (!informedNumbers.length < ONE){
        let greatThan = informedNumbers[informedNumbers.length -1];
        let lessThan  = informedNumbers[0];
        let sum       = informedNumbers.reduce((a,b)=>(Number(a)+Number(b)))
        let median    = sum / informedNumbers.length

        displayResultSummary(greatThan,lessThan, sum, median)
    }
})

const ZERO = 0

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
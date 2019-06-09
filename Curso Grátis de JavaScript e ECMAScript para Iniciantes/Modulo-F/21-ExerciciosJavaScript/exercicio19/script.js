const ZERO = 0
document.querySelector("form#show").addEventListener('submit',(event)=>{event.preventDefault()})

let getNumber = ()=>{return window.document.querySelector('input#number').value}

let hasSomeContent = (inputText)=>{return inputText.length>0}

let addToArray = (currentArray, inputData)=>{
    if(currentArray.indexOf(inputData) < 0){
        currentArray.push(inputData)
    }
    return currentArray
}
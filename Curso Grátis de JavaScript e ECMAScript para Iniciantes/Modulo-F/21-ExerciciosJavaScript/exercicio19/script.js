document.querySelector("form#show").addEventListener('submit',(event)=>{event.preventDefault()})

let getNumber = ()=>{return window.document.querySelector('input#number').value}

let hasSomeContent = (inputText)=>{return inputText.length>0}
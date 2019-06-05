//alert('ola mundo')
console.log('ola mundo')
console.log(window.navigator.appName)
console.log(window.navigator.appCodeName)
console.log(window.document.URL)

var firstParagraph = window.document.getElementsByTagName('p')[0]
console.log(firstParagraph)
window.document.write(firstParagraph.innerText)
firstParagraph.style.color = "#333"
firstParagraph.style.backgroundColor = "#999"

var secoundParagraph = window.document.getElementsByTagName('p')[1]
window.document.write("<br>" + secoundParagraph.innerHTML)

var div = window.document.getElementById('msg')
div.style.backgroundColor = 'green'

var elementName = 'okName'
var divs = window.document.getElementsByName(elementName)
divs[0].style.fontSize = '20px'
divs[1].style.fontSize = '30px'
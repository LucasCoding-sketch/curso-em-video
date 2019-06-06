function clicar(){
    var a = window.document.getElementById('area')
    a.innerText = 'Clicou'
    a.style.background = 'red'
}

function entrar(){
    var a = window.document.getElementById('area')
    a.innerText = 'Entrou'
}

function sair(){
    var a = window.document.getElementById('area')
    a.innerText = 'saiu ... Interja...'
    a.style.background = 'green'
}

// Não Intrusivo
window
    .document
    .getElementById('area')
    .addEventListener('mouseout', sair)
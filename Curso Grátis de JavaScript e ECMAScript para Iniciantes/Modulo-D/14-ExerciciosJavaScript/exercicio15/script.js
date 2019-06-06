function loader(){
    var message = document.getElementById('message')

    var image = document.querySelector('#show-image')

    var date = new Date()

    var hour = date.getHours()

    message.innerHTML = `Agora são: ${hour} horas`
    
    if (hour >=0 && hour < 12){
        image.src = 'img/foto-manha.png'
        document.body.classList.remove('tarde', 'noite')
        document.body.classList.add('manha')
    }else if (hour >= 12 && hour < 18){
        image.src = 'img/foto-tarde.png'
        document.body.classList.remove('manha', 'noite')
        document.body.classList.add('tarde')
    }else{
        image.src = 'img/foto-noite.png'
        document.body.classList.remove('manha', 'tarde')
        document.body.classList.add('noite')
    }
}

document.body.onload = loader
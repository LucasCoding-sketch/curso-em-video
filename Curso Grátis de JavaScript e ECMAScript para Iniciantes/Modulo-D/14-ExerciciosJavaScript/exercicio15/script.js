console.log('exercicio x')
function loader(){
    var message = document.getElementById('message')
    var image = document.querySelector('#show-image')
    var date = new Date()

    var hour = date.getHours()
    console.log(image.src)
    message.innerHTML = `Agora são: ${hour} horas`

    if (hour >=0 && hour < 12){
        image.src = 'img/foto-manha.png'
    }else if (hour >= 12 && hour < 18){
        image.src = 'img/foto-tarde.png'
    }else{
        image.src = 'img/foto-noite.png'
    }
}

document.body.onload = loader
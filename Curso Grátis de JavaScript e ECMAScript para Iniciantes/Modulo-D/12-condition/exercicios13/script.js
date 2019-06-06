var hora = new Date().getHours()

console.log(`Agora são exatament ${hora} horas`)

if(hora >= 6 && hora < 12){
    console.log('bom dia')
} else if(hora < 18 && hora >= 12){
    console.log('Boa tarde')
}else if(hora >= 18 && hora <=24){
    console.log('Boa noite')
} else {
    console.log('Boa madrugada')
}
let automoveis = [1,2,3]//array ou vetor e elementos; indice
console.log(automoveis)
automoveis[3] = 5
console.log(automoveis)
automoveis[5] = 5
console.log(automoveis)
automoveis.sort()
console.log(automoveis)
automoveis.push(-11)
console.log(automoveis)
console.log(automoveis[4])


for(let i = 0; i < automoveis.length; i++){
    console.log('for:' ,automoveis[i])
}

automoveis.forEach((element, index, array_) => {
    console.log('forEach:', element, 'index : ', index, 'array : ', array_)
});

for(let automovel in automoveis){
    console.log('for IN :' , automovel)
}

let chaveDoCinco = automoveis.indexOf(5)
console.log(chaveDoCinco)
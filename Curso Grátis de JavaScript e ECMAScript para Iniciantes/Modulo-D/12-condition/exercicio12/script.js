var idade = 16

if (idade < 16) {
    console.log("não vota")
} else {
    if (idade < 18) {
        console.log("vota opicional")
    } else {
        console.log("voto obrigatório")
    }
}

// mesmo código mas paroveitano o bloco do else
if (idade < 16) {
    console.log("não vota")
} else if (idade < 18 || idade > 65 ) {
    console.log("vota opicional")
} else {
    console.log("voto obrigatório")
}
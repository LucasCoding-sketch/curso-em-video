let fatorial = (x)=>{
    let fatorialResponse = 1
    for(let i = x; i > 1; i--){
        fatorialResponse *= i
    }
    return fatorialResponse
}

console.log(fatorial(3))
//Operadores relacionais
console.log("\/\/Operadores relacionais\n")

console.log(5 >  2)
console.log(7 <  7)
console.log(8 >= 8)
console.log(9 <= 7)
console.log(5 == 5)
console.log(4 != 4)

console.log('--------------------\n')


//Operadores arititéticos tem precedencia sobre os relacionais
console.log("\/\/Operadores arititéticos tem precedencia sobre os relacionais\n")

console.log(5 - 1 >  2 + 1)
console.log(7 + 3 <  7 + 3)
console.log(8 + 2 >= 6 + 4)
console.log(5 + 4 <= 9 - 2)
console.log(2 + 3 == 7 - 2)
console.log(4 + 1 != 5 + 0)

console.log('--------------------\n')


// Cuidado com os operadores de igualdade use operador de IDENTIDADE
console.log("\/\/Cuidado com os operadores de igualdade use operador de IDENTIDADE\n")
console.log( 5 == '5') //true
console.log( 5 === '5') //false - igualdade restrita

console.log( 5 != '5') //false
console.log( 5 !== '5') //true - deigualdade restrita

console.log('--------------------\n')
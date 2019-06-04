var linguagem = 'Java Script'

console.log("Eu estou aprendendo " + linguagem)


nome = 'Boo'
idade = 42
nota = 4.6

console.log('O aluno ' + nome + " com a idade de: " + idade + ' tirou nota ' + nota)
//'O aluno Boo com a idade de: 42 tirou nota 4.6'


console.log(`O aluno ${nome} com a idade de: ${idade} tirou nota ${nota}`)


var decimal_number = 140.01
console.log(decimal_number.toFixed(0))
console.log(decimal_number.toFixed(1))
console.log(decimal_number.toFixed(2))
console.log(decimal_number.toFixed(4))


var salario = 12000.00

var salarioReal = salario.toLocaleString('pt-BR', {style: 'currency', 'currency': 'BRL'})

var salarioDollar = salario.toLocaleString('en-US', {style: 'currency', 'currency': 'USD'})

var salarioEuro = salario.toLocaleString('pt-PT', {style: 'currency', 'currency': 'EUR'})


console.log(salarioReal)
console.log(salarioDollar)
console.log(salarioEuro)
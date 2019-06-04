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


var salario = 1200.00

var locale = 'pt-BR'

var oprtionsObjectToMyLocaleString = {style: 'currency', 'currency': 'BRL' }

salario = salario.toLocaleString(locale, oprtionsObjectToMyLocaleString)


console.log(salario)
//R$1,200.00
const arr = [1,2,3]

const a = arr[0]
const b = arr[1]
const c = arr[2]

console.log(a)
console.log(b)
console.log(c)

const arr1 = [1,2,3]
const [a1,b1,c1] = arr1

console.log(a1)
console.log(b1)
console.log(c1)

const arrNomes = ['Joao', 'Carlos', 'Miguel']

const [a2, b2, c2] = arr
const obj = {
    nome: 'Joao',
    idade: 21
}

const {nome, idade} = obj
console.log(nome)
console.log(idade)

const {nome: nomeCompleto, idade1} = obj
console.log(nomeCompleto)
console.log(idade)

function calculaIdade({anoAtual, anoNascimento}) {
    return anoAtual - anoNascimento
}

const pessoa2 = { anoNascimento: 2000, anoAtual: 2023}
console.log(calculaIdade(pessoa2))
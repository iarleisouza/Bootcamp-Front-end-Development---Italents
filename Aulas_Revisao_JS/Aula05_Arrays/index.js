let numeros = [1, 2, 3]
let nomes = ['Joao', 'Carlos', 'Pedro']

let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

console.log(numeros)
console.log(nomes)
console.log(matriz)
console.log(numeros[0])
console.log(nomes[1])
console.log(matriz[1][1])

// adiciona um numero no final do array
numeros.push(6)
console.log(numeros)

//remove um numero do final do array
numeros.pop()
console.log(numeros)

//adiciona um valor no inicio do array
numeros.unshift(0)
console.log(numeros)

//remove o primeiro valor do array
numeros.shift()
console.log(numeros)
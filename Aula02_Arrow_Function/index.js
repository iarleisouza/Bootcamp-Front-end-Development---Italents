// Arrow Functions
// não se usa arrow funcions quando se usa o this
//Função tradicional

function soma(num1, num2) {
    return num1 + num2

}

/*
let somaAf = (num1, num2) => {
    return num1 + num2
}
*/
let somaAf = (num1, num2) => num1 + num2

console.log(soma(2,3))
console.log(somaAf(3,4))

/*
let dobra = (num) => num * 2
console.lpog(dobra(5))
*/

let dobra = num => num * 2
console.log(dobra(3))

let saudacao = () => console.log("ola!")
saudacao()


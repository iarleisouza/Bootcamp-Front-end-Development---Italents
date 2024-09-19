const objeto = { nome: 'Ivo', idade: 28 }
const novoObjeto = { ...objeto}
console.log(novoObjeto)

const objeto1 = { nome: 'Ana', idade: 25}
const objeto2 = { cidade: 'Santos', país: 'Brasil'}
const resultado = { ...objeto1, objeto2}
console.log(resultado)
const objeto3 = { ...objeto1, profissao: 'Programadora'}
console.log(objeto3)

const arr1 = [1,2,3]
const arr2 = [1,2,3]
const novoArr = [...arr1, ...arr2]
console.log(novoArr)
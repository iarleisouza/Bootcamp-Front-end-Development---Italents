import { helloWorld } from './module.js'
import MeuModule from './module2.js'
import * as MeuModuloNovo from './module3.js'
helloWorld()
MeuModule()
console.log(MeuModuloNovo.name)
console.log(MeuModuloNovo.age)
console.log(MeuModuloNovo.country)
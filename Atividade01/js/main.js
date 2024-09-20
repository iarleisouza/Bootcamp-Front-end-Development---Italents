 // variaveis e arrays
 let name = []
 let number = []

//Arrow Funcion
 let saudacao = () => alert("Seja Bem Vindo a Rifa Onlide")
 saudacao()

let idade = prompt(`Você é maior que 18? Digite sua idade:`)
// Operador Ternário
const information = idade >= 18 ? "Sim" : "Não"
//Templates
alert(`${information}`)





 let valor = document.querySelector(".valor")
 //Templates
valor.innerHTML = `O valor é ${20}`


let adicionaBilhete = document.getElementById("adicionaBilhete")
  let inputName = document.getElementById("inputName")
      let inputNumber = document.getElementById("inputNumber")
          let infoName = document.getElementById("infoName")
           let infoNumber = document.getElementById("infoNumber") 

// função para digítos de apenas letra e não números no input
    inputName.addEventListener("keypress", function(e){
      const keyCode = (e.keyCode ? e.keyCode : e.wich)
        if(keyCode > 47 && keyCode < 58){
           e.preventDefault()

      }
    })


// função para limitar mais de dois numeros no input

inputNumber.addEventListener("keyup", function(){
 if(inputNumber.value > 50){
     alert('Digite um número entre valor 1 e 50.')
        inputNumber.value = ''
            inputNumber.focus()
 
 }
})

  
 function verificaInputVazio(){
     if(inputName.value == '' || inputNumber.value == ''){
         alert("Verificar campo Nome e Número!")
           inputName.value = ''
               inputNumber.value = ''
                   inputName.value.focus()
     }
 }
         
 

     function adicionaNome(){
          let cliente = document.querySelector('.cliente')
          let infoName = document.createElement('p')
           cliente.appendChild(infoName)
               name.push(inputName.value)
                  infoName.innerHTML = inputName.value
                
           
}

       function adicionaNumero(){
          let numero = document.querySelector('.numero')
             let infoNumber = document.createElement('p')
               numero.appendChild(infoNumber)
                 number.push(inputNumber.value)
                   infoNumber.innerHTML = inputNumber.value
                     inputNumber.value = ''
                       inputNumber.focus()
        }

   
          function verificaNumeroRepetido(){  
                
         if( number.indexOf(inputNumber.value) > -1){
             alert('Número já consta na base de dados.')
                 inputNumber.value = ''
                       inputNumber.value.focus()
             
         }
     }

     let cont = 0
      function adicionarBilhete() {
       document.getElementById("inputNumber").disabled = false
        document.getElementById("inputName").disabled = false
              verificaInputVazio()
             
              if(cont != 50){
                verificaNumeroRepetido()
                    adicionaNome()
                      adicionaNumero()   
                        cont++
                    }
          if(cont == 50){
          alert('Fim dos Bilhetes')
            let adicionaBilhete = document.getElementById("adicionaBilhete")
         
                  inputName.value = ''
                   inputNumber.value = ''
                     document.getElementById("inputNumber").disabled = true
                       document.getElementById("inputName").disabled = true
                    
                   }

              }
                   
      
    function show(){
        let resultDIV = document.getElementById('infoName');
           resultDIV.innerHTML = "";
          
           for(let i in name){
             let p = document.createElement("p");
               p.innerHTML = name[i];
                 resultDIV.append(p);


             let resultDIV2 = document.getElementById('infoNumber');
              resultDIV2.innerHTML = "";
            

                for(let x in number){
                  let p = document.createElement("p");
                    p.innerHTML = number[x];
                     resultDIV2.append(p);
                                                 
                               }
           
                             }
 
 }
     

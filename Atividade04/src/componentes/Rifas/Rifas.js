import Rifa from '../Rifa/Rifa'
import FormInput from '../FormInput/FormInput'
import './Rifas.css'
import { useState } from 'react'
import Button from '../Button/Button'

const Rifas = () => {

const [rifas, setRifas]  = useState([])

const [rifasForm, setRifasForm] = useState({
    nome: "",
    numero: "",
      
})


const handleFieldsChange = (event) => {
   setRifasForm({
  
    ...rifasForm,
    [event.target.name]: event.target.value
   })
   console.log(rifasForm)
}
const handleClick = async () => {
    
    if (rifasForm.nome === "" || rifasForm.numero === "") {
        alert('Por favor preencha todos os campos obrigatórios!');
           rifasForm.nome = ''
           rifasForm.numero = ''
        return
  
        }
       

   const response = await fetch('http://localhost:3005/bilhetes', {
          method: 'POST',
          headers: new Headers({
            "content-type": "application/json"
          }),
          body: JSON.stringify(rifasForm)
          
    })
  
      const data = await response.json()

     
      alert(`Nome ${data.nome} e Número ${data.numero} cadastrado com sucesso!`)

   setRifasForm({
    nome: "",
    numero: ""
   
   })
}

const getBilhetes = () => {
    
    fetch('http://localhost:3005/bilhetes')
    .then(response => response.json())
    .then(data => {
        setRifas(data)
        console.log(data)
    })

}

getBilhetes()

    return (
        <section class='rifas'>
            
             <form className="form" >
                <FormInput  inputName="Nome" id="nome" name="nome" type="text" placeholder="Nome..." value={rifasForm.nome} onChange={event => handleFieldsChange(event)} />
                <FormInput inputName="Numero" id="numero" name="numero" type="number"  placeholder="Número..." value={rifasForm.numero} onChange={event => handleFieldsChange(event)}/>
    
                <Button text="Inserir Bilhete" type="submit" onClick={handleClick}/>
             </form>
             
        <ul class="rifas-lista">
            {rifas.map((rifa, index) => (
          <Rifa rifa={rifa} key={index}/>

            ))}
          
        </ul>
        </section>
    )
}

export default Rifas
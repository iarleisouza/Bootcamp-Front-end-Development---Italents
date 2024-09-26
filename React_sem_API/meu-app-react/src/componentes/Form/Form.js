import FormInput from '../FormInput/FormInput'
import Button from '../Button/Button'
import './Form.css'

const Form = () => {

    function handleClick(){
        alert('Clicou')
    }

    return (
        <form className="form"> 
       
       <FormInput inputName="Nome" id="nome" type="text"/>
       <FormInput inputName="Email" id="email" type="email"/>
    <Button text="Enviar" type="submit" onClick={handleClick}/>
        </form>
    )
}

export default Form
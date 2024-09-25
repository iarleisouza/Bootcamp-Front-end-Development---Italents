import FormInput from '../FormInput/FormInput'
import { CiSearch } from "react-icons/ci";

import './Form.css'

const style = {position: 'relative', top: '-22px', left: '95px'}
const Form = () => {
    return (
        <form className="form"> 
       
       <FormInput inputName="Pesquisa" id="nome" type="text" />  
       <CiSearch style={style}/>
        </form>
    )
}

export default Form
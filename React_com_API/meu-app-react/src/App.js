import logo from './logo.svg';
import './App.css';
import Mensagem from './componentes/Mensagem/Mensagem.js'
import Header from './componentes/Header/Header.js'
import Footer from './componentes/Footer/Footer.js'
import Filmes from './componentes/Filmes/Filmes.js'
import Form from './componentes/Form/Form.js'
import Button from './componentes/Button/Button.js'
import {useState} from 'react'



function App() {
//let count = 0
const [count, setCount] = useState(0)



   return (
   
     <>
    <div className='container'>
        <Header/>
        
          <Filmes/>
     </div>
   <Footer/>
</>
  )
}

export default App;

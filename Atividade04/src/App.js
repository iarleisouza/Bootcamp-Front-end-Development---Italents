import logo from './logo.svg';
import './App.css';
import Header from './componentes/Header/Header.js'
import Footer from './componentes/Footer/Footer.js'
import Rifas from './componentes/Rifas/Rifas.js'
import Form from './componentes/Form/Form.js'
import Button from './componentes/Button/Button.js'
import {useState} from 'react'





function App() {




   return (
   
     <>
    <div className='container'>
        <Header/>
      
          <Rifas/>
      
     </div>
   <Footer/>
</>
  )
}

export default App;

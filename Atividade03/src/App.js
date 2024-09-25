import logo from './logo.svg';
import './App.css';
import Header from './componentes/Header/Header.js'
import Footer from './componentes/Footer/Footer.js'
import Camisetas from './componentes/Camisetas/Ca misetas.js'
import Form from './componentes/Form/Form.js'




function App() {


  return (
   
  <>

    <div className='container'>
        <Header/>
        <section className='pesquisa'>
       <h2> Entre em contato!</h2>
       
         <Form/>   
      
  </section> 
    
  <Camisetas/>
  

   </div>
   <Footer/>
</>
  )
}

export default App;

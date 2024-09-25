import logo from './logo.svg';
import './App.css';
import Mensagem from './componentes/Mensagem/Mensagem.js'
import Header from './componentes/Header/Header.js'
import Footer from './componentes/Footer/Footer.js'
import Filmes from './componentes/Filmes/Filmes.js'
import Form from './componentes/Form/Form.js'



function App() {


  return (
   
  <>

    <div className='container'>
        <Header/>
     
     
     <Mensagem cor = "red">
    Boa sorte nos estudos!!!
   </Mensagem>
   
  <Filmes/>
  <section className='contato'>
    <h2> Entre em contato!</h2>
    <Form/>
  </section>

   </div>
   <Footer/>
</>
  )
}

export default App;

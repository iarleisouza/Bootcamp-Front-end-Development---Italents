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
  /*
function handleClick() {
  alert('Olá!')
}*/

function handleClickButton1() {
  alert('Olá!')
}

function handleClickButton2() {
  alert('Olá!')
}

function adiciona(){
  setCount(count +1)
}

function remove(){
  setCount(count -1)
}

  const nome = 'Iarlei'
  const idade = 18

  return (
   
     <>
    <div className='container'>
        <Header/>
     
   <h1 className='titulo'> Meu nome é {nome}</h1>
   <p>É maior de idade? {idade >= 18 ? 'Sim' : 'Nao'}</p>
    
     <Mensagem cor = "red">
    Boa sorte nos estudos!!!
   </Mensagem>
   
  <Filmes/>
  <section className='contato'>
    <h2> Entre em contato!</h2>
    <Form/>
  </section>

   <section>
      <h2>Eventos</h2>
   {/*  <button onClick={handleClick}>Clique!</button>*/}
  {/*  <button onClick={() => alert('Olá Mundo!')}>Clique Novamente</button>*/}
    {/*  <button onClick={function handleClick() {
      alert('Olá!')
     }}>Clique</button>*/}
     <Button text="Botao 1" onClick={handleClickButton1}/>
     <Button text="Botao 2" onClick={handleClickButton2}/>
   </section>
    <section>
    <h3>Contador</h3>
    <Button text='adiciona' onClick={adiciona} />
    
      <h4>{count}</h4>
      <Button text='remove' onClick={remove} />
    </section>

   </div>
   <Footer/>
</>
  )
}

export default App;

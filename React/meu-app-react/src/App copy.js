import logo from './logo.svg';
import './App.css';
import Saudacao from './componentes/Saudacao/Saudacao.js'
import Mensagem from './componentes/Mensagem/Mensagem.js'
import Header from './componentes/Header/Header.js'
import Footer from './componentes/Footer/Footer.js'



function App() {

  const nome = 'Iarlei'
  const idade = 18


  const pessoas = [
    {
      nome: "Carlos",
      profissao: "Médico",
    },
    {
      nome: "Paulo",
      profissao: "Mecânico",
    },
    {
      nome: "Douglas",
      profissao: "Intrutor"
    }
  ]
  return (
   
  <>

    <div className='container'>
        <Header/>
     
   <h1 className='titulo'> Meu nome é {nome}</h1>
   <p>É maior de idade? {idade >= 18 ? 'Sim' : 'Nao'}</p>
 
   <ul>

   {pessoas.map(pessoa => (
    
    <li>{pessoa.nome} - {pessoa.profissao}</li>

   ))}

   </ul>

   <Saudacao nome="Iarlei" sobrenome="Souza"/>


   
   
     <Mensagem cor = "red">
    Boa sorte nos estudos

   </Mensagem>
 
   <Footer/>
   </div>
</>
  )
}

export default App;

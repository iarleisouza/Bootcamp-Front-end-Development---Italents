import logo from './logo.svg';
import './App.css';

function App() {
  const nome = 'Iarlei'
  const idade = 18
  const Saudacao = () => {
    return 'Olá Tudo bem?'
  }

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

    <div className='container'>
   <h1 className='titulo'> Meu nome é {nome}</h1>
   <p>É maior de idade? {idade >= 18 ? 'Sim' : 'Nao'}</p>
   <p><Saudacao/></p>
   <ul>
   {pessoas.map(pessoa => (
    <li>{pessoa.nome} - {pessoa.profissao}</li>
   ))}
   </ul>
   </div>
  );
}

export default App;

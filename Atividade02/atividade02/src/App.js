import logo from './logo.svg';
import './App.css';

function App() {

  const Saudacao = () => "Seja bem vindo!"
 let estagio = true
  const alunos = [
 
  {
    materia: "Análise de Dados",
    nota: 7,
  },
  {
    materia: "Algebra Linear",
    nota: 8.5,
  },
  {
    materia: "Programação I",
    nota: 7.5,
  },
  {
    materia: "Cálculo Diferencial I",
    nota: 8.5,
  },
  {
    materia: "Lógica de Programação I",
    nota: 9,
  },
  {
    materia: "Matemática Fincanceira I",
    nota: 7.5,
  },
  {
    materia: "Teoria dos Grafos I",
    nota: 9.5,
  },

]


  return (
  <div>
      <h1>Atividade 02</h1>

      <p><Saudacao/></p>
    <ul>
    {alunos.map(aluno => (
      <li>Matéria: {aluno.materia} - {aluno.nota}</li>
       
    ))}
    </ul>

    <p> Está fazendo estágio? {estagio ? "Sim" : "Não"}</p>
  </div>
  );
}

export default App;

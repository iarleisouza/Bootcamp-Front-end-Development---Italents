import './Saudacao.css'

function Saudacao({nome = 'usuario', sobrenome}) {
//function Saudacao1(props) {
  //const {nome, sobrenome} = props
    return(
      <h2 className='title'>olá Saudação, {nome} {sobrenome}</h2>
    )
    
    }
    
  export default Saudacao
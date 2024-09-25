import './Camiseta.css'

const Camiseta = ({camiseta}) => {
    return (
        <li className="camiseta-item">
        <img src={camiseta.poster} alt={camiseta.nome}/>
        <h4> {camiseta.nome} </h4>
        <p> Preco: {camiseta.Preco}</p>
        </li>
    )
}

export default Camiseta
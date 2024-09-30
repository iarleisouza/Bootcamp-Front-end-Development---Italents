import './Rifa.css'

const Rifa = ({rifa}) => {

    return (
      
        <li className="rifa-item">
           
        <h4> {rifa.nome} </h4>
        <h4> {rifa.numero}</h4>
        </li>
    )
}

export default Rifa
import Camiseta from '../Camiseta/Camiseta'
import './Camisetas.css'

const Camisetas = () => {

const camisetas  = [
{
    nome: 'Camiseta Academia Masculina ',
    poster: 'https://a-static.mlcdn.com.br/800x560/camiseta-academia-masculina-camisa-musculacao-dry-uv-caminhada-treino-corrida-bike-efect/lilistore/cammascdegpretoazulgg/f5804721ae90a53a8293004564c63d70.jpeg',
    Preco: 'R$45,90'
},
{
    nome: 'Camiseta Fitness Masculina',
    poster: 'https://www.calitta.com/3285-thickbox_default/camiseta-fitness-masculina-academia-esporte-respiravel-treino-corrida.jpg',
    Preco: 'R$45,90'
},
{
    nome: 'Camiseta Slim Fina Respiravel',
    poster: 'https://www.calitta.com/3277-thickbox_default/camiseta-slim-fit-esporte-treino-academia-fina-respiravel.jpg',
    Preco: 'R$45,90'
}
]

    return (
        <section class='camisetas'>
           
        <ul class="camisetas-lista">
            {camisetas.map((camiseta, index) => (
          <Camiseta camiseta={camiseta} key={index}/>

            ))}
      
    

        </ul>
        </section>
    )
}

export default Camisetas
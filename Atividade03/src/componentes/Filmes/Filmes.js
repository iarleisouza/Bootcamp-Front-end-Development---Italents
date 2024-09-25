import Filme from '../Filme/Filme'
import './Filmes.css'

const Filmes = () => {

const filmes  = [
{
    nome: 'Marvels',
    poster: 'https://shopee.co.id/inspirasi-shopee/wp-content/uploads/2022/01/10-Film-Marvel-Terbaik.webp',
    anolanvamento: '2020'
},
{
    nome: 'Vingadores',
    poster: 'https://parade.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_700/MTk3MzM3ODU4NTU2NTY4Nzc1/marveldisney.webp',
    anolanvamento: '2018'
},
{
    nome: 'Homem de Ferro',
    poster: 'https://de.web.img3.acsta.net/r_654_368/newsv7/19/12/19/16/14/0403085.jpg',
    anolanvamento: '2018'
},
{
    nome: 'Homem de Ferro',
    poster: 'https://media.vneconomy.vn/w800/images/upload/2023/03/02/marvel4.png',
    anolanvamento: '2018'
},
{
    nome: 'Homem de Ferro',
    poster: 'https://coastalhousemedia.com/wp-content/uploads/2022/05/KV-Marvel-Avengers-Campus-scaled-1-2048x1442.jpg',
    anolanvamento: '2018'
},
{
    nome: 'Homem de Ferro',
    poster: 'https://shopee.co.id/inspirasi-shopee/wp-content/uploads/2022/01/10-Film-Marvel-Terbaik.webp',
    anoLancamento: '2018'
},

]

    return (
        <section class='filmes'>
             <h2> Meus Filmes Favoritos</h2>
        <ul class="filmes-lista">
            {filmes.map((filme, index) => (
          <Filme filme={filme} key={index}/>

            ))}
      
    

        </ul>
        </section>
    )
}

export default Filmes
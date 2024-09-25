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
    poster: 'https://shopee.co.id/inspirasi-shopee/wp-content/uploads/2022/01/10-Film-Marvel-Terbaik.webp',
    anolanvamento: '2018'
},
{
    nome: 'Homem de Ferro',
    poster: 'https://shopee.co.id/inspirasi-shopee/wp-content/uploads/2022/01/10-Film-Marvel-Terbaik.webp',
    anolanvamento: '2018'
},

]




    return (
        <section class='filmes'>
             <h2> Meus Filmes Favoritos</h2>
        <ul class="filmes-lista">
      

            <li class="filme-item">
               <img src="https://parade.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_700/MTk3MzM3ODU4NTU2NTY4Nzc1/marveldisney.webp" alt="" srcset="" />
               <h4> Marvels </h4>
               <p> Ano: 2000</p>
            </li>

            <li class="filme-item">
               <img src="https://images.immediate.co.uk/production/volatile/sites/3/2018/04/https-2F2Fblogs-images.forbes.com2Fscottmendelson2Ffiles2F20182F042Fimage001-cebe539.jpg?quality=90&webp=true&crop=75px,0px,811px,540px&resize=960,640" alt="" srcset="" />
               <h4> Marvels </h4>
               <p> Ano: 2000</p>
            </li>

            <li class="filme-item">
               <img src="https://de.web.img3.acsta.net/r_654_368/newsv7/19/12/19/16/14/0403085.jpg" alt="" srcset="" />
               <h4> Marvels </h4>
               <p> Ano: 2000</p>
            </li>
                     
            <li class="filme-item">
               <img src="https://media.vneconomy.vn/w800/images/upload/2023/03/02/marvel4.png" alt="" srcset="" />
               <h4> Marvels </h4>
               <p> Ano: 2000</p>
            </li>
                     
            <li class="filme-item">
               <img src="https://coastalhousemedia.com/wp-content/uploads/2022/05/KV-Marvel-Avengers-Campus-scaled-1-2048x1442.jpg" alt="" srcset="" />
               <h4> Marvels </h4>
               <p> Ano: 2000</p>
            </li>
                     
            <li class="filme-item">
               <img src="https://shopee.co.id/inspirasi-shopee/wp-content/uploads/2022/01/10-Film-Marvel-Terbaik.webp" alt="" srcset="" />
               <h4> Marvels </h4>
               <p> Ano: 2000</p>
            </li>
                     

        </ul>
        </section>
    )
}

export default Filmes
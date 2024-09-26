import Filme from '../Filme/Filme'
import FormInput from '../FormInput/FormInput'
import './Filmes.css'
import { useState } from 'react'
import Button from '../Button/Button'

const Filmes = () => {

const [filmes, setFilmes]  = useState([
{
    nome: 'Marvels',
    poster: 'https://shopee.co.id/inspirasi-shopee/wp-content/uploads/2022/01/10-Film-Marvel-Terbaik.webp',
    anoLancamento: '2020'
},
{
    nome: 'Vingadores',
    poster: 'https://parade.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_700/MTk3MzM3ODU4NTU2NTY4Nzc1/marveldisney.webp',
    anoLancamento: '2018'
},
{
    nome: 'Homem de Ferro',
    poster: 'https://de.web.img3.acsta.net/r_654_368/newsv7/19/12/19/16/14/0403085.jpg',
    anoLancamento: '2018'
},
{
    nome: 'Homem de Ferro',
    poster: 'https://media.vneconomy.vn/w800/images/upload/2023/03/02/marvel4.png',
    anoLancamento: '2018'
},
{
    nome: 'Homem de Ferro',
    poster: 'https://coastalhousemedia.com/wp-content/uploads/2022/05/KV-Marvel-Avengers-Campus-scaled-1-2048x1442.jpg',
    anoLancamento: '2018'
},
{
    nome: 'Homem de Ferro',
    poster: 'https://shopee.co.id/inspirasi-shopee/wp-content/uploads/2022/01/10-Film-Marvel-Terbaik.webp',
    anoLancamento: '2018'
},

])

const [filmesForm, setFilmesForm] = useState({
    nome: "",
    poster: "",
    anoLancamento: ""
})

const handleFieldsChange = (event) => {
   setFilmesForm({
    ...filmesForm,
    [event.target.name]: event.target.value
   })
   console.log(filmesForm)
}
const handleClick = () => {
   setFilmes([...filmes, filmesForm])
   setFilmesForm({
    nome: "",
    poster: "",
    anoLancamento: ""
   })
}
    return (
        <section class='filmes'>
             <h2> Meus Filmes Favoritos</h2>
             <form className="form">
                <FormInput inputName="nome" id="nome" name="nome" type="text" value={filmesForm.nome} onChange={event => handleFieldsChange(event)} />
                <FormInput inputName="poster" id="poster" name="poster" type="text" value={filmesForm.poster} onChange={event => handleFieldsChange(event)}/>
                <FormInput inputName="Ano de Lancamento" id="anoLancamento" name="anoLancamento" type="text" value={filmesForm.anoLancamento} onChange={event => handleFieldsChange(event)}/>
                <Button text="Cadastrar" type="submit" onClick={handleClick}/>
                          </form>
        <ul class="filmes-lista">
            {filmes.map((filme, index) => (
          <Filme filme={filme} key={index}/>

            ))}
      
    

        </ul>
        </section>
    )
}

export default Filmes
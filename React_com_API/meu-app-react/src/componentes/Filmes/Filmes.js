import Filme from '../Filme/Filme'
import FormInput from '../FormInput/FormInput'
import './Filmes.css'
import { useState } from 'react'
import Button from '../Button/Button'

const Filmes = () => {

const [filmes, setFilmes]  = useState([])

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
const handleClick = async () => {
   const response = await fetch('http://localhost:3005/movies', {
          method: 'POST',
          headers: new Headers({
            "content-type": "application/json"
          }),
          body: JSON.stringify(filmesForm)
    })
  
      const data = await response.json()
      alert(`Filme ${data.nome} cadastrado com sucesso!`)

   setFilmesForm({
    nome: "",
    poster: "",
    anoLancamento: ""
   })
}

const getMovies = () => {
    // GET - buscar as informações dos filmes cadastrados
    // response - a resposta do servidor (chamada) (carta fechada)
    // data = É o dado que de fato recebo apos o ok da promessa do responde (conteudo da carta)
    fetch('http://localhost:3005/movies')
    .then(response => response.json())
    .then(data => {
        setFilmes(data)
        console.log(data)
    })
}
getMovies()

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

import {React, useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import api from '../../services/api'
// url example: https://api.themoviedb.org/3/movie/550?api_key=2224ef8819830b1e36fb12693c940006

import './index.css'

const Home = () => {
    const [filmes, setFilmes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadFilmes(){
            const response = await api.get("movie/now_playing" , {
                params: {
                    api_key: "2224ef8819830b1e36fb12693c940006",
                    language: "pt-BR",
                    page: 1,
                }
            })
            console.log(response.data.results.slice(0, 10));
            setFilmes(response.data.results.slice(0,10));
            setLoading(false);
        }

        
        loadFilmes();
    }, [])
    

    if(loading){
        return (
            <div>
                <h2>Carregando filmes...</h2>
            </div>
        )
    }
    

    return (
    <div className='container'>
        <div className='lista-filme'>
            {filmes.map((filme) => {
                return (
                    <article key={filme.id}>
                        <strong>{filme.title}</strong>
                        <div>
                            <img 
                                src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} 
                                alt={`Poster de ${filme.title}`} 
                            />    
                        </div>
                        <Link to={`/filme/${filme.id}`}>
                            Acessar
                        </Link>
                        <Link id='link-youtube' 
                            to={`https://www.youtube.com/results?search_query=${filme.title}+trailer`}
                            target='blank'>
                            <h4>Trailer</h4>
                        </Link>
                        

                        
                    </article>
                )
            })}
        </div>

    </div>
  )
}

export default Home
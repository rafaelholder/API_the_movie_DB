import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../../services/api';

import './index.css'

const Filme = () => {
    const {id} = useParams();
    const [filme, setFilme] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{

        async function LoadFilme(){
            await api.get(`/movie/${id}`, {
                params: {
                    api_key: '2224ef8819830b1e36fb12693c940006',
                    language: 'pt-BR',
                }
                
            })
            .then((response) => {
                setFilme(response.data);
                setLoading(false);
            })
            .catch(() => {
                alert('filme nao existe')
            })
        }
    
        LoadFilme();


        return() => {
            console.log('component filme detalhes unmount');
        }
    }, []);

    if(loading){
        return(
            <div className='filme-loading'>
                <h1>Carregando detalhes...</h1>
            </div>
        )
    }

    return (
        <div className='filme-info'>
            <h1>{filme.title}</h1>
            <img 
                src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} 
                alt="Poste do filme" 
            />
            <h3>Sinopse</h3>
            <span>{filme.overview}</span>
            <strong>{filme.vote_average.toFixed(1)} / 10</strong>
                
        </div>
    )
}

export default Filme
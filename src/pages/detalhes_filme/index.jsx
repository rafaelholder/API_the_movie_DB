import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify';
import api from '../../services/api';

import './index.css'

const Filme = () => {
    const {id} = useParams();
    const navigate = useNavigate();
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
                console.log('Filme não existe');
                navigate("/", {replace: true});
                return;
            })
        }
    
        LoadFilme();


        return() => {
            console.log('component filme detalhes unmount');
        }
    }, [navigate, id]);


    function salvarFilme(){
        const minhaLista = localStorage.getItem('@holderFlix');

        let filmesSalvos = JSON.parse(minhaLista) || [];

        const hasFilme = filmesSalvos.some( (filmeSalvo) => filmeSalvo.id === filme.id)

        if(hasFilme){
            toast.warn("Esse filme já está na sua lista!")
            return;
        }

        filmesSalvos.push(filme);
        localStorage.setItem('@holderFlix', JSON.stringify(filmesSalvos));
        toast.success("Filme salvo com sucesso!")
    }

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
            <center>
                <strong>{filme.vote_average.toFixed(1)} / 10</strong>
            </center>
            <div className="area-buttons">
                <button onClick={salvarFilme}>Salvar</button>   
                <a className='button-trailer'
                    href={`https://www.youtube.com/results?search_query=${filme.title}+trailer`}
                    target='blank'>
                        <h4>Trailer</h4>
                </a>
            
            </div>

            
            
                
        </div>
    )
}

export default Filme
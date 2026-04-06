import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom'
import Button from '../../components/Button';
import styles from './movieInfo.module.css'

const MovieInfo = () => {
    const [movieInfo, setMovieInfo] = useState(null)

    const {movieId} = useParams();

    const API_KEY=import.meta.env.VITE_TMDB_API_KEY;
    const URL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`

    const fetchMovieInfo = async() => {
        try {
            const response = await fetch(URL)
            const MovieInfoData = await response.json()
            setMovieInfo(MovieInfoData)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchMovieInfo()
    }, [movieId])

    if(!movieInfo) return null
    return (
        <div className={styles.movieInfo}>
            <div className={styles.container}>
                <p className={styles.img}>
                    <img 
                    src={`https://image.tmdb.org/t/p/w300${movieInfo.poster_path}`} 
                    alt={movieInfo.title} 
                    />
                </p>
                <h2 className={styles.text}>{movieInfo.title}</h2>
                <p className={styles.overview}>{movieInfo.overview}</p> 
                <Button />
            </div>
        </div>
    )
}

export default MovieInfo


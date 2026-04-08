import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom'
import Button from '../../components/Button';
import styles from './movieInfo.module.css'

const MovieInfo = () => {
    const [movieInfo, setMovieInfo] = useState(null)

    const {movieId} = useParams();

    const API_KEY=import.meta.env.VITE_TMDB_API_KEY;
    const URL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&append_to_response=credits`

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

    const director = movieInfo.credits?.crew.find(person => person.job === "Director");
    const cast = movieInfo.credits?.cast.slice(0,5)

    return (
        <div className={styles.movieInfo}>
            <div className={styles.wrap}>
                <div className={styles.container}>
                <p className={styles.img}>
                    <img 
                    src={`https://image.tmdb.org/t/p/w300${movieInfo.poster_path}`} 
                    alt={movieInfo.title} 
                    />
                </p>
                <div className={styles.textBox}>
                    <h2 className={styles.text}>{movieInfo.title}</h2>
                    <p className={styles.overview}>{movieInfo.overview}</p> 
                    <div className={styles.genres}> <span className={styles.span}>Genre:</span>
                        {movieInfo.genres?.map((g => <p key={g.id}>{g.name}</p>))}
                    </div> 
                        {director && (
                            <p className={styles-director}><span className={styles.span}>Director:</span>{director.name}</p>
                        )}
                        <div className={styles.castContainer}>
                            <span className={styles.span}>Cast:</span>
                            {cast && (
                            <div className={styles.cast}>{cast.map((actor,index) => (
                                <p key={actor.id} className={styles.actorName}>{actor.name}{index < cast.length -1 ?',' : ''}</p>
                            ))}</div>
                        )}
                        </div>
                    </div>
                </div>
                <Button className={styles.button}></Button>
            </div>
        </div>
    )
}

export default MovieInfo


import { useState, useEffect } from 'react';
import {NavLink} from 'react-router-dom'
import styles from  './home.module.css'


const Home = () => {
    const [home, setHome] = useState(null)

    const API_KEY=import.meta.env.VITE_TMDB_API_KEY;
    const URL=`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`

    const fetchMovies = async () => {
        try {
            const response = await fetch(URL)
            const homeData = await response.json()
            setHome(homeData.results)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchMovies()
    }, [])

    if(!home)return null

    return (
        <div className={styles.home}>
            <div className={styles.container}>
                {home.map((movie) => (
                <NavLink to={`/movie/${movie.id}`} key={movie.id} className={styles.movie}>
                    <p className={styles.img}>
                        <img 
                        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} 
                        alt={movie.title} 
                        />
                    </p>
                    <p className={styles.text}>{movie.title}</p>
                </NavLink>
            ))}
            </div>
        </div>
    )
} 

export default Home 


import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {NavLink} from 'react-router-dom'
import styles from  './detail.module.css'

const GenreMap = {
    "28": "Action",
    "12": "Adventure",
    "16": "Animation",
    "35": "Comedy",
    "80": "Crime",
    "99": "Documentary",
    "18": "Drama",
    "10751": "Family",
    "14": "Fantasy",
    "36": "History",
    "27": "Horror",
    "10402": "Music",
    "9648": "Mystery",
    "10749": "Romance",
    "878": "Science Fiction",
    "10770": "TV Movie",
    "53": "Thriller",
    "10752": "War",
    "37": "Western"
};

const CategoryDetail = () => {

    const [detail, setDetail] = useState([])

    const API_KEY=import.meta.env.VITE_TMDB_API_KEY;

    const {id} = useParams();

    const URL=`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${id}`

    const genreName = GenreMap[id] || "movie list"

    const fetchDetails = async () => {
        try {
            const response = await fetch(URL)
            const detailData = await response.json()
            setDetail(detailData.results)

            } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchDetails()
    }, [id])

    return (
        <div className={styles.detail}>
            <div className={styles.wrap}>
                <p className={styles.genreName}>{genreName}</p>
            <div className={styles.container}>
                {detail.map((movie) => (
                    <NavLink to={`/movie/${movie.id}`} key={movie.id} className={styles.movie}>
                        <p className={styles.img}>
                            <img 
                            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} 
                            alt={movie.title} 
                            />
                        </p>
                        <p className={styles.title}>{movie.title}</p>
                    </NavLink>
                ))}
            </div>
            </div>
        </div>
    )
}

export default CategoryDetail
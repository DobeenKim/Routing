import { useState, useEffect } from 'react';
import {Outlet, useParams} from 'react-router-dom'
import {NavLink} from 'react-router-dom'
import styles from  './category.module.css'

const Category = () => {
    const {id} = useParams();
    const [category, setCategory] = useState(null)

    const API_KEY=import.meta.env.VITE_TMDB_API_KEY;

    const URL=`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`

    const fetchGenres = async() => {
        console.log("2. 함수 실행됨");
        try {
            const response = await fetch(URL)
            const genresData = await response.json()
            console.log("3. 데이터 받아옴:", genresData);
            setCategory(genresData.genres)
            console.log(genresData.genres)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchGenres()
    }, [])

    if(!category) return null


    return (
        <>
        <div className={styles.category}>
            <div className={styles.container}>
                {category.map((genre) => (
                <NavLink to={`/category/${genre.id}`} key={genre.id} className={styles.genre}>
                    <p className={styles.name}>{genre.name}</p>
                </NavLink>
                ))}
            </div>
            
        </div>
        <Outlet />
        </>
    )
} 
export default Category
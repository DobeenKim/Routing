import {NavLink} from 'react-router-dom'
import styles from './bottomHome.module.css'
import { AiOutlineHome } from "react-icons/ai";

const bottomHome = () => {
    return (
        <NavLink className={styles.bottomHome} to="/">
            <AiOutlineHome className={styles.icon}/>
            <div className={styles.text}>Home</div>
        </NavLink>
    )
}

export default bottomHome
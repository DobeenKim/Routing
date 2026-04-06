import {NavLink} from 'react-router-dom'
import styles from './menu.module.css'


const Menu = () => {
    return (
        <div className={styles.menu}>
            <NavLink className={styles.item} to="/">Home</NavLink>
            <NavLink className={styles.item} to="/category">Category</NavLink>
            <NavLink className={styles.item} to="/best">Best</NavLink>
            <NavLink className={styles.item} to="/about">About</NavLink>
        </div>
    )
}

export default Menu
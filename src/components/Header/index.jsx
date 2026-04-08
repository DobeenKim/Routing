import {NavLink} from 'react-router-dom'
import styles from './header.module.css'
import Menu from '../../components/Menu'
import logo from '../../assets/movie-logo.png'


const Header = () => {
    return (
        <header>
            <NavLink to={`/`} className={styles.logo}><img src={logo} alt="logo" /></NavLink>
            <p className={styles.text}>For You</p>
            <Menu />
        </header>
    )
}

export default Header
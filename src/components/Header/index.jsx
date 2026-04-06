import styles from './header.module.css'
import logo from '../../assets/logo.png'
import Menu from '../../components/Menu'


const Header = () => {
    return (
        <header>
            <img src={logo} className={styles.logo}/>
            <h2 className={styles.text}>For You</h2>
            <Menu />
        </header>
    )
}

export default Header
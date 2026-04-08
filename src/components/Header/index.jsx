import styles from './header.module.css'
import Menu from '../../components/Menu'


const Header = () => {
    return (
        <header>
            <h2 className={styles.text}>For You</h2>
            <Menu />
        </header>
    )
}

export default Header
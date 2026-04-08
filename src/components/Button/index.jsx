import { useNavigate } from 'react-router-dom'
import { MdKeyboardBackspace } from "react-icons/md";
import styles from './button.module.css'

const Button = ({className})=> {
    const navigate = useNavigate()
    return (
        <div
        onClick={() => navigate(-1)}
        className={`${styles.button} ${className}`}><MdKeyboardBackspace /></div>
    )
}

export default Button
import {Outlet} from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import BottomHome from '../../components/BottomHome'

const Layout = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <BottomHome />
            <Footer />
        </div>
    )
}

export default Layout
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import CursorEffect from '../components/Cursor';

function Layout() {
    return (
        <>
            <CursorEffect/>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout;
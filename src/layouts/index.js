import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import MainContent from '../components/MainContent';
import CursorEffect from '../components/Cursor';

function Layout() {
    return (
        <>
            <CursorEffect />
            <Header />
            <MainContent>
                <Outlet />
            </MainContent>
            <Footer />
        </>
    )
}

export default Layout;
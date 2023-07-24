import Footer from '../Footer/Footer';
import NavBar from '../Header/NavBar';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div className="overflow-hidden">
            <NavBar />
            <div className="md:min-h-[calc(100vh-100px)]" >
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Root;
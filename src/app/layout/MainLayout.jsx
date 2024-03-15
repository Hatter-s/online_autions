import Navbar from './Navbar';
import Footer from './Footer';

const MainLayout = ({ children }) => {
    return (<div className='min-h-[100vh] flex flex-col flex-nowrap'>
        <Navbar></Navbar>
        <div>{ children }</div>
        <Footer />
    </div>)
}

export default MainLayout;
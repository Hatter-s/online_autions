import Container from 'react-bootstrap/Container';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (<div className='min-h-[100vh] flex flex-col flex-nowrap'>
        <Navbar></Navbar>
        <Container className='flex-1'>{ children }</Container>
        <Footer />
    </div>)
}

export default Layout;
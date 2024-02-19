import Container from 'react-bootstrap/Container';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (<>
        <Navbar></Navbar>
        <Container>{ children }</Container>
        <Footer />
    </>)
}

export default Layout;
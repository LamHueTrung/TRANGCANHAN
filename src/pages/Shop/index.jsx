import { useNavigate } from 'react-router-dom';
import Header from './Navbar/Navbar';
import Home from './Home/Home';
import Main from './Main/Main';
import Footer from './Footer/Footer';
function Shop() {
    return (
        <div className="">
            <Header />
            <Home />
            <Main />
            <Footer />
        </div>
    );
}
export default Shop;

import { useNavigate } from 'react-router-dom';
import Header from './header';
import Main from './main';
import Footer from './footer';
function Home() {
    return (
        <div className="">
            <Header />
            <Main />
            <Footer />
        </div>
    );
}
export default Home;

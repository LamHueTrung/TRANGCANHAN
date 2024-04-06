import {
    createBrowserRouter,
    RouterProvider,
    BrowserRouter,
    Route,
} from 'react-router-dom';
import './App.css';
import Index from './pages/index';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Info from './pages/InfoLHT/Info';
import ShopWeb from './pages/Shop/index';
import ChiTietDonHang from './pages/Shop/Components/ChiTiet';
import ThanhToanDonHang from './pages/Shop/Components/ThanhToan';
import ThietKeWeb from './pages/Shop/Components/ThietKeWeb';

const router = createBrowserRouter([
    {
        path: '/ShopWeb/',
        element: <ShopWeb />,
    },
    {
        path: '/ShopWeb/ChiTiet/:slug',
        element: <ChiTietDonHang />,
    },
    {
        path: '/ShopWeb/ThanhToan/:slug',
        element: <ThanhToanDonHang />,
    },
    {
        path: '/ShopWeb/ThietKeWeb/:slug',
        element: <ThietKeWeb />,
    },
    {
        path: '/SignUp',
        element: <SignUp />,
    },
    {
        path: '/Login',
        element: <Login />,
    },
    {
        path: '/',
        element: <Index />,
    },
]);
function App() {
    return (
        <div className="App">
            <RouterProvider router={router} />
        </div>
    );
}

export default App;

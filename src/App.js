import './App.css';
import { Nabvar } from './components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import ShopCategory from './pages/ShopCategory';
import LoginSignup from './pages/LoginSignup';
import Cart from './pages/Cart'
import Product from './pages/product';
import NewDrop  from './pages/NewDrop';
import Footer from './Footer/Footer';
import mens_banner from './components/asset/mens_banner.png'
import womans_banner from './components/asset/womans_banner.png'
import kids_banner from './components/asset/kids_banner.png'


function App() {
  return (
    <div >
      <BrowserRouter>
        <Nabvar />
        <Routes>
          <Route path='/' element={<NewDrop/>} />
          <Route path='/mens' element={<ShopCategory banner={mens_banner} category="men" />} />
          <Route path='/womans' element={<ShopCategory banner={womans_banner} category="woman" />} />
          <Route path='/kids' element={<ShopCategory banner={kids_banner} category="kid" />} />
          <Route path="/product" element={<Product/>}>
            <Route path=':productId' element={<Product />}/>
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      
    </div>
  );
}

export default App;

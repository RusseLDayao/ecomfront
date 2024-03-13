import './App.css';
import { Nabvar } from './components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import ShopCategory from './pages/ShopCategory';
import LoginSignup from './pages/LoginSignup';
import Cart from './pages/Cart'
import Product from './pages/product';
import Hero from './components/hero/Hero';

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Nabvar />
        <Hero />
        <Routes>
          <Route path='/' element={<newDrop/>} />
          <Route path='/mens' element={<ShopCategory category="men" />} />
          <Route path='/womans' element={<ShopCategory category="woman" />} />
          <Route path='/kids' element={<ShopCategory category="kid" />} />
          <Route path="/product" element={<Product/>}>
            <Route path=':productId' element={<Product />}/>
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

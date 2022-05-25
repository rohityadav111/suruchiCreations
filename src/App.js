
import './App.css';
import "slick-carousel/slick/slick-theme.css";
import Layout from './components/layout';
import Footer from './components/Footer';
import {Routes, Route } from 'react-router';
import OurProducts from './components/pages/OurProducts';
import ProductDetail from './components/pages/ProductDetail';
import ContactUs from './components/ContactUs';
import Register from './components/Auth/Register';
import ForgetPassword from './components/Auth/ForgetPassword';
import WishList from './components/pages/WishList';
import PageNotFound from './components/pages/PageNotFound';
import Login from './components/Auth/Login';
import About from './components/About';
import Featured from './components/layout/Featured';
import Header from './components/Header';
import Cart from './components/pages/Cart';
import 'react-toastify/dist/ReactToastify.css';
import Checkout from './components/pages/Checkout';
import SearchPage from './components/pages/SearchPage';

function App() {
  return (

<>
<Header/>
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route exact path="/detail/:id" element={<ProductDetail/>}/>
      <Route exact path="/contact-us" element={<ContactUs/>}/>
      <Route exact path="/register"  element={<Register/>}/>
      <Route exact path="/forgetpassword" element={<ForgetPassword/>}/>
      <Route exact path="/wishlist" element={<WishList/>}/>
      <Route exact path ="/login" element={<Login/>}/>
      <Route exact path="/about" element={<About/>}/>
      <Route exact path="/our-products" element={<OurProducts/>}/>
      <Route path='*' element={<PageNotFound/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route exact path='/checkout' element={<Checkout/>}/>
      <Route excat path="/search/:item" element={<SearchPage />} />
    </Routes>
<Footer/>
</>
  );
}

export default App;




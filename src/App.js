
import './App.css';
import "slick-carousel/slick/slick-theme.css";
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect, useLayoutEffect } from 'react';
import ProductDetail from './components/pages/ProductDetail';
import ContactUs from './components/ContactUs';
import Register from './components/Auth/Register';
import ForgetPassword from './components/Auth/ForgetPassword';
import WishList from './components/myaccount/WishList';
import PageNotFound from './components/pages/PageNotFound';
import Login from './components/Auth/Login';
import About from './components/About';
import Cart from './components/pages/Cart';
import 'react-toastify/dist/ReactToastify.css';
import SearchPage from './components/pages/SearchPage';
import Categories from './components/categories/Categories';
import CategoryProducts from './components/categories/CategoryProducts';
import Profile from './components/myaccount/Profile';
import ChangePassword from './components/myaccount/ChangePassword';
import ManageAddress from './components/myaccount/ManageAddress';
import MyOrders from './components/myaccount/MyOrders';
import CheckoutPage from './components/pages/CheckoutPage';
import Shippingpage from './components/pages/Shippingpage';
import PaymentPage from './components/pages/PaymentPage';
import OrderSuccess from './components/pages/OrderSuccess';
import ReviewForm from './components/myaccount/ReviewForm';
import Protected from './Protected';
import { Navigate } from 'react-router';
import EditAddress from './components/myaccount/EditAddress';
import Loader from './components/Loader/Loader';
import AdminLogin from './adminpanel/Auth/AdminLogin';
import Dashboard from './adminpanel/pages/Dashboard'
import Catalog from './adminpanel/Catlog/Catalog'
import AdminCategories from './adminpanel/Catlog/Categories'
import AddCategory from './adminpanel/Catlog/AddCategory'
import Products from './adminpanel/Catlog/Products'
import AddProduct from './adminpanel/Catlog/AddProduct'
import Editcategory from './adminpanel/Catlog/Editcategory'
import EditProduct from './adminpanel/Catlog/EditProduct'
import Customer from './adminpanel/customers/Customer';
import Users from './adminpanel/customers/Users'
import Subscribers from './adminpanel/customers/Subscribers'
import Layout from './components/layout/Layout';
import Home from './components/layout/Home';
import Sales from './adminpanel/sales/Sales';
import SalesReport from './adminpanel/sales/SalesReport'
import Cms from './adminpanel/Cms/Cms'
import Pages from './adminpanel/Cms/Pages'
import Logo from './adminpanel/Cms/Logo'
import SocialLinks from './adminpanel/Cms/SocialLinks'
import QuickLinks from './adminpanel/Cms/QuickLinks'
import BannerSlider from './adminpanel/Cms/BannerSlider'

function App() {
  const Auth = localStorage.getItem("Token")

  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)

  }, [])
  return (
    <div>
      {
        (loading) ? <Loader />
          :

          <>
            <Routes>
              <Route path="/" element={<Layout />} >
                <Route index element={<Home />} />
                <Route  path="/detail/:id" element={<ProductDetail />}> </Route>
                <Route  path="/contact-us" element={<ContactUs />}></Route>
                <Route  path="/suruchi-creations/register" element={Auth ? <Navigate to={"/"} /> : <Register />}></Route>
                <Route  path="/suruchi-creations/forgetpassword" element={Auth ? <Navigate to="/" /> : <ForgetPassword />}></Route>
                <Route  path="/suruchi-creations/wishlist" element={<Protected Cmp={WishList} />}></Route>
                <Route  path="/login" element={Auth ? <Navigate to="/" /> : <Login />}></Route>
                <Route  path="/about" element={<About />}></Route>
                <Route path="/cart" element={<Protected Cmp={Cart} />}></Route>
                <Route  path='/suruchi-creations/checkout' element={<Protected Cmp={CheckoutPage} />}></Route>
                <Route  path="/suruchi-creations/checkout-to-ship" element={<Protected Cmp={Shippingpage} />}></Route>
                <Route  path="/suruchi-creations/checkout-to-payment" element={<Protected Cmp={PaymentPage} />}></Route>
                <Route  path="/suruchi-creations/success-msg" element={<Protected Cmp={OrderSuccess} />}></Route>
                <Route  path="/search/:item" element={<SearchPage />} ></Route>
                <Route  path='/suruchi-creations/products/categories' element={<Categories />}></Route>
                <Route  path='/suruchi-creations/products/:id' element={<CategoryProducts />}></Route>
                <Route  path='/suruchi-creations/my-account' element={<Protected Cmp={Profile} />}></Route>
                <Route  path='/suruchi-creations/change-password' element={<Protected Cmp={ChangePassword} />}></Route>
                <Route  path='/suruchi-creations/manage-address' element={<Protected Cmp={ManageAddress} />}></Route>
                <Route  path='/suruchi-creations/my-orders' element={<Protected Cmp={MyOrders} />}></Route>
                <Route  path='/suruchi-creations/review/:id' element={<Protected Cmp={ReviewForm} />}></Route>
                <Route  path='/suruchi-creations/edit-address/:id' element={<Protected Cmp={EditAddress} />}></Route>
                <Route path='*' element={<PageNotFound />}></Route>
              </Route>


              <Route  path="/admin" element={<AdminLogin />} />
              <Route  path="/admin-dashboard" element={<Dashboard />} />
              <Route  path="/admin-catalog" element={<Catalog />} />
              <Route  path="/admin-catalog/categories" element={<AdminCategories />} />
              <Route  path='/catalog/products/category' element={<AddCategory />} />
              <Route  path='/admin-catalog/products' element={<Products />} />
              <Route  path='/catalog/products/add' element={<AddProduct />} />
              <Route  path='/catalog/products/category-edit/:id' element={<Editcategory />} />
              <Route  path="/catalog/products/product-edit/:id" element={<EditProduct />} />
              <Route  path="/admin-customer" element={<Customer />} />
              <Route  path='/admin-customer/user' element={<Users />} />
              <Route  path='/admin-customer/subscribers' element={<Subscribers />} />
              <Route path="/admin-sales" element={<Sales/>}/>
              <Route path="/admin-sales/report" element={<SalesReport/>}/>
              <Route path="/admin-cms" element={<Cms/>}/>
              <Route path='/admin-cms/pages' element={<Pages/>}/>
              <Route path='/admin-cms/logo' element={<Logo/>}/>
              <Route path='/admin-cms/banner' element={<BannerSlider/>}/>
              <Route path='/admin-cms/social-links' element={<SocialLinks/>}/>
              <Route path='/admin-cms/quick-links' element={<QuickLinks/>}/>
            </Routes>


          </>
      }
    </div>
  );
}

export default App;




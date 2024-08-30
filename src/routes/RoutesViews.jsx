import { Routes, Route } from 'react-router-dom';
import HomePage from "../pages/HomePage"
import RegisterPage from '../pages/RegisterPage';
import ErrorPage from '../pages/ErrorPage';
import NavbarC from '../components/NavbarC';
import FooterC from '../components/FooterC';
import LoginPage from '../pages/LoginPage';
import AdminPage from '../pages/AdminPage';
import UserPage from '../pages/UserPage';
import ProductPage from '../pages/ProductPage';
import AdminUserPage from '../pages/AdminUserPage';
import AdminProductsPage from '../pages/AdminProductsPage';
import UserFavPage from '../pages/UserFavPage';

const RoutesViews = () => {
  return (
    <>
    <NavbarC />
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/product/:idProducto' element={<ProductPage />}/>
        <Route path='/user-fav' element={<UserFavPage />}/>
        <Route path='/admin' element={<AdminPage />}/>
        <Route path='/adminUsers' element={<AdminUserPage />}/>
        <Route path='/adminProducts' element={<AdminProductsPage />}/>
        <Route path='/user' element={<UserPage />}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/login' element={<LoginPage />}/>
        <Route path='*' element={<ErrorPage/>}/>
    </Routes>
    <FooterC />
    </>
  )
}

export default RoutesViews
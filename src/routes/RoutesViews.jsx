import { Routes, Route } from 'react-router-dom';
import HomePage from "../pages/HomePage"
import RegisterPage from '../pages/RegisterPage';
import ErrorPage from '../pages/ErrorPage';
import NavbarC from '../components/NavbarC';
import FooterC from '../components/FooterC';

const RoutesViews = () => {
  return (
    <>
    <NavbarC />
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='*' element={<ErrorPage/>}/>
    </Routes>
    <FooterC />
    </>
  )
}

export default RoutesViews
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { lazy, Suspense } from 'react'; 
import {  Routes, Route, useNavigate } from 'react-router-dom';
import HomeNav from './components/HomeNav';
import FestivalNav from './components/FestivalNav';
import Footer from './components/Footer';
import titleIcon from "./Images/titleIcon.png";
import LoginNav from './components/LoginNav';
import FesSearch from './pages/FesSearch';
import ResSearch from './pages/ResSearch';

// Lazy Loading
const Home = lazy(() => import('./pages/Home'));
const Festivals = lazy(() => import('./pages/Festivals'));
const FesPrivateRoute = lazy(() => import('./Routers/FesPrivateRoute'));
const Restaurant = lazy(() => import('./pages/Restaurant'));
const ResPrivateRoute = lazy(() => import('./Routers/ResPrivateRoute'));
const LoginPrivateRoute = lazy(() => import('./Routers/LoginPrivateRoute'));
const SignUp = lazy(() => import('./pages/SignUp'));

function App() {
  const navigate = useNavigate();

  const isLoggedIn = localStorage.getItem('isLoggedIn');

  return (
    <div 
    className="App">
      <div 
      onClick={()=>navigate('/')}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1,
        cursor : "pointer",
      }}>
      <img className='main_icon'
      src={titleIcon} alt="" />
      </div>
      {
        isLoggedIn === "true" ? <LoginNav/> : <HomeNav/>
      }
        
      <FestivalNav/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/festivals' element={<Festivals/>}></Route>
        <Route path='/festivals/:id' element={<FesPrivateRoute/>}></Route>
        <Route path='/restaurant' element={<Restaurant/>}></Route>
        <Route path='/restaurant/:id' element={<ResPrivateRoute/>}></Route>
        <Route path='/login' element={<LoginPrivateRoute/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/fessearch' element={<FesSearch/>}></Route>
        <Route path='/ressearch' element={<ResSearch/>}></Route>
      </Routes>
      
      <Footer/>
    </div>
  );
}

export default App;

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {  Routes, Route, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import HomeNav from './components/HomeNav';
import Festivals from './pages/Festivals';
import FestivalNav from './components/FestivalNav';
import Restaurant from './pages/Restaurant';
import Footer from './components/Footer';
import titleIcon from "./Images/titleIcon.png";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FesPrivateRoute from './Routers/FesPrivateRoute';
import ResPrivateRoute from './Routers/ResPrivateRoute';
import LoginPrivateRoute from './Routers/LoginPrivateRoute';
import LoginNav from './components/LoginNav';
import FesSearch from './pages/FesSearch';
import ResSearch from './pages/ResSearch';


function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isLoggedIn = localStorage.getItem('isLoggedIn');



    


  return (
    <div 
    className="App">
      <div onClick={()=>navigate('/')}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1,
        cursor : "pointer",
      }}>
        <img style={{ width: "135px", height: "135px" }} src={titleIcon} alt="" />
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

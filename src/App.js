import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {  Routes, Route, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import FesDetail from './pages/FesDetail';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import HomeNav from './components/HomeNav';
import Festivals from './pages/Festivals';
import FestivalNav from './components/FestivalNav';
import Restaurant from './pages/Restaurant';
import Footer from './components/Footer';
import ResDetail from './pages/ResDetail';
import titleIcon from "./Images/titleIcon.png";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    // 로컬 스토리지에서 로그인 상태 가져오기
    const isLoggedIn = localStorage.getItem('isLoggedIn');

    // 리덕스 액션 디스패치하여 로그인 상태 업데이트
    if (isLoggedIn === 'true') {
      dispatch({ type: 'LOGIN' });
    }
  }, []);

  
  return (
    <div className="App">
      <div onClick={()=>navigate('/')}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1,
      }}>
        <img style={{ width: "135px", height: "135px" }} src={titleIcon} alt="" />
      </div>
      <HomeNav/>
      <FestivalNav/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/festivals' element={<Festivals/>}></Route>
        <Route path='/festivals/:id' element={<FesDetail/>}></Route>
        <Route path='/restaurant' element={<Restaurant/>}></Route>
        <Route path='/restaurant/:id' element={<ResDetail/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

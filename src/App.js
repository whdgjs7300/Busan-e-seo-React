import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {  Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import HomeNav from './components/HomeNav';
import Festivals from './pages/Festivals';
import FestivalNav from './components/FestivalNav';
import Restaurant from './pages/Restaurant';


function App() {
  return (
    <div className="App">
      <HomeNav/>
      <FestivalNav/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/festivals' element={<Festivals/>}></Route>
        <Route path='/festivals/:id' element={<Detail/>}></Route>
        <Route path='/restaurant' element={<Restaurant/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
      </Routes>
    </div>
  );
}

export default App;

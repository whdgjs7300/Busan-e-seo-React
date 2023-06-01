import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {  Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Login from './pages/Login';
import SignUp from './pages/SignUp';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/festivals:id' element={<Detail/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
      </Routes>
    </div>
  );
}

export default App;

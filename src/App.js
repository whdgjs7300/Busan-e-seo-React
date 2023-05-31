import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {  Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/festivals:id' element={<Detail/>}></Route>
      </Routes>
    </div>
  );
}

export default App;

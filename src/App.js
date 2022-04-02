import 'bootstrap/dist/css/bootstrap.min.css';
import Back from './Back/Back.js';
import Front from './Front/Front.js';
import Login from './Back/Login.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Front/>} exact />
          <Route path='/home' element={<Front/>} />
          <Route path='admin/*' element={<Back/>} />
          <Route path='/login' element={<Login/>} />
        </Routes>
      </BrowserRouter>
        
    </div>
  );
}

export default App;

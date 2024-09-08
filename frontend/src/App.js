import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import { Home } from './components/pages/Home';
import { Register } from './components/pages/Auth/Register';
import { Login } from './components/pages/Auth/Login';



function App() {
  return (
    <Router>
      <p><Link to={'/'}>Home</Link></p>
      <p><Link to={'/login'}>Login</Link></p>
      <p><Link to={'/register'}>Register</Link></p>
      
      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>

  );
}

export default App;

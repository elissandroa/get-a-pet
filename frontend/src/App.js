import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Home } from './components/pages/Home';
import { Register } from './components/pages/Auth/Register';
import { Login } from './components/pages/Auth/Login';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Container } from './components/layout/Container'



function App() {
  return (
    <Router>
      <Navbar />
      <Container>
        <Routes>
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </Container>
      <Footer />
    </Router>

  );
}

export default App;

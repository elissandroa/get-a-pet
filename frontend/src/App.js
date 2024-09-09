import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Home } from './components/pages/Home';
import { Register } from './components/pages/Auth/Register';
import { Login } from './components/pages/Auth/Login';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Container } from './components/layout/Container'


/* Context */
import { UserProvider } from './context/UserContext';




function App() {
  return (
    <Router>
      <UserProvider>
        <Navbar />
        <Container>
          <Routes>
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/' element={<Home />} />
          </Routes>
        </Container>
        <Footer />
      </UserProvider>
    </Router>

  );
}

export default App;

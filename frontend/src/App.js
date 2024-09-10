import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Home } from './components/pages/Home';
import { Register } from './components/pages/Auth/Register';
import { Login } from './components/pages/Auth/Login';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Container } from './components/layout/Container'


/* Context */
import { UserProvider } from './context/UserContext';
import { Message } from './components/layout/Message';
import { Profile } from './components/pages/User/Profile';
import { Mypets } from './components/pages/Pet/Mypets';
import { AddPet } from './components/pages/Pet/AddPet';




function App() {
  return (
    <Router>
      <UserProvider>
        <Navbar />
        <Message />
        <Container>
          <Routes>
          <Route path='/pets/add' element={<AddPet />} />
            <Route path='/pets/mypets' element={<Mypets />} />
            <Route path='/user/profile' element={<Profile />} />
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

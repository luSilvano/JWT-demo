
import { useContext } from 'react'
import './App.css'

import { Routes, Route, Link } from 'react-router-dom'
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Profile } from './pages/Profile';
import { RequireAuth } from './contexts/Auth/RequireAuth';
import { AuthContext } from './contexts/Auth/AuthContext';

function App() {
  const auth = useContext(AuthContext)

  async function handleLogout() {
    await auth.signout()
    window.location.href = window.location.href
  }

  return (
    <div className="App">
      <header>
        <h1>Header</h1>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/login'>Login</Link>
          <Link to='/user'>Profile</Link>
          {auth.user && <button onClick={handleLogout}>Sair</button>}
        </nav>
      </header>
      <hr />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/user' element={<RequireAuth><Profile /></RequireAuth>}></Route>
      </Routes>
    </div>
  );
}

export default App

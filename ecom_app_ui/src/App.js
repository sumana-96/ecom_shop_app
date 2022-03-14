import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Catalogue from './components/catalogue';
import Login from './components/login';

function App() {
    return (
      <Router>
          <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav mr-auto">
              <li><Link to={'/home'} className="nav-link"> Home </Link></li>
              <li><Link to={'/catalogue'} className="nav-link">Catalogue</Link></li>
              <li><Link to={'/login'} className="nav-link">Login</Link></li>
            </ul>
            </nav>
            <hr />
            <Routes>
                <Route exact path='/home' element={<Home />} />
                <Route path='/catalogue' element={<Catalogue />} />
                <Route path='/login' element={<Login />} />
            </Routes>
          </div>
        </Router>
  );
}

export default App;

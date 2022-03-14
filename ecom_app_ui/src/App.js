import './App.css';
import Home from './components/home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Catalogue from './components/catalogue';
import Login from './components/login';

export default function App() {
    return (
      <Router>
          <div>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/catalogue' element={<Catalogue />} />
                <Route path='/login' element={<Login />} />
            </Routes>
          </div>
        </Router>
  );
}

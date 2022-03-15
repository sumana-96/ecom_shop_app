import './App.css';
import Home from './components/home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Catalogue from './components/catalogue';
import Login from './components/login';
import SignUpSide from "./components/signupSide";
export default function App() {
    return (
      <Router>
          <div>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/catalogue' element={<Catalogue />} />
                <Route path='/login' element={<Login />} />
                <Route exact path='/signup' element={<SignUpSide />} />
            </Routes>
          </div>
        </Router>
  );
}

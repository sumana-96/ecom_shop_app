import React, { useState } from "react";
import "./App.css";
import Home from "./components/home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Catalogue from "./components/catalogue";
import Login from "./components/login";
import Admin from "./components/admin";
import SignUpSide from "./components/signupSide";
import { Provider } from "react-redux";
import store from './redux/store';
import { AppContext } from "./lib/contextLib";
export default function App() {
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  return (
    <Provider store={store}>
    <Router>
      <div>
      <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
          <Route exact path="/signup" element={<SignUpSide />} />
        </Routes>
        </AppContext.Provider>
      </div>
    </Router></Provider>
  );
}

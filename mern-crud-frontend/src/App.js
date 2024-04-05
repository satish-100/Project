// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ItemsList from './components/ItemsList';
import AddItem from './components/AddItem';
import EditItem from './components/EditItem';
import SignupForm from './components/signup'
import Login from './components/login'
import Dashboard from './components/Dashboard'


const App = () => {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route exact path="/" element={<ItemsList/>} />
          <Route exact path="/add" element={<AddItem/>} />
          <Route exact path="/edit/:id" element={<EditItem/>}/>
          <Route exact path="/Signup/" element={<SignupForm/>}/>
          <Route exact path="/Login/" element={<Login/>}/>
          <Route exact path="/Dashboard/" element={<Dashboard/>}/>
         
        </Routes>
      </div>
    </Router>
  );
};

export default App;

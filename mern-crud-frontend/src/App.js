import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ItemsList from './components/ItemsList';
import AddItem from './components/AddItem';
import EditItem from './components/EditItem';
import SignupForm from './components/signup';
import Login from './components/login';
import Dashboard from './components/Dashboard';
import Test from './components/Test'
import Example  from './components/Example';
import Example1 from './components/examples/example1'
import Example2 from './components/examples/example2'
import Example3 from './components/examples/example3'
import Example4 from './components/examples/example4'
import Example5 from './components/examples/example5'
import Example6 from './components/examples/example6'
import Example7 from './components/examples/example7'
import Example8 from './components/examples/example8'

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <div className="container">
        <Routes>
          <Route exact path="/" element={<ItemsList />} />
          <Route exact path="/add" element={<AddItem />} />
          <Route exact path="/edit/:id" element={<EditItem />} />
          <Route exact path="/Signup/" element={<SignupForm />} />
          <Route exact path="/Login/" element={<Login />} />
          <Route exact path="/Dashboard/" element={<Dashboard />} />
          {/* Use PrivateRoute directly */}
          {/* <PrivateRoute path="/Dashboard" element={<Dashboard />} isAuthenticated={isAuthenticated} /> */}
          {/* Redirect to Dashboard by default */}
          {/* <Route path="*" element={<Navigate to="/Dashboard" />} /> */}
          <Route exact path="/Test/" element={<Test />} />
          <Route path = "/Example" element = {<Example />} />
          <Route path = "/Example1" element = {<Example1 />} />
          <Route path = "/Example2" element = {<Example2 />} />
          <Route path = "/Example3" element = {<Example3 />} />
          <Route path = "/Example4" element = {<Example4 />} />
          <Route path = "/Example5" element = {<Example5 />} />
          <Route path = "/Example6" element = {<Example6 />} />
          <Route path = "/Example7" element = {<Example7 />} />
          <Route path = "/Example8" element = {<Example8 />} />
          
        </Routes>
      </div>
    </Router>
  );
};

export default App;

import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './component/Navbar';
import Footer from './component/Footer'
import NewUser from './component/multi_step_form/UserForm'
import Home from './component/Home';


function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route  exact path="/" component={Home}/>
        <Route exact path="/register" component={NewUser}/>
      </Switch>
      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;

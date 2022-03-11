import logo from './logo.svg';
import './default.scss';
import { Switch, Route } from 'react-router-dom';
import Home from './components/home';
import SignUp from './components/signup';
import Login from './components/login';
import Dashboard from './components/dashboard';
import { BrowserRouter } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

function App() {

  
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path="/" render={()=> (
          <Home/>
        )}/>
        <Route exact path="/signup" render={()=> (
          <SignUp/>
        )}/>
        <Route exact path="/login" render={()=> (
          <Login/>
        )}/>
        <Route exact path="/dashboard" render={()=> (
          <Dashboard/>
        )}/>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

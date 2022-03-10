import logo from './logo.svg';
import './default.scss';
import { Switch, Route } from 'react-router-dom';
import Home from './components/home';
import SignUp from './components/signup';
import Login from './components/login';
import Dashboard from './components/dashboard';

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;

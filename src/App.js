import logo from './logo.svg';
import './default.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home';
import SignUp from './components/signup';
import Login from './components/login';
import Dashboard from './components/dashboard';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route  path="/" render={()=> (
          <Home/>
        )}/>
        <Route path="/signup" render={()=> (
          <SignUp/>
        )}/>
        <Route path="/login" render={()=> (
          <Login/>
        )}/>
        <Route path="/dashboard" render={()=> (
          <Dashboard/>
        )}/>
      </Routes>
    </div>
  );
}

export default App;

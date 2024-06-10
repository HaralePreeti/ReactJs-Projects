import { BrowserRouter,Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Component/Login';
import ForgotPassword from './Component/ForgotPassword';
import SignUp from './Component/SignUp';
import Dashboard from './Component/Dashboard';
import Home from './Component/Childerns/Home';
import About from './Component/Childerns/About';
import Service from './Component/Childerns/Service';
import Contact from './Component/Childerns/Contact';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path='/' exact Component={Login}></Route>
            <Route path='/login' exact Component={Login}></Route>
            <Route path='/forgotpassword' exact Component={ForgotPassword}></Route>
            <Route path='/signup' exact Component={SignUp}></Route>
            <Route path='/dashboard' exact Component={Dashboard}></Route>

            <Route path='/Dashboard/home' Component={Home}></Route>  
            <Route path='/Dashboard/about' Component={About}></Route>
            <Route path='/Dashboard/service' Component={Service} ></Route>    
            <Route path='/Dashboard/contact' Component={Contact}></Route>    
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

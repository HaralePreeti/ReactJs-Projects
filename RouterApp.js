import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Gallery from './Pages/Gallery';
import AboutUs from './Pages/AboutUs';
import BookCar from './BookCar';


function App() {
  return (
    <div>
      <BrowserRouter>
      <div className='container'>
        <div className='header'>
          <h2>Apani<span>Cruiser</span></h2>
          <Link to='/home'>Home</Link>
          <Link to='/gallery'>Gallery</Link>
          <Link to='aboutus'>AboutUs</Link>
          <Link to='/bookcar'>BookCar</Link>
         </div>
      </div>
          <Routes>
            <Route path='/' exact Component={Home}></Route>
            <Route path='/home' exact Component={Home}></Route>
            <Route path='/gallery' exact Component={Gallery}></Route>
            <Route path='/aboutus' exact Component={AboutUs}></Route>
            <Route path='/bookcar' exact Component={BookCar}></Route>
            
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

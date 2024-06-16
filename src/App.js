import { BrowserRouter, Form, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Menu from './pages/Menu'
import ProductDetails from './pages/ProductDetails';
import CartDetails from './pages/CartDetails';
import Contact from './pages/Contact';
import Forms from './pages/CustomForm'
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Menu/>
           <Routes>
           <Route path="/home" element={<Home/>} />
           <Route path="/products/:id" element={<ProductDetails/>} />
           <Route path='/cart' element={<CartDetails/>}/>
           <Route path='/contacts' element={<Contact/>}/>
           <Route path='/form' element={<Forms/>}/>
           <Route path='/login' element={<Login/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

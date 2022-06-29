import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Orders from './components/Orders';
import Brands from './components/Brands';
import Connections from './components/Connections';
import Footer from './components/Footer';

function App() {
  return (
    <div className='bodycolor' >
      <Navbar />
    <Routes>
      <Route path={'/orders'} element={<Orders />} />
      <Route exact path={'/'} element={<Brands />} />
      <Route path={'/connections'} element={<Connections />} />
    </Routes>
    <Footer />
    </div>
  );
}

export default App;

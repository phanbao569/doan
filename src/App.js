import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Login from './component/Login';
import Test from './component/Test'
import Header from './Manager/component/Header';
import Home from './Manager/component/Home';
import Menu from './Manager/component/Menu';
import Footer from './Manager/component/Footer';
import TraCuu from './Manager/component/TraCuu';
function App() {
  return (
    <div className="relative w-full h-full">
      <Header />
      <Menu/>
      <Routes>
        <Route path="/*" element={<Home/>} />
        <Route path="/TraCuu" element={<TraCuu/>} />
        
      </Routes>
      <Footer className='absolute bottom-0'/> 
    </div>
  );
}

export default App;

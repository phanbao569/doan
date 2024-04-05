import { Route, Routes,Link } from 'react-router-dom';
import './App.css';
import Test from './component/Test'
import _GiaHanTamTru from './component/User/_GiaHanTamTru'
import ThuTucGiaHanTamTru from './component/User/ThuTucGiaHanTamTru'
import thongtinuser from './component/User/ThongTinUser'
import HomeUser from './component/User/HomeUser'
function App() {
  return (
    <div className="App">
        {/* <Login></Login> */}
        <Routes>
        <Route path='/giahantamtru' element={<_GiaHanTamTru/>} />
        <Route path='/HomeUser' element={<HomeUser/>} />
        <Route path='/test' element={<Test/>} />
        <Route path='/thongtinuser' element={<thongtinuser/>} />
        <Route path='/thutucgiahantamtru' element={<ThuTucGiaHanTamTru/>} />
        </Routes>
        
    </div>
  );
}

export default App;

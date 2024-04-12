import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Login from './component/Auth/LoginComponent/Login';
import Test from './component/Test'
import Register from './component/Auth/RegisterComponent/Register';
import Nav from './component/Nav';
import ForgotPass from './component/Auth/ForgotPasswordComponent/ForgotPass';
import { useState } from 'react';
import Header from './component/Admin/adminComponent/Header';
import SideBar from './component/Admin/adminComponent/Sidebar';
import HomeDash from './component/Admin/adminComponent/HomeDash';
import TTAmdin from './component/Admin/TTAmdin';
import TTUser from './component/Admin/user/TTUser';
import ThongkeDT from './component/Admin/thongke/ThongkeDT';
import ThongkeHS from './component/Admin/thongke/ThongkeHS';
import ThongkeTK from './component/Admin/thongke/ThongkeTK';
import { getRoleFromToken, isTokenExpired } from './util/jwtUtils';
import { useEffect } from 'react';
import TTEmploy from './component/Admin/user/TTEmploy';
import TTManager from './component/Admin/user/TTManager';
import VBPL from './component/Admin/VBPL/VBPL';
import TTVBPL from './component/Admin/VBPL/TTVBPL';
import XemVB from './component/Admin/VBPL/XemVB';
import GetUserById from './component/Admin/user/GetUserById';
import CreateManager from './component/Admin/user/CreateManager';
import logo from '../src/component/User/img/footer.jpg';
import ChonThuTuc from './component/User/ThuTucs/ChonThuTuc';
import _GiaHanTamTru from './component/User/ThuTucs/_GiaHanTamTru'
import ThuTucGiaHanTamTru from './component/User/ThuTucs/ThuTucGiaHanTamTru'
import thongtinuser1 from './component/User/ThongTinUser'
import HomeUser from './component/User/HomeUser'
import ThuTuc from './component/User/ThuTucs/ThuTuc';
import NavUser from './component/User/Nav';
import ThongTinCaNhan from './component/User/ThongTinCaNhan';
import QuanLyHoSo from './component/User/QuanLyHoSo';
import NapThuTuc from './component/User/ThuTucs/NapThuTuc';
function App() {
  const [role, setRole] = useState('');

  useEffect(() => {
    const isValidToken = !isTokenExpired();
    if (isValidToken) {
      const userRole = getRoleFromToken();
      setRole(userRole);
    }
  }, []);

  return (
    // ở đây chúng ta sẽ làm một hàm kiểm tra token, nếu role = giá trị của admin thì sẽ ko hiện thanh nav lên mà sẽ hiện toàn bộ trang dashboard của admin
    <div className="App">

      {role === 'Admin' ? (


        <div className='grid-container'>
          {/* <AdminDashboard /> */}
          <SideBar />
          <Header />
          <Routes>

            <Route path="/" element={<HomeDash />} />
            <Route path="/thongkedoanhthu" element={<ThongkeDT />} />
            <Route path="/thongkehoso" element={<ThongkeHS />} />
            <Route path="/thongketaikhoan" element={<ThongkeTK />} />
            <Route path="/thongtinadmin" element={<TTAmdin />} />
            <Route path="/thongtinuser" element={<TTUser />} />
            <Route path="/thongtinmanager" element={<TTManager />} />
            <Route path="/thongtinemploy" element={<TTEmploy />} />
            <Route path='/VBPL' element={<VBPL />} />
            <Route path='/TTVBPL' element={<TTVBPL />} />
            <Route path='/xem-vb/:id' element={<XemVB />} />
            <Route path='/xem-user/:idUser' element={<GetUserById />} />
            <Route path='/createmanager' element={<CreateManager />} />
          </Routes>

        </div>


      ) : role === 'User' ? (
        <div className='flex flex-col'>
          <div className=''>
            {/* <AdminDashboard /> */}
            {/* <SideBar/> */}
            {/* <Header/> */}

            <NavUser />

            <div className="container mx-auto mb-24  ">
              <Routes>
                {/* bao thongtinuser */}
                <Route path="/ChonThuTuc" element={<ChonThuTuc />} />
                <Route path="/" element={<ChonThuTuc />} />
                <Route path="/napthutuc/:id" element={<NapThuTuc />} />
                <Route path="/thutuc/:id" element={<ThuTuc />} />
                <Route path="/thuTucGiahantamtru" element={<ThuTucGiaHanTamTru />} />
                <Route path="/thongtincuauser" element={<thongtinuser1 />} />
                <Route path="/giahantamtru" element={<_GiaHanTamTru />} />
                <Route path="/HomeUser" element={<HomeUser />} />
                <Route path="/quanlyhoso" element={<QuanLyHoSo />} />
                <Route path="/thongtincanhan" element={<ThongTinCaNhan />} />
                <Route path="/test" element={<Test />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/forgotpass" element={<ForgotPass />} />
              </Routes>
            </div>
            <footer className="  ">
              <img src={logo} alt="Logo" />

            </footer>


          </div>
        </div>
      ) : (
        <div>
          <Nav />
          <Routes>
            <Route path="/test" element={<Test />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgotpass" element={<ForgotPass />} />
          </Routes>
        </div>
      )}

    </div>
  );
}

export default App;

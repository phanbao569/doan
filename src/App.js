import { Route, Routes, Link, Navigate } from 'react-router-dom';
import './App.css';
import Login from './component/Auth/LoginComponent/Login';
import Test from './component/Test'
import Register from './component/Auth/RegisterComponent/Register';
import Nav from './component/Nav';
import ForgotPass from './component/Auth/ForgotPasswordComponent/ForgotPass';
import { createContext, useState } from 'react';
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
import thongtinuser1 from './component/User/ThongTinUser'
import HomeUser from './component/User/HomeUser'
import ThuTuc from './component/User/ThuTucs/ThuTuc';
import NavUser from './component/User/Nav';
import ThongTinCaNhan from './component/User/ThongTinCaNhan';
import QuanLyHoSo from './component/User/QuanLyHoSo';
import NapThuTuc from './component/User/ThuTucs/NapThuTuc';
import THongBaoLuuTru from './component/User/ThuTucs/_ThongBaoLuuTru';
import NhapThongTinUser from './component/User/ThongTinUser';
import CapNhatThongTin from './component/User/CapNhatThongTin';
import _ThongBaoLuuTru from './component/User/ThuTucs/_ThongBaoLuuTru';
export const GlobalContext = createContext();
function App() {
  const [role, setRole] = useState('');
  const [user, setUser] = useState();
  const [ttuser, setTTUser] = useState();
  const [checkthongtin, setcheckthongtin] = useState(true,true);


  useEffect(() => {
    const isValidToken = !isTokenExpired();
    if (isValidToken) {
      const userRole = getRoleFromToken();
      setRole(userRole);
    } else {localStorage.removeItem('token');
    // checkTTUser()
  }
  }, []);
  const checkTTUser = () => {
    if (ttuser?.hoTen !== "" && ttuser?.hoTen !== null && ttuser?.ngaySinh !== null && ttuser?.ngaysinh !== "") setcheckthongtin(true);
  }

  return (
    <GlobalContext.Provider value={{ user, setUser, ttuser, setTTUser }}>
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
          checkthongtin ? (
            <div className='flex flex-col'>
              <div className=''>
                {/* Content to render when checkthongtin is true */}
                <NavUser />
                <div className="container mx-auto mb-24">
                  <Routes>
                    <Route path="/NhapThongTinUser" element={<NhapThongTinUser />} />
                    <Route path="/CapNhatThongTin" element={<CapNhatThongTin />} />
                    <Route path="/ChonThuTuc" element={<ChonThuTuc />} />
                    <Route path="/" element={<ChonThuTuc />} />
                    <Route path="/napthutuc/:id" element={<NapThuTuc />} />
                    <Route path="/thutuc/:id" element={<ThuTuc />} />
                    <Route path="/thongtincuauser" element={<thongtinuser1 />} />
                    <Route path="/thongbaoluutru" element={<THongBaoLuuTru />} />
                    <Route path="/giahantamtru" element={<_GiaHanTamTru />} />
                    <Route path="/HomeUser" element={<HomeUser />} />
                    <Route path="/quanlyhoso" element={<QuanLyHoSo />} />
                    <Route path="/thongtincanhan" element={<ThongTinCaNhan />} />
                    <Route path="/test" element={<Test />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/forgotpass" element={<ForgotPass />} />
                    <Route path="/napthutuc/giahantamtru" element={<_GiaHanTamTru />} />
                    <Route path="/napthutuc/thongbaoluutru" element={<_ThongBaoLuuTru />} />
                    <Route path="/forgotpass" element={<ForgotPass />} />
                    <Route path="/forgotpass" element={<ForgotPass />} />
                    <Route path="/forgotpass" element={<ForgotPass />} />
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
              <NavUser />

              <Routes className="h-screen" >

                <Route path="*" element={<CapNhatThongTin />} />
                <Route path="/" element={<CapNhatThongTin />} />

              </Routes>
              <footer className="  ">
                  <img src={logo} alt="Logo" />
                </footer>
            </div>



          )



        ) : (
          <div>
             <NavUser />
            <Routes>
              <Route path="/test" element={<Test />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/forgotpass" element={<ForgotPass />} />
            </Routes>
          </div>
        )}
      </div>
    </GlobalContext.Provider>
  );
}

export default App;

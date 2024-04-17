import { Route, Routes, Link, Navigate, useNavigate } from 'react-router-dom';
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
import _XoaDangKyTamTru from './component/User/ThuTucs/_XoaDangKyTamTru';
import { getIDNguoiThayDoi, getRoleFromToken, isTokenExpired } from './util/jwtUtils';
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
import QuanLyHoSo from './component/User/QuanLyHoSo/QuanLyHoSo';
import NapThuTuc from './component/User/ThuTucs/NapThuTuc';
import THongBaoLuuTru from './component/User/ThuTucs/_ThongBaoLuuTru';
import NhapThongTinUser from './component/User/ThongTinUser';
import CapNhatThongTin from './component/User/CapNhatThongTin';
import _ThongBaoLuuTru from './component/User/ThuTucs/_ThongBaoLuuTru';
import _KhaiBaoTamTru from './component/User/ThuTucs/_KhaiBaoTamTru';
import _KhaiBaoThuongTru from './component/User/ThuTucs/_KhaiBaoThuongTru';
import ApiConfig, { apiUrl } from './ApiConfig';
import axios from 'axios';
import ThongkeTKAll from './component/Admin/thongke/thongKeTK/ThongkeTKAll';
import ThongKeTKTinh from './component/Admin/thongke/thongKeTK/ThongKeTKTinh';
import ThongKeTKHuyen from './component/Admin/thongke/thongKeTK/ThongKeHuyen';
import _KhaiBaoTamVang from './component/User/ThuTucs/_KhaiBaoTamVang';
import _XoaDangKyThuongTru from './component/User/ThuTucs/_XoaDangKyThuongTru';
export const GlobalContext = createContext();
function App() {
  const [role, setRole] = useState('User');
  const [user, setUser] = useState();
  const [ttuser, setTTUser] = useState();
  const [checkthongtin, setcheckthongtin] = useState(true,true);
  const idUser= getIDNguoiThayDoi();
  const navigate = useNavigate(); // Sử dụng hook useNavigate để chuyển trang(có thể dùng routes,Link)

  useEffect(() => {
    fetchdata();
    const isValidToken = !isTokenExpired();
    if (isValidToken) {
      const userRole = getRoleFromToken();
      setRole(userRole);
    } else {
      
      localStorage.removeItem('token');
      navigate('/login');
    // checkTTUser()
  } 
  }, []);

  const fetchdata = async () => {
    try {
      const response = await axios.get(apiUrl(ApiConfig.getUserById(idUser)));
      setUser(()=>response.data);
      const responseTT = await axios.get(apiUrl(ApiConfig.getThongTinUser(idUser)));
      setTTUser(()=>responseTT.data)
     if (ttuser?.hoTen != "" && ttuser?.hoTen !== null && ttuser?.ngaySinh !== null && ttuser?.ngaysinh !== "") setcheckthongtin(true);

    } catch (error) {
      console.error('sai gi do :', error);
    }
  };


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
              <Route path="/thongketaikhoan" element={<ThongkeTKAll />} />
              <Route path="/thongtinadmin" element={<TTAmdin />} />
              <Route path="/thongtinuser" element={<TTUser />} />
              <Route path="/thongtinmanager" element={<TTManager />} />
              <Route path="/thongtinemploy" element={<TTEmploy />} />
              <Route path='/VBPL' element={<VBPL />} />
              <Route path='/TTVBPL' element={<TTVBPL />} />
              <Route path='/xem-vb/:id' element={<XemVB />} />
              <Route path='/xem-user/:idUser' element={<GetUserById />} />
              <Route path='/createmanager' element={<CreateManager />} />
              <Route path='/xem-tinh/' element={<CreateManager />} />
              <Route path='xem-tinh/:tinhThanhPho' element={<ThongKeTKTinh />} />
              <Route path='xem-tinh/:tinhThanhPho/:huyen' element={<ThongKeTKHuyen />} />
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
                    <Route path="/napthutuc/dangkytamtru" element={<_KhaiBaoTamTru />} />
                    <Route path="/napthutuc/khaibaothuongtru" element={< _KhaiBaoThuongTru/>} />
                    <Route path="/napthutuc/dangkytamvang" element={<_KhaiBaoTamVang />} />
                    <Route path="/napthutuc/xoadangkytamtru" element={<_XoaDangKyTamTru />} />
                    <Route path="/napthutuc/xoadangkythuongtru" element={<_XoaDangKyThuongTru />} />
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

import { Route, Routes, Link, Navigate, useNavigate } from 'react-router-dom';
import './App.css';
import './index.css'
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
import UpDateVBPL from './component/Admin/VBPL/UpDateVBPL';
import _KhaiBaoTamVang from './component/User/ThuTucs/_KhaiBaoTamVang';
import _XoaDangKyThuongTru from './component/User/ThuTucs/_XoaDangKyThuongTru';
import _xemchitiethoso from './component/User/QuanLyHoSo/_XemChiTietHoSo';
import DanhGiaHoiDap from './component/User/DanhGiaHoiDap/DanhGiaHoiDap';
import ThongBaoThanhToan from './component/User/ThongBaoThanhToan'
import TraCuuM from './HomeMaster/component/TraCuuMaster';
import FooterMaster from './HomeMaster/component/FooterMaster';
import TraCuuMaster from './HomeMaster/component/TraCuuMaster';
import TraCuuUser from '../src/component/User/TraCuuUser';
import HomeMaster from './HomeMaster/component/HomeMaster';
import PhanAnhKienNghi from './HomeMaster/component/PhanAnhKienNghi';
import ChangePassword from './component/Auth/ChangePass/ChangePassword';
//route bao lam de lay du lieu nhe

import { ImOpt } from 'react-icons/im';
import HomeM from './Manager/component/HomeM';
import FooterM from './Manager/component/FooterM';
import HeaderM from './Manager/component/HeaderM';
import VBPLM from './Manager/component/VBPLM';
import XemVBPLM from './Manager/component/XemVBPLM';
import NavM from './Manager/component/NavM';
import TTUserM from './Manager/component/TTUserM';
import PheDuyetTaiKhoanM from './Manager/component/PheDuyetTaiKhoanM';
import PheDuyetHoSoM from './Manager/component/PheDuyetHoSoM';
import GiaHanTamTruM from './Manager/component/thutuc/GiaHanTamTruM';
import KhaiBaoTamVangM from './Manager/component/thutuc/KhaiBaoTamVangM';
import KhaiBaoThuongTruM from './Manager/component/thutuc/KhaiBaoThuongTruM';
import KhaiBaoTamTruM from './Manager/component/thutuc/KhaiBaoTamTruM';

/// Bảo ngu
import HoiDapM from './Manager/component/HoiDapM'
import DanhGiaM from './Manager/component/DanhGiaM'
import GetAllEmploy from './Manager/component/GetAllEmploy';
import CreateNV from './Manager/component/CreateNV';
import GetEmById from './Manager/component/GetEmById';
import ThongKeHoSo from './Manager/component/ThongKeHoSoM';
import TKDTB from './Manager/component/TKDTB';
import XoaDangKyTamTruM from './Manager/component/thutuc/XoaDangKyTamTruM';
import XoaDangKyThuongTruM from './Manager/component/thutuc/XoaDangKyThuongTruM';
import ThongBaoLuuTruM from './Manager/component/thutuc/ThongBaoLuuTruM';
import NavMaster from './HomeMaster/component/NavMaster';

export const GlobalContext = createContext();

function App() {

  const [role, setRole] = useState('');
  const [user, setUser] = useState();
  const [ttuser, setTTUser] = useState();
  const [checkthongtin, setcheckthongtin] = useState(false);
  const [isloading, setisloading] = useState(false);
  const navigate = useNavigate(); // Sử dụng hook useNavigate để chuyển trang(có thể dùng routes,Link)

  useEffect(() => {
    fetchdata();
    const isValidToken = !isTokenExpired();
    if (isValidToken) {
      const userRole = getRoleFromToken();
      setRole(userRole);
    } else {
      localStorage.removeItem('token');

    }
  }, [isloading]);

  const fetchdata = async () => {
    try {
      const response = await axios.get(apiUrl(ApiConfig.getUserById(getIDNguoiThayDoi())));
      setUser(response.data);
      const responseTT = await axios.get(apiUrl(ApiConfig.getThongTinUser(getIDNguoiThayDoi())));
      setTTUser(responseTT.data)
      if (ttuser?.ngaySinh !== null && ttuser?.ngaysinh !== "" && ttuser !== undefined) setcheckthongtin(true);
      console.log(ttuser);
      setisloading(true);
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <GlobalContext.Provider value={{ user, setUser, ttuser, setTTUser,setRole }}>

      <div className="App h-screen">
        {role === 'Admin' ? (
          <div className='grid-container'>
          
            <SideBar />
            <Header />
            {/* <NavBar/> */}
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
              <Route path='/changePass' element={<ChangePassword />} />
              {/* <Route path='/updateVBPL' element={<UpDateVBPL />} /> */}
            </Routes>

          </div>
        ) : role === 'User' ? (
          checkthongtin ? (
            <div className=''>
              {/* Content to render when checkthongtin is true */}
              <NavUser />

              {/* <NavUser /> */}
              <div className="container min-h-screen mx-auto mb-24">
                <Routes>
                  <Route path="/NhapThongTinUser" element={<NhapThongTinUser />} />
                  <Route path="/CapNhatThongTin" element={<CapNhatThongTin />} />
                  <Route path="/hotrohoidap" element={<DanhGiaHoiDap />} />
                  <Route path="/ChonThuTuc" element={<ChonThuTuc />} />
                  <Route path="/" element={<HomeUser />} />
                  <Route path="/napthutuc/:id" element={<NapThuTuc />} />
                  <Route path="/thutuc/:id" element={<ThuTuc />} />
                  <Route path="/thongbaoluutru" element={<THongBaoLuuTru />} />
                  <Route path="/giahantamtru" element={<_GiaHanTamTru />} />
                  <Route path="/HomeUser" element={<HomeUser />} />
                  <Route path="/quanlyhoso" element={<QuanLyHoSo />} />
                  <Route path="/thongtincanhan" element={<ThongTinCaNhan />} />
                  <Route path="/home" element={<HomeUser />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/forgotpass" element={<ForgotPass />} />
                  <Route path="/napthutuc/giahantamtru" element={<_GiaHanTamTru />} />
                  <Route path="/napthutuc/thongbaoluutru" element={<_ThongBaoLuuTru />} />
                  <Route path="/napthutuc/dangkytamtru" element={<_KhaiBaoTamTru />} />
                  <Route path="/napthutuc/dangkytamvang" element={<_KhaiBaoTamVang />} />
                  <Route path="/xemchitiethoso" element={<_xemchitiethoso />} />
                  <Route path="/napthutuc/khaibaothuongtru" element={< _KhaiBaoThuongTru />} />
                  <Route path="/napthutuc/xoadangkytamtru" element={< _XoaDangKyTamTru />} />
                  <Route path="/napthutuc/xoadangkythuongtru" element={< _XoaDangKyThuongTru />} />
                  <Route path="/payment-callback?*" element={<ThongBaoThanhToan />} />
                  <Route path="/forgotpass" element={<ForgotPass />} />
                  <Route path="/forgotpass" element={<ForgotPass />} />
                  <Route path="/TraCuu" element={<TraCuuUser />} />
                  <Route path='/changePass' element={<ChangePassword />} />

                </Routes>
              </div>
              <footer>

              <FooterM className='bg-red-500' />
              </footer>

              {/* <footer className="  ">
            <img src={logo} alt="Logo" />
          </footer> */}
            </div>
          ) : (
            <div>
              <NavUser />
              <Routes className="h-screen" >
                <Route path="*" element={<CapNhatThongTin />} />
                <Route path="/" element={<CapNhatThongTin />} />
                  <Route path="/TraCuu" element={<TraCuuUser />} />
                  <Route path="/forgotpass" element={<ForgotPass />} />
                  <Route path='/changePass' element={<ChangePassword />} />
                <Route path="/ChonThuTuc" element={<ChonThuTuc />} />
                <Route path="/login" element={<Login />} />
              <Route path="/ChonThuTuc" element={<ChonThuTuc />} />
              <Route path="/register" element={<Register />} />
              <Route path="/forgotpass" element={<ForgotPass />} />
              <Route path="/register" element={<Register />} />
              <Route path="/" element={<HomeUser />} />
              <Route path="/VBPL" element={<VBPLM />} />
              <Route path="/xemVBPL/:id" element={<XemVBPLM />} />
              <Route path="/quanlyhoso" element={<TraCuuUser />} />
              <Route path="/hotrohoidap" element={<Login />} />
              <Route path="/*" element={<Login />} />
              <Route path="/thutuc/:id" element={<ThuTuc />} />
              </Routes>

            </div>
          )
        ) : role === 'Employ' ? (
          <div>
            {/* Xử lý cho Employ */}
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/" element={<HomeM />} />
              <Route path="/VBPLM" element={<VBPLM />} />
              <Route path="/xemVBPL/:id" element={<XemVBPLM />} />
              <Route path="/PheDuyetTaiKhoanM" element={<PheDuyetTaiKhoanM />} />
              <Route path="/PheDuyetHoSoM" element={<PheDuyetHoSoM />} />
              <Route path="/TTUserM" element={<TTUserM />} />
              <Route path="/GiaHanTamTruM" element={<GiaHanTamTruM />} />
              <Route path="/KhaiBaoTamVangM" element={<KhaiBaoTamVangM />} />
              <Route path="/KhaiBaoThuongTruM" element={<KhaiBaoThuongTruM />} />
              <Route path="/KhaiBaoTamTruM" element={<KhaiBaoTamTruM />} />
              <Route path="/ThongBaoLuuTruM" element={<ThongBaoLuuTruM />} />
              <Route path="/XoaDangKyTamTruM" element={<XoaDangKyTamTruM />} />
              <Route path="/XoaDangKyThuongTruM" element={<XoaDangKyThuongTruM />} />
              <Route path="/TraCuuM" element={<TraCuuM />} />
              <Route path="/hoidapm" element={<HoiDapM />} />
              <Route path="/danhgiam" element={<DanhGiaM />} />
              <Route path="/getallemploy" element={<GetAllEmploy />} />
              <Route path="/createNV/:formData" element={<CreateNV />} />
              <Route path='/xem-employ/:idUser' element={<GetEmById />} />
              <Route path="/thongkehosobaolamcholong" element={<ThongKeHoSo />} />
              <Route path="/tkdtb" element={<TKDTB />} />

            </Routes>
          </div>
        ) : role === 'Manager' ? (
          <div className='h-full min-h-screen'>
            {/* Xử lý cho Manager */}
            <HeaderM/>
            <NavM/>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register/>} />
              <Route path="/" element={<HomeM />} />
              <Route path="/VBPLM" element={<VBPLM />} />
              <Route path="/xemVBPL/:id" element={<XemVBPLM />} />
              <Route path="/PheDuyetTaiKhoanM" element={<PheDuyetTaiKhoanM />} />
              <Route path="/PheDuyetHoSoM" element={<PheDuyetHoSoM />} />
              <Route path="/TTUserM" element={<TTUserM />} />
              <Route path="/GiaHanTamTruM" element={<GiaHanTamTruM />} />
              <Route path="/KhaiBaoTamVangM" element={<KhaiBaoTamVangM />} />
              <Route path="/KhaiBaoThuongTruM" element={<KhaiBaoThuongTruM />} />
              <Route path="/KhaiBaoTamTruM" element={<KhaiBaoTamTruM />} />
              <Route path="/ThongBaoLuuTruM" element={<ThongBaoLuuTruM />} />
              <Route path="/XoaDangKyTamTruM" element={<XoaDangKyTamTruM />} />
              <Route path="/XoaDangKyThuongTruM" element={<XoaDangKyThuongTruM />} />
              <Route path="/TraCuuM" element={<TraCuuM />} />

              <Route path="/hoidapm" element={<HoiDapM />} />
              <Route path="/danhgiam" element={<DanhGiaM />} />
              <Route path="/getallemploy" element={<GetAllEmploy />} />
              <Route path="/createNV/:formData" element={<CreateNV />} />
              <Route path='/xem-employ/:idUser' element={<GetEmById />} />
              <Route path="/thongkehosobaolamcholong" element={<ThongKeHoSo />} />
              <Route path="/tkdtb" element={<TKDTB />} />
              <Route path="/thongtincanhan" element={<ThongTinCaNhan />} />
              <Route path="/changePass" element={<ChangePassword />} />
            </Routes>
            <FooterM />
          </div>
        ) : (
          // k dang nhap 
          <div className='h-full min-h-screen'>
            <NavUser />
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/ChonThuTuc" element={<ChonThuTuc />} />
              <Route path="/register" element={<Register />} />
              <Route path="/forgotpass" element={<ForgotPass />} />
              <Route path="/register" element={<Register />} />
              <Route path="/" element={<HomeUser />} />
              <Route path="/VBPL" element={<VBPLM />} />
              <Route path="/xemVBPL/:id" element={<XemVBPLM />} />
              <Route path="/quanlyhoso" element={<TraCuuUser />} />
              <Route path="/hotrohoidap" element={<Login />} />
              <Route path="/*" element={<Login />} />
              <Route path="/thutuc/:id" element={<ThuTuc />} />
            </Routes>
            <FooterM />
          </div>

        )}
      </div>
    </GlobalContext.Provider>
  );
}

export default App;

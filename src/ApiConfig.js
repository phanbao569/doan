const baseUrl = 'http://172.21.2.72:8888';

const ApiConfig = {
  login: '/login',
  sendEmailLogin: '/sendEmailLogin',
  sendEmailLoginAgain: '/sendEmailLoginAgain',
  registerCheck:'/registerCheck',
  registerConfirmAgain:'/registerConfirmAgain',
  register:'/register',
  sendEmailAgainForgotPass:'/sendEmailAgainForgotPass',
  setNewPassword:'/setNewPassword',
  checkCode:'/checkCode',
  checkAcount:'/checkAcount',
  setNewPassword:'/setNewPassword',
  createVBPL:'/createVBPL',
  getAdmin: (id) => `/getUserById/${id}`,
  getAllVBPL:'/getAllVBPL',
  getVBPL: (id) => `/getVBPL/${id}`,
  getAllUser:'/admin/getAlluser',
  getTTAdmin: (id) => `/TTNV/get/${id}`,
  getUserById: (id) => `/getUserById/${id}`,
  updateVBPL: '/updateVBPL',
  createTTAdmin:'/TTNV/create',
  updateTTAdmin:'/TTNV/update', 
  updateUser:'/admin/updateUser',
  createManager:'/admin/createManager',
  filter:'/FilterUser',
  thongkeUser:'/ThongKeUser',
  oderByHigh:'/ThongKeUserGiamDan',
  oderByLow:'/ThongKeUserTangDan',
 // createManager:'/admin/createUser',
  createGiaHanTamTru : '/GiaHanTamTru/create',
  updatethongtinuser:'/TTUser/update',
  khaibaotamtru:'/KhaiBaoTamTru/create',
  khaibaothuongtru :'/KhaiBaoThuongTru/create',
  khaibaotamvang :'/KhaiBaoTamVang/create',
  thongbaoluutru :'/ThongBaoLuuTru/create', 
  xoadangkytamtru :'/XoaDangKyTamTru/create',
  xoadangkythuongtru :'/XoaDangKyThuongTru/create',
  quanlydanhsachchoxuly: (id) => `/QuanLyHoSoUserChecking/${id}`,
  napthutucgiahantamtru: '/GiaHanTamTru/create',
  getThongTinUser: (id) => `/TTUser/${id}`,
  getTinhThanhPho: (tinhThanhPho) =>`/ThongKeUser/${tinhThanhPho}`,
  getHuyen:(tinhThanhPho,huyen)=>`/ThongKeUser/${tinhThanhPho}/${huyen}`,
  ThongKeUserFilter:(filter)=>`/ThongKeUserFilter/${filter}`
};

export const apiUrl = (endpoint) => {
  return baseUrl + endpoint;
};

export default ApiConfig;
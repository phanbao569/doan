const baseUrl = 'http://172.21.2.68:8888';

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
  lichsuhoidapbyId: (id) => `/getAllHoiDapByIdUser/${id}`,
  guiHoiDap :'/createHoiDap',
  xoadangkythuongtru :'/XoaDangKyThuongTru/create',
  getAllQuanLyHoSoUser: (id) => `/getAllQuanLyHoSoUser/${id}`,
  getDanhGiaHoSo: (id) => `/DanhGiaHoSoByIdHoSo/${id}`,
  napthutucgiahantamtru: '/GiaHanTamTru/create',
  taoDanhGiaHoSo: '/createDanhGiaHoSo',
  getThongTinUser: (id) => `/TTUser/${id}`,
  thanhtoan :(id,lephi)=>`/pay/${id}/${lephi}`,
  getTinhThanhPho: (tinhThanhPho) =>`/ThongKeUser/${tinhThanhPho}`,
  getHuyen:(tinhThanhPho,huyen)=>`/ThongKeUser/${tinhThanhPho}/${huyen}`,
  ThongKeUserFilter:(filter)=>`/ThongKeUserFilter/${filter}`
};

export const apiUrl = (endpoint) => {
  return baseUrl + endpoint;
};

export default ApiConfig;
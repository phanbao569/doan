const baseUrl = 'http://192.168.10.43:8888';

const ApiConfig = {
  login: '/login',
  sendEmailLogin: '/sendEmailLogin',
  sendEmailLoginAgain: '/sendEmailLoginAgain',
  registerCheck: '/registerCheck',
  registerConfirmAgain: '/registerConfirmAgain',
  register: '/register',
  sendEmailAgainForgotPass: '/sendEmailAgainForgotPass',
  setNewPassword: '/setNewPassword',
  checkCode: '/checkCode',
  checkAcount: '/checkAcount',
  setNewPassword: '/setNewPassword',
  changePass: '/changePassword',
  createVBPL: '/createVBPL',
  getAdmin: (id) => `/getUserById/${id}`,
  getAllVBPL: '/getAllVBPL',
  getTTUser: (idUser) => `/TTUser/${idUser}`,
  getVBPL: (id) => `/getVBPL/${id}`,
  getAllUser: '/admin/getAlluser',
  getTTAdmin: (id) => `/TTNV/get/${id}`,
  getUserById: (id) => `/getUserById/${id}`,
  getMaXacNhanByCCCD: (cccd) => `/getMaXacNhanByCCCD/${cccd}`,
  getAllHoSoByCCCD: (cccd) => `/getAllHoSoByCCCD/${cccd}`,
  updateVBPL: '/updateVBPL',
  createTTAdmin: '/TTNV/create',
  updateTTAdmin: '/TTNV/update',
  updateUser: '/admin/updateUser',
  createManager: '/admin/createManager',
  createEmployee:`/manager/createEmployee`,
  getAllEmployee:`/manager/getAllEmployee`,
  filter: '/FilterUser',
  thongkeUser: '/ThongKeUser',
  oderByHigh: '/ThongKeUserGiamDan',
  oderByLow: '/ThongKeUserTangDan',
  // createManager:'/admin/createUser',
  getAllHoSoCheckingByCoQuan: '/getAllHoSoCheckingByCoQuan',
  createGiaHanTamTru: '/GiaHanTamTru/create',
  updatethongtinuser: '/TTUser/update',
  khaibaotamtru: '/KhaiBaoTamTru/create',
  khaibaothuongtru: '/KhaiBaoThuongTru/create',
  khaibaotamvang: '/KhaiBaoTamVang/create',
  thongbaoluutru: '/ThongBaoLuuTru/create',
  xoadangkytamtru: '/XoaDangKyTamTru/create',
  lichsuhoidapbyId: (id) => `/getAllHoiDapByIdUser/${id}`,
  guiHoiDap: '/createHoiDap',
  xoadangkythuongtru: '/XoaDangKyThuongTru/create',
  getAllHoiDap:`/getAllHoiDap`,
  getHoiDapFilter:(filter)=>`/HoiDapFilter/${filter}`,
  updateHoiDap:`/updateHoiDap`,
  getAllQuanLyHoSoUser: (id) => `/getAllQuanLyHoSoUser/${id}`,
  getAllDanhGiaHoSo:`/getAllDanhGiaHoSo`,
  getDanhGiaHoSo: (id) => `/DanhGiaHoSoByIdHoSo/${id}`,
  pheDuyetTaiKhoanOK:`/pheDuyetTaiKhoanOK`,
  pheDuyetTaiKhoanKOOK:`/pheDuyetTaiKhoanKOOK`,
  napthutucgiahantamtru: '/GiaHanTamTru/create',
  getGiaHanTamTru: (id) => `/GiaHanTamTru/${id}`,
  putGiaHanTamTru: `/GiaHanTamTru/update`,
  getKhaiBaoTamTru: (id) => `/KhaiBaoTamTru/${id} `,
  putKhaiBaoTamTru: `/KhaiBaoTamTru/update`,
  getKhaiBaoTamVang: (id) => `/KhaiBaoTamVang/${id}`,
  putKhaiBaoTamVang: `/KhaiBaoTamVang/update`,
  getKhaiBaoThuongTru: (id) => `/KhaiBaoThuongTru/${id} `,
  putKhaiBaoThuongTru: `/KhaiBaoThuongTru/update`,
  getThongBaoLuuTru: (id) => `/ThongBaoLuuTru/${id} `,
  putThongBaoLuuTru: `/ThongBaoLuuTru/update`,
  getXoaDangKyThuongTru: (id) => `/XoaDangKyThuongTru/${id}`,
  putXoaDangKyThuongTru: `/XoaDangKyThuongTru/update`,
  getXoaDangKyTamTru: (id) => `/XoaDangKyTamTru/${id}`,
  taoDanhGiaHoSo: '/createDanhGiaHoSo',
  putXoaDangKyTamTru: `/XoaDangKyTamTru/update`,
  getThongTinUser: (id) => `/TTUser/${id}`,
  thanhtoan: (id, lephi) => `/pay/${id}/${lephi}`,
  PayingSuccess: (id, email) => `/PayingSuccess/${id}/${email}`,
  getTinhThanhPho: (tinhThanhPho) => `/ThongKeUser/${tinhThanhPho}`,
  getHuyen: (tinhThanhPho, huyen) => `/ThongKeUser/${tinhThanhPho}/${huyen}`,
  ThongKeUserFilter: (filter) => `/ThongKeUserFilter/${filter}`,
  getDonPheDuyet: `/employee/donPheDuyet`,
  ThongKeUserFilter: (filter) => `/ThongKeUserFilter/${filter}`,
  ThongKeHoSo: '/getThongKeHoSo',
  getThongKeHoSoCoQuan:`/getThongKeHoSoCoQuan`,
  deleteVBPL: (id) => `/deleteVBPL/${id}`,
  ThongKeDoanhThu: '/getThongKeDoanhThu',
  deleteAccount: (id) => `/admin/deleteUser/${id}`,
};
export const apiUrl = (endpoint) => {
  return baseUrl + endpoint;
};

export default ApiConfig;
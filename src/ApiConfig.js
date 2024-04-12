const baseUrl = 'http://172.21.2.113:8888';

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
  createManager:'/admin/createUser'
};

export const apiUrl = (endpoint) => {
  return baseUrl + endpoint;
};

export default ApiConfig;
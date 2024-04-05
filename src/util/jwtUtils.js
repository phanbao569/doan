import { jwtDecode } from "jwt-decode";

const getToken = () => {
  return localStorage.getItem('token');
};

const decodeToken = () => {
  const token = getToken();
  if (token) {
    return jwtDecode(token);
  } else {
    return null;
  }
  
};
const getFullNameFromToken = () => {
  const decodedToken = decodeToken();
  return decodedToken ? decodedToken.hoTen : null;
};

const isTokenExpired = () => {
  const decodedToken = decodeToken();
  if (decodedToken && decodedToken.exp) {
    const currentTime = Date.now()/1000;
    return decodedToken.exp < currentTime;
  }
  return true;
};
const timeToken =() =>{
  const decodedToken = decodeToken();
  if( decodeToken) return decodedToken.exp
}
const getRoleFromToken = () => {
  const decodedToken = decodeToken();
  // console.log(decodeToken)
  return decodedToken ? decodedToken.role : null;
};
const getIDNguoiThayDoi = () => {
  const decodedToken = decodeToken();
  // console.log(decodeToken)
  return decodedToken ? decodedToken.sub : null;
};


export { getToken, decodeToken, getFullNameFromToken, isTokenExpired,getRoleFromToken,getIDNguoiThayDoi,timeToken };

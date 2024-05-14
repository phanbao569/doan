  import React, { useState, useEffect, useRef } from 'react';
  import { useNavigate } from 'react-router-dom';
  import axios from 'axios';
  import { Link } from 'react-router-dom';
  import leftImage from '../../../image/vietnam1.png';
  import bcrypt from 'bcryptjs'
  import { jwtDecode } from "jwt-decode";
  import { decodeToken, getRoleFromToken, isTokenExpired, timeToken } from '../../../util/jwtUtils';
  import ApiConfig, { apiUrl } from '../../../ApiConfig';
  import PinInputForm from '../PinInputForm';
  import AlertSucess from '../../../Alert/AlertSucess';
  import AlertError from '../../../Alert/AlertError';
  import AlertLockedAccount from '../../../Alert/AlertLockedAccount'
  import { ToastContainer, toast } from 'react-toastify';
  // import AlertError from '../../../Alert/AlertError';
  function Login(onClose) {
    const navigate = useNavigate(); // Sử dụng hook useNavigate để chuyển trang(có thể dùng routes,Link)
    const [formLogin, setFormLogin] = useState({
      cccd: "",
      matKhau: "",
    });

    const [contextErr, setContextErr] = useState(false)
    const [code, setCode] = useState('');
    const [codeHash, setCodeHash] = useState('');
    const [showConfirmationDialog, setShowConfirmationDialog] = useState(false);
    const [timeLeft, setTimeLeft] = useState(20);
    const [isButtonEnabled, setIsButtonEnabled] = useState(true);
    const [showSuccessAlert, setShowSuccessAlert] = useState(false);
    const [showErrAlert, setShowErrAlert] = useState(false)
    const [ShowWarningAlert, setShowWarningAlert] = useState(false)
    const handlePinInputChange = (pinValue) => {
      setCode(pinValue);
    };

    //hàm xử lí thời gian
    useEffect(() => {

      if (timeLeft > 0) {
        const countdown = setInterval(() => {
          setTimeLeft(prevTime => {
            if (prevTime > 0) {
              return prevTime - 1;
            } else {
              clearInterval(countdown);
              return 0;
            }
          });
        }, 1000); // 1000 mili giây 
        return () => clearInterval(countdown);
      }
    }, [timeLeft]);
    const resetTime = () => {
      setTimeLeft(60);
      setIsButtonEnabled(true);
    };

    const handleLoginSubmit = async (event) => {

      event.preventDefault();
      const check = await bcrypt.compare(code, codeHash)
      //  console.log(code)
      console.log(check)
      if (code.length !== 6) {

        toast.warning('Bạn chưa nhập đủ 6 số');

        return;
      }
      if (check || !check) {
        try {
          const response = await axios.post(apiUrl(ApiConfig.login), formLogin);
          const responseData = response.data
          // setShowSuccessAlert(true);
          // if (response.data) {
          localStorage.setItem('token', responseData.token)
          const kiemTra = getRoleFromToken();
          console.log("role la : " + kiemTra)

          if (kiemTra === "Admin") {  window.location.reload() }
          else if (kiemTra === 'User'|| kiemTra==='Manager') 
          { 
            navigate('/'); 
            window.location.reload() 
          };


          console.log(timeToken() + " : " + Date.now() / 1000)

          // } else {
          //   console.error('Đăng nhập thất bại:' + responseData.message);
          //   alert('Đăng nhập thất bại ở trong try:' + responseData.message)
          // }
        } catch (error) {
          console.error('Xác nhận thất bại:', error.data);
          // Hiển thị thông báo lỗi cho người dùng
          toast.error('xác nhận thất bại.' + error.data);
        }
      } else {
        alert("bạn nhập mã xác nhận chưa đúng")
      }
    };
    // hàm xử lí dăng nhập 1* tức là chưa cần mail mới chỉ ở xác nhận tk và mật khẩu
    // const handleSubmit = async (e) => {
    //   setShowSuccessAlert(true);
    //   e.preventDefault();
    //   try {

    //     console.log(formLogin)
    //     const response = await axios.post(apiUrl(ApiConfig.sendEmailLogin), formLogin);
    //     const responseData = response.data;
    //     resetTime()
    //     setCodeHash(responseData)
    //     setShowConfirmationDialog(true)
    //   } catch (error) {
    //     console.error('Đăng nhập thất bại:', error.response.data);
    //     alert('Đăng nhập thất bại:' + error.response.data);
    //   }
    // };
    const handleSubmit = async (e) => {


      // setShowWarningAlert(true);
      e.preventDefault();
      try {
        console.log(formLogin);
        const response = await axios.post(apiUrl(ApiConfig.sendEmailLogin), formLogin);
        if (response && response.data) { // Kiểm tra response và response.data có tồn tại không
          const responseData = response.data;
          resetTime();
          setCodeHash(responseData);
          setShowConfirmationDialog(true);
        } else {
          console.error('Response or response.data is undefined');
          // Hiển thị thông báo lỗi cho người dùng
          alert('Đăng nhập thất bại: Không có dữ liệu từ máy chủ.');
        }
      } catch (error) {
        // setShowErrAlert(true);
        setShowWarningAlert(true)
        console.error('Đăng nhập thất bại 2:', error.response?.data || error.message);
        
        // alert('Đăng nhập thất bại:' + (error.response?.data || error.message));
      }
    };


    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormLogin({ ...formLogin, [name]: value });
      console.log(value)
      console.log(name);
      setContextErr(false)
    };
    // Hàm gửi lại mã
    const handleConfirmAgainMail = async (event) => {
      event.preventDefault();
      try {
        setTimeLeft(60);
        const response = await axios.post(apiUrl(ApiConfig.sendEmailLoginAgain), formLogin);
        console.log('Response from server:', response.data);
        setCodeHash(response.data)
        // Hiển thị hộp thoại xác nhận thành công
        setShowConfirmationDialog(true);
      } catch (error) {
        console.error('Xác nhận thất bại:', error);
        // Hiển thị thông báo lỗi cho người dùng
        toast.error('Xác nhận thất bại. Vui lòng thử lại .');
      }
    };
    
    return (
      <div className='h-auto flex justify-center'>
        <ToastContainer/>
        <div onSubmit={handleSubmit} className="container mx-auto px-4 py-8 mt-10">
          <div className="flex justify-center items-center">
            <img src={leftImage} alt="Left" className="w-1/4" />
            <div className="text-center w-full max-w-md bg-white rounded-lg shadow-md p-8">
              <h1 className="text-2xl font-bold text-center mb-4">Đăng nhập</h1>
              <form action="#">
                <div className="mb-6">
                  <label htmlFor="username" className="text-sm block mb-2 font-medium text-gray-700">Tên đăng nhập</label>
                  <input type="text" id="cccd" placeholder="Tên đăng nhập" name="cccd" onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-0 focus:ring-blue-500 focus:ring-opacity-50" />
                </div>
                <div className="mb-6">
                  <label htmlFor="password" className="text-sm block mb-2 font-medium text-gray-700">Mật khẩu</label>
                  <input type="password" id="password" placeholder="Mật khẩu" name="matKhau" onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-0 focus:ring-blue-500 focus:ring-opacity-50" />
                  <div className="mb-2">
                  {
                    contextErr ? (
                      <p className="text-xs block pt-2 font-medium text-red-700">Sai tên đăng nhập hoặc mật khẩu!</p>
                    ) : null
                  }
                  </div>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                  
                  

                  </div>
                  <Link to="/forgotpass" className="text-xs text-blue-500 hover:text-blue-700">Quên mật khẩu?</Link>
                </div>
                <button type="submit" className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700">Đăng nhập</button>
              </form>
              <Link to="/register" className="text-xs text-blue-500 hover:text-blue-700">Bạn chưa có tài khoản? Đăng kí ngay</Link>
            </div>
            <img src={leftImage} alt="Left" className="ml-12 w-1/4" />
          </div>

        </div>
        {showConfirmationDialog && (
          <div>
            <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div>
                  <p>Thời gian còn lại: {timeLeft} giây</p>
                  <div>

                  </div>
                  <h2 className="text-lg font-semibold mb-4">Nhập mã xác nhận từ Gmail</h2>
                  {/* <input
                    type="text-number"
                    maxLength={6}
                    placeholder="Mã xác nhận"
                    className="border rounded py-2 px-3 mb-4"
                    value={code}
                    onChange={(event) => setCode(event.target.value)}
                  /> */}
                  <PinInputForm onChange={handlePinInputChange} />
                  <div>

                  </div>
                  <button
                    onClick={handleLoginSubmit} disabled={timeLeft === 0}
                    className={`bg-blue-400 text-white py-2 px-4 rounded mr-2 hover:bg-blue-600 hover:text-gray-800 ${timeLeft === 0 && 'opacity-50 cursor-not-allowed'}`}
                  >
                    Xác nhận
                  </button>

                  <button
                    onClick={() => { setShowConfirmationDialog(false); resetTime(); }}

                    className="text-gray-600 py-2 px-4 rounded border border-gray-600 focus:outline-none focus:border-gray-800 transition-colors duration-300 hover:bg-gray-200 hover:text-gray-800"
                  >
                    Đóng
                  </button>
                </div>
                <a onClick={handleConfirmAgainMail} href="/login" className="text-xs text-blue-500 hover:text-blue-700">Bạn chưa mã xác nhận? Gửi lại mã...</a>


              </div>

            </div>

          </div>
        )}
        {showSuccessAlert && <AlertSucess onClose={() => setShowSuccessAlert(false)} />}
        {showErrAlert && <AlertError onClose={() => setShowErrAlert(false)} />}
        {ShowWarningAlert && <AlertLockedAccount onClose={() => setShowWarningAlert(false)} />}

      </div>
    );
  }

  export default Login;
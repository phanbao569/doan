import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import leftImage from '../../../image/vietnam1.png';
import DiaChi from '../../Diachi';
import ApiConfig,{apiUrl} from '../../../ApiConfig';
export default function Register() {
  //xử lí thông tin trong giao giện
  const navigate = useNavigate();
  const [code, setCode] = useState('');
  const [formData, setFormData] = useState({
    cccd: '',
    matKhau: '',
    hoTen: '',
    email: '',
    sdt: '',
    diaChiDKTK:{
      tinh:'',
      huyen:'',
      xa:''
    },
    anhCCCD: {
      anhMat: null,
      anhMatTruoc: null,
      anhMatSau: null,
    },
    code: '0',
    codeHashed: '0'

  },
  
  );
  const [contextErr, setContextErr] = useState(false)
  const [checkMK, setCheckMK] = useState('')
  //xử lí thông tin trong giao giện
  // state xử lí hộp thoại
  const [showConfirmationDialog, setShowConfirmationDialog] = useState(false);

  //state xử lí hộp thoại
  // state xử lí thời gian
  const [timeLeft, setTimeLeft] = useState(60);
  const [isButtonEnabled, setIsButtonEnabled] = useState(true);
  
  //hàm xử lí thời gian chờ xác nhận email
  useEffect(() => {
    // Kiểm tra nếu thời gian còn lại không âm
    if (timeLeft > 0) {
      const countdown = setInterval(() => {
        setTimeLeft(prevTime => {
          // Kiểm tra nếu thời gian còn lại sau khi giảm không âm
          if (prevTime > 0) {
            return prevTime - 1; // Giảm thời gian đếm ngược mỗi giây
          } else {
            clearInterval(countdown); // Dừng interval khi thời gian đếm ngược hết
            return 0; // Trả về 0 để ngăn chặn việc đếm ngược xuống âm
          }
        });
      }, 1000); // 1000 mili giây = 1 giây
  
      // Xóa interval khi component bị unmount
      return () => clearInterval(countdown);
    }
  }, [timeLeft]); // useEffect sẽ được gọi lại mỗi khi timeLeft thay đổi
   // useEffect chỉ chạy một lần sau khi component được render


  // Kiểm tra xem thời gian đếm ngược đã hết chưa

  const resetTime = () => {
    setTimeLeft(60); // Đặt lại thời gian về 60 giây
    setIsButtonEnabled(true); // Kích hoạt nút xác nhận lại
  };
  //xử lí api


  const handleConfirmationSubmit = async (event) => {
    formData.code = code;
    
    event.preventDefault();
    try {
      const response = await axios.post(apiUrl(ApiConfig.register), formData);

      console.log('Tình trạng:' + response.data);
      // Chuyển hướng người dùng đến trang chính của ứng dụng
      alert('Đắng kí thành công! ');
      setShowConfirmationDialog(false);
      navigate('/login')
      // Hiển thị thông báo xác nhận thành công cho người dùng

    } catch (error) {
      console.error('Xác nhận thất bại:', error);
      // Hiển thị thông báo lỗi cho người dùng
      alert('mã xác nhận xác nhận sai.');
    }
  };


  // Hàm gửi lại mã
  const handleConfirmAgainMail = async (event) => {
    
    event.preventDefault();
    try {
      setTimeLeft(60);

      const response = await axios.post(apiUrl(ApiConfig.registerConfirmAgain), formData);
      console.log('Response from server:', response.data);
      formData.codeHashed = response.data;
      // Hiển thị hộp thoại xác nhận thành công
      setShowConfirmationDialog(true);

    } catch (error) {
      console.error('Xác nhận thất bại:', error);
      // Hiển thị thông báo lỗi cho người dùng
      alert('Xác nhận thất bại. Vui lòng thử lại .');
    }
  };


  //xử lí api

  //xử lí thông tin trong giao giện
  const handleSubmit = async (event) => {
   
    event.preventDefault();
    //test thử giao diện hộp thoại xác nhận gmail
    
    // Kiểm tra các trường thông tin
    for (const key in formData) {
      if (formData.hasOwnProperty(key)) {
        if (!formData[key]) {
          alert(`Bạn phải nhập đầy đủ thông tin ở ${key}`);
          return;
        }
      }
    }


    // Kiểm tra các trường ảnh trong anhcccd
    for (const key in formData.anhCCCD) {
      if (formData.anhCCCD.hasOwnProperty(key)) {
        if (!formData.anhCCCD[key]) {
          alert(`Bạn phải tải lên ảnh ở ${key}`);
          return;
        }
      }
    }

    // Kiểm tra mật khẩu và nhập lại mật khẩu
    if (formData.matKhau !== checkMK) {
      alert('Mật khẩu và nhập lại mật khẩu không khớp');
      return;
    }

    // Gửi dữ liệu khi mật khẩu và nhập lại mật khẩu khớp
    console.log('Dữ liệu được gửi đi:', formData);
    
    try {
      

      const response = await axios.post(apiUrl(ApiConfig.registerCheck), formData);
      console.log('Response from server:', response.data);
      formData.codeHashed = response.data;
      
      setTimeLeft(60);
      // Hiển thị hộp thoại xác nhận thành công
      setShowConfirmationDialog(true);
    } catch (error) {
      alert('đăng kí thất bại do ' + error.response.data);
      
    }
  }



  // ham lay thongtin tu form
  const handleInputChange = (event) => {
    const { name, value, files } = event.target;
    if (name === 'nhapLaiMatKhau') {
      setCheckMK(value);
      
    } else {
      setFormData(prevState => ({
        ...prevState,
        [name]: files ? files[0] : value
      }));
    }
    kiemTraMKSai()
  }
  //hàm chuyển file ảnh thanh string

  //ham lay anhmat

  const handleAnhMatChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
  
    reader.onload = (event) => {
      // Chuyển đổi dữ liệu ảnh thành chuỗi base64
      const base64Image = event.target.result;
  
      // Cập nhật state hoặc thực hiện bất kỳ thao tác nào bạn muốn với chuỗi base64 này
      // Ví dụ: cập nhật state formData
      setFormData({
        ...formData,
        anhCCCD: {
          ...formData.anhCCCD,
          anhMat: base64Image
        }
      });
    };
  
    // Đọc dữ liệu ảnh dưới dạng base64
    reader.readAsDataURL(file);
  };
  //ham lay anhmattruoccccd
  const handleAnhCccdMatTruocChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      // Tạo URL từ dữ liệu của ảnh
      const base64Image = event.target.result;

      // Cập nhật state hoặc thực hiện bất kỳ thao tác nào bạn muốn với URL này
      // Ví dụ: cập nhật state formData
      setFormData({
        ...formData,
        anhCCCD: {
          ...formData.anhCCCD,
          anhMatTruoc: base64Image
        }
      });
    };
   
    reader.readAsDataURL(file);
  };
  // const handleAnhCccdMatTruocChange = (event) => {
  //   setFormData({
  //     ...formData,
  //     anhCCCD: {
  //       ...formData.anhCCCD,
  //       anhMatTruoc: event.target.files[0]
  //     }
  //   });
  // };
  //ham lay mat sau cccd
  // const handleAnhCccdMatSauChange = (event) => {
  //   setFormData({
  //     ...formData,
  //     anhCCCD: {
  //       ...formData.anhCCCD,
  //       anhMatSau: event.target.files[0]
  //     }
  //   });
  // };
  const handleAnhCccdMatSauChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      const base64Image = event.target.result;
      setFormData({
        ...formData,
        anhCCCD: {
          ...formData.anhCCCD,
          anhMatSau: base64Image
        }
      });
    };

    reader.readAsDataURL(file);
  };
  //xử lí thông tin trong giao giện
  //check mật khẩu
  const kiemTraMKSai=()=>{
   if (formData.matKhau!==null && formData.matKhau!== checkMK)  setContextErr(true)
   else setContextErr(false)
}

  return (

    <div className='h-atuo'  >

      <div onSubmit={handleSubmit} className="container mx-auto px-4 py-8">
        <div className="flex justify-center items-center">
          <img src={leftImage} alt="Left" className="w-1/4" />
          <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
           
            <form action="#">
              <div className="mb-6">
                <label htmlFor="username" className="text-sm block mb-2 font-medium text-gray-700">CCCD đăng kí</label>
                <input type="text" id="cccd" placeholder="CCCD đăng kí" name="cccd" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-0 focus:ring-blue-500 focus:ring-opacity-50" onChange={handleInputChange} />

              </div>
              <div className="mb-6">
                <label htmlFor="password" className="text-sm block mb-2 font-medium text-gray-700">Mật khẩu</label>
                <input type="password" id="password" placeholder="Mật khẩu" name="matKhau" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-0 focus:ring-blue-500 focus:ring-opacity-50" onChange={handleInputChange} />
              </div>
              <div className="mb-6">
                <label htmlFor="password" className="text-sm block mb-2 font-medium text-gray-700">Nhập lại mật khẩu</label>
                <input type="password" id="password" placeholder="Nhập lại mật khẩu" name="nhapLaiMatKhau" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-0 focus:ring-blue-500 focus:ring-opacity-50" onChange={handleInputChange} />
              {contextErr?(<h1 className='text-xs block pt-2 font-medium text-red-700' >Mật khẩu nhập lại khonong khớp</h1>):null}
              </div>
              <div className="mb-6">
                <label htmlFor="hoten" className="text-sm block mb-2 font-medium text-gray-700">Họ và tên</label>
                <input type="text" id="hoten" placeholder="Họ và tên" name="hoTen" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-0 focus:ring-blue-500 focus:ring-opacity-50" onChange={handleInputChange} />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="text-sm block mb-2 font-medium text-gray-700">Email</label>
                <input type="email" id="email" placeholder="Email" name="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-0 focus:ring-blue-500 focus:ring-opacity-50" onChange={handleInputChange} />
              </div>
              <div className="mb-6">
                <label htmlFor="sdt" className="text-sm block mb-2 font-medium text-gray-700">Số điện thoại</label>
                <input type="text" id="sdt" placeholder="Số điện thoại" name="sdt" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-0 focus:ring-blue-500 focus:ring-opacity-50" onChange={handleInputChange} />
              </div>
              <DiaChi
                onSelectCity={(cityId) => {
                  setFormData({ ...formData, diaChiDKTK: { ...formData.diaChiDKTK, tinh: cityId } });
                }}
                onSelectDistrict={(districtId) => {
                  setFormData({ ...formData, diaChiDKTK: { ...formData.diaChiDKTK, huyen: districtId } });
                }}
                onSelectWard={(wardId) => {
                  setFormData({ ...formData, diaChiDKTK: { ...formData.diaChiDKTK, xa: wardId } });
                }}
              />
              <div className="mt-4 mb-6 flex flex-row justify-between">
                <div className="w-1/3">
                  <label htmlFor="anhMat" className="text-sm block mb-2 font-medium text-gray-700">Ảnh khuôn mặt của bạn</label>
                  <input type="file" id="anhMat" name="anhMat" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-0 focus:ring-blue-500 focus:ring-opacity-50" onChange={handleAnhMatChange} />
                </div>
                <div className="w-1/3 ml-4">
                  <label htmlFor="anhCccdMatTruoc" className="text-sm block mb-2 font-medium text-gray-700">Ảnh mặt trước CCCD</label>
                  <input type="file" id="anhCccdMatTruoc" name="anhMatTruoc" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-0 focus:ring-blue-500 focus:ring-opacity-50" onChange={handleAnhCccdMatTruocChange} />
                </div>
                <div className="w-1/3 ml-4">
                  <label htmlFor="anhCccdMatSau" className="text-sm block mb-2 font-medium text-gray-700">Ảnh mặt sau CCCD</label>
                  <input type="file" id="anhCccdMatSau" name="anhMatSau" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-0 focus:ring-blue-500 focus:ring-opacity-50" onChange={handleAnhCccdMatSauChange} />
                </div>
              </div>
              <button type="submit" className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700">Đăng kí</button>

            </form>
            <Link to="/login" className="text-xs text-blue-500 hover:text-blue-700">Bạn đã có tài khoản ! Đăng nhập </Link>
          </div>
          <img src={leftImage} alt="Right" className="w-1/4" />
        </div>
      </div>


      {showConfirmationDialog && (
        <div>
          <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg shadow-md">
            <div>
              <p>Thời gian còn lại: {timeLeft} giây</p>
              
              <h2 className="text-lg font-semibold mb-4">Nhập mã xác nhận từ Gmail</h2>
              <input
                type="text"
                placeholder="Mã xác nhận"
                className="border rounded py-2 px-3 mb-4"
                value={code}
                onChange={(event) => setCode(event.target.value)}
              />
              <button
                onClick={handleConfirmationSubmit} disabled={timeLeft === 0}
                className={`bg-blue-400 text-white py-2 px-4 rounded mr-2 hover:bg-blue-600 hover:text-gray-800 ${timeLeft === 0 && 'opacity-50 cursor-not-allowed'}`}
              >
                Xác nhận
              </button>
              
              <button
                onClick={() => {setShowConfirmationDialog(false); resetTime();}}
                
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


    </div>
  )
}

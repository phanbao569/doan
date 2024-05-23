import React, { useState, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import ApiConfig, { apiUrl } from '../../../ApiConfig';
import { ToastContainer, toast } from 'react-toastify';
import PinInputForm from '../PinInputForm';
export default function ForgotPass() {

    const [code, setCode] = useState('');
    const [formQuenMatKhau, setFormQuenMatKhau] = useState({
        cccd: '',
        code: '0',
        codeHashed: '0',
        matKhauMoi: '0'
    })
    const [checkMK, setCheckMK] = useState('')
    const [showConfirmationDialog, setShowConfirmationDialog] = useState(false);
    const [showNhapMKDialog, setShowNhapMKDialog] = useState(false);
    const [timeLeft, setTimeLeft] = useState(60);
    const Navigate = useNavigate();
    // const [isButtonEnabled, setIsButtonEnabled] = useState(true);
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
    const resetTime = () => {
        setTimeLeft(60); // Đặt lại thời gian về 60 giây
    };
    // hàm lấy cccd
    const handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        setFormQuenMatKhau(prevState => ({
            ...prevState,
            [name]: value
        }));
    };


    // Trong hàm handleCheckCCCD
    const handleCheckCCCD = async (event) => {
        for (const key in formQuenMatKhau) {
            if (formQuenMatKhau.hasOwnProperty(key)) {
                if (!formQuenMatKhau[key]) {
                    toast.warn(`Bạn phải nhập đầy đủ thông tin ở ${key}`);
                    return;
                }
            }
        }

        try {
            // Cập nhật giá trị của cccd trong state formQuenMatKhau
            const response = await axios.post(apiUrl(ApiConfig.checkAcount), formQuenMatKhau);

            formQuenMatKhau.codeHashed = response.data;
            console.log('nhận mã thành công' + response.data);
            setTimeLeft(60);
            // Hiển thị hộp thoại xác nhận thành công
            setShowConfirmationDialog(true);
            // Đặt lại thời gian đếm ngược
            resetTime();
        } catch (error) {
            console.error('Xác nhận thất bại:', error);
            // Hiển thị thông báo lỗi cho người dùng
            toast.warning('CCCD không tồn tại khoặc chưa đăng ký tài khoản!!');
        }
    };
    // sẽ sữa lại câu lệnh này
    //
    const handleConfirmationSubmit = async (event) => {
        event.preventDefault();

        resetTime();
        formQuenMatKhau.code = code;
        // check code sẽ làm ở đăng nhập, đăng kí nếu sửa lại
        // const check = await bcrypt.compare(formQuenMatKhau.code,formQuenMatKhau.codeHashed)
        // if (check) console.log("OK")
        // else console.log("Not OK");
        try {
            const response = await axios.post(apiUrl(ApiConfig.checkCode), formQuenMatKhau);

            console.log('Tình trạng:' + response.data);
            // alert('nhập mã chính xác! ');
            setShowConfirmationDialog(false);
            setShowNhapMKDialog(true)


        } catch (error) {

            console.error('Xác nhận thất bại:', error);
            // Hiển thị thông báo lỗi cho người dùng
            toast.error('mã xác nhận xác nhận sai.');
        }
    };
    const handleConfirmAgainMail = async (event) => {

        event.preventDefault();
        try {
            setTimeLeft(60);

            const response = await axios.post(apiUrl(ApiConfig.sendEmailAgainForgotPass), formQuenMatKhau);
            console.log('Response from server:', response.data);
            formQuenMatKhau.codeHashed = response.data;
            // Hiển thị hộp thoại xác nhận thành công
            setShowConfirmationDialog(true);

        } catch (error) {
            console.error('Xác nhận thất bại:', error);
            // Hiển thị thông báo lỗi cho người dùng
            toast.error('Xác nhận thất bại. Vui lòng thử lại .');
        }
    };
    // hàm xử lí đổi mật khẩu
    const handleConfirmPassSubmit = async (event) => {
        event.preventDefault();
        console.log(checkMK + " " + formQuenMatKhau.matKhauMoi)
        console.log(" xx" + formQuenMatKhau.cccd)
        if (checkMK == formQuenMatKhau.matKhauMoi) {
            try {
                const response = await axios.post(apiUrl(ApiConfig.setNewPassword), formQuenMatKhau);
                console.log('hàm xử đổi mật khẩu:' + response.data);
                toast.success('hàm xử đổi mật khẩu:' + response.data)
                console.log('2 mật khẩu là:' + formQuenMatKhau.matKhauMoi + "và" + checkMK)
                // Chuyển hướng người dùng đến trang chính của ứng dụng
                // alert('nhập mã chính xác! ');
                setShowConfirmationDialog(false);
                setShowNhapMKDialog(false)
                // Hiển thị thông báo xác nhận thành công cho người dùng
                setTimeout(() => {
                    Navigate('/login');
                }, 1000);

            } catch (error) {
                console.error('Xác nhận thất bại:', error);
                // Hiển thị thông báo lỗi cho người dùng
                toast.error('mã xác nhận xác nhận sai.' + error.data);
            }
        } else {
            toast.error("bạn nhập mật khẩu không khớp");
        }
    };
    //kiểm tra mật khẩu

    //xử lí api
    return (
        <div className='min-h-screen'  >
            <ToastContainer />
            <div className="container mx-auto px-4 py-8 mt-10">
                <div className="flex justify-center items-center">

                    <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">

                        <div className="mb-6">
                            <label htmlFor="username" className="text-sm block mb-2 font-medium text-gray-700" autocomplete="off">Nhập CCCD cần lấy lại mật khẩu</label>
                            <input onChange={handleChange} type="text" id="cccd" placeholder="CCCD" name="cccd" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-0 focus:ring-blue-500 focus:ring-opacity-50" />

                        </div>
                        <div className="mb-6 text-center">
                            {/* viết hàm check tài khoản ở đây handleCheckCCCD  */}
                            <button onClick={() => {
                                handleCheckCCCD()
                                // setShowConfirmationDialog(true)
                            }} type="button" className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700">Lấy mã</button>
                        </div>

                    </div>

                </div>

            </div>
            {showConfirmationDialog && (
                <div>
                    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
                        <div className="bg-white p-8 rounded-lg shadow-md">
                            <div>
                                <p>Thời gian còn lại: {timeLeft} giây</p>

                                <h2 className="text-lg font-semibold mb-4">Nhập mã xác nhận từ Gmail</h2>
                                {/* <input
                                    type="text"
                                    placeholder="Mã xác nhận"
                                    className="border rounded py-2 px-3 mb-4"
                                    value={code}
                                    onChange={(event) => setCode(event.target.value)}
                                /> */}
                                <PinInputForm onChange={(value) => setCode(value)} />
                                <div className='flex justify-center p-2'>
                                    <button
                                        onClick={handleConfirmationSubmit} disabled={timeLeft === 0}
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
                            </div>
                            <a onClick={handleConfirmAgainMail} href="/login" className="text-xs text-blue-500 hover:text-blue-700">Bạn chưa mã xác nhận? Gửi lại mã...</a>


                        </div>

                    </div>

                </div>
            )}
            {(showNhapMKDialog) && (
                <div className='fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center'>
                    <div className="container mx-auto px-4 py-8 mt-24">
                        <div className="flex justify-center items-center">
                            <div className="w-full max-w-md bg-white rounded-lg shadow-md p-16 relative">
                                <div className="absolute top-0 right-0 mt-2 mr-2">
                                    <button onClick={() => setShowNhapMKDialog(false)} className="text-gray-600 py-2 px-4 rounded border border-gray-600 focus:outline-none focus:border-gray-800 transition-colors duration-300 hover:bg-gray-200 hover:text-gray-800">Đóng</button>
                                </div>
                                <div className="mb-6">
                                    <label htmlFor="password" className="text-sm block mb-2 font-medium text-gray-700">Mật khẩu</label>
                                    <input autoComplete="new-password" type="password" id="password" placeholder="Mật khẩu" name="matKhauMoi" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-0 focus:ring-blue-500 focus:ring-opacity-50" onChange={handleChange} />
                                </div>
                                <div className="mb-6">
                                    <label htmlFor="password" className="text-sm block mb-2 font-medium text-gray-700">Nhập lại mật khẩu</label>
                                    <input type="password" id="password" placeholder="Nhập lại mật khẩu" name="nhapLaiMatKhau" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-0 focus:ring-blue-500 focus:ring-opacity-50" onChange={(event) => setCheckMK(event.target.value)} />
                                </div>
                                <div className="flex justify-center items-center">
                                    <button onClick={handleConfirmPassSubmit} type="button" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700">Xác nhận</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

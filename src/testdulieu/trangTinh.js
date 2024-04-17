const users = [
    {
        "idUser": 1,
        "hoTen": "Nguyễn Văn A",
        "role": "Nhân viên",
        "email": "example1@example.com",
        "sdt": 123456780,
        "diaChi": "123 Đường ABC, Quận XYZ, Thành phố HCM",
        "cccd": "123456789",
        "tinhTrangTaiKhoan": "active"
    },
    {
        "idUser": 2,
        "hoTen": "Trần Thị B",
        "role": "Nhân viên",
        "email": "example2@example.com",
        "sdt": 123456781,
        "diaChi": "456 Đường XYZ, Quận ABC, Thành phố HCM",
        "cccd": "987654321",
        "tinhTrangTaiKhoan": "inactive"
    },
    {
        "idUser": 3,
        "hoTen": "Lê Văn C",
        "role": "Nhân viên",
        "email": "example3@example.com",
        "sdt": 123456782,
        "diaChi": "789 Đường XYZ, Quận ABC, Thành phố HCM",
        "cccd": "246813579",
        "tinhTrangTaiKhoan": "active"
    },
    {
        "idUser": 4,
        "hoTen": "Phạm Thị D",
        "role": "Nhân viên",
        "email": "example4@example.com",
        "sdt": 123456783,
        "diaChi": "135 Đường ABC, Quận XYZ, Thành phố HCM",
        "cccd": "987654321",
        "tinhTrangTaiKhoan": "inactive"
    },
    {
        "idUser": 5,
        "hoTen": "Đỗ Văn E",
        "role": "Nhân viên",
        "email": "example5@example.com",
        "sdt": 123456784,
        "diaChi": "246 Đường XYZ, Quận ABC, Thành phố HCM",
        "cccd": "123456789",
        "tinhTrangTaiKhoan": "active"
    },
    {
        "idUser": 6,
        "hoTen": "Hoàng Thị F",
        "role": "Khách Hàng",
        "email": "example6@example.com",
        "sdt": 123456785,
        "diaChi": "357 Đường XYZ, Quận ABC, Thành phố HCM",
        "cccd": "987654321",
        "tinhTrangTaiKhoan": "inactive"
    },
    {
        "idUser": 7,
        "hoTen": "Vũ Văn G",
        "role": "Khách Hàng",
        "email": "example7@example.com",
        "sdt": 123456786,
        "diaChi": "468 Đường ABC, Quận XYZ, Thành phố HCM",
        "cccd": "123456789",
        "tinhTrangTaiKhoan": "active"
    },
    {
        "idUser": 8,
        "hoTen": "Nguyễn Thị H",
        "role": "Khách Hàng",
        "email": "example8@example.com",
        "sdt": 123456787,
        "diaChi": "579 Đường XYZ, Quận ABC, Thành phố HCM",
        "cccd": "987654321",
        "tinhTrangTaiKhoan": "inactive"
    },
    {
        "idUser": 9,
        "hoTen": "Trần Văn I",
        "role": "Khách Hàng",
        "email": "example1@example.com",
        "sdt": 123456788,
        "diaChi": "680 Đường ABC, Quận XYZ, Thành phố HCM",
        "cccd": "123456789",
        "tinhTrangTaiKhoan": "active"
    },
    {
        "idUser": 10,
        "hoTen": "Phan Thị K",
        "role": "Khách Hàng",
        "email": "example2@example.com",
        "sdt": 123456789,
        "diaChi": "791 Đường XYZ, Quận ABC, Thành phố HCM",
        "cccd": "987654321",
        "tinhTrangTaiKhoan": "inactive"
    },
    {
        "idUser": 11,
        "hoTen": "Lê Thị L",
        "role": "Khách Hàng",
        "email": "example1@example.com",
        "sdt": 123456790,
        "diaChi": "802 Đường ABC, Quận XYZ, Thành phố HCM",
        "cccd": "123456789",
        "tinhTrangTaiKhoan": "active"
    },
    {
        "idUser": 12,
        "hoTen": "Nguyễn Văn M",
        "role": "Khách Hàng",
        "email": "example2@example.com",
        "sdt": 123456791,
        "diaChi": "913 Đường XYZ, Quận ABC, Thành phố HCM",
        "cccd": "987654321",
        "tinhTrangTaiKhoan": "inactive"
    },
    {
        "idUser": 13,
        "hoTen": "Trần Văn N",
        "role": "Quản lí",
        "email": "example1@example.com",
        "sdt": 123456792,
        "diaChi": "024 Đường ABC, Quận XYZ, Thành phố HCM",
        "cccd": "123456789",
        "tinhTrangTaiKhoan": "active"
    },
    {
        "idUser": 14,
        "hoTen": "Hoàng Thị O",
        "role": "Quản lí",
        "email": "example2@example.com",
        "sdt": 123456793,
        "diaChi": "135 Đường XYZ, Quận ABC, Thành phố HCM",
        "cccd": "987654321",
        "tinhTrangTaiKhoan": "inactive"
    },
    {
        "idUser": 15,
        "hoTen": "Phạm Văn P",
        "role": "Quản lí",
        "email": "example1@example.com",
        "sdt": 123456794,
        "diaChi": "246 Đường ABC, Quận XYZ, Thành phố HCM",
        "cccd": "123456789",
        "tinhTrangTaiKhoan": "active"
    },
    // Các mẫu thông tin mới
    {
        "idUser": 16,
        "hoTen": "Nguyễn Thị Q",
        "role": "Nhân viên",
        "email": "example16@example.com",
        "sdt": 123456795,
        "diaChi": "357 Đường XYZ, Quận ABC, Thành phố HCM",
        "cccd": "987654321",
        "tinhTrangTaiKhoan": "inactive"
    },
    {
        "idUser": 17,
        "hoTen": "Lê Văn R",
        "role": "Nhân viên",
        "email": "example17@example.com",
        "sdt": 123456796,
        "diaChi": "468 Đường ABC, Quận XYZ, Thành phố HCM",
        "cccd": "123456789",
        "tinhTrangTaiKhoan": "active"
    },
    {
        "idUser": 18,
        "hoTen": "Trần Thị S",
        "role": "Nhân viên",
        "email": "example18@example.com",
        "sdt": 123456797,
        "diaChi": "579 Đường XYZ, Quận ABC, Thành phố HCM",
        "cccd": "987654321",
        "tinhTrangTaiKhoan": "inactive"
    },
    {
        "idUser": 19,
        "hoTen": "Phạm Văn T",
        "role": "Nhân viên",
        "email": "example19@example.com",
        "sdt": 123456798,
        "diaChi": "680 Đường ABC, Quận XYZ, Thành phố HCM",
        "cccd": "123456789",
        "tinhTrangTaiKhoan": "active"
    },
    {
        "idUser": 20,
        "hoTen": "Nguyễn Thị U",
        "role": "Nhân viên",
        "email": "example20@example.com",
        "sdt": 123456799,
        "diaChi": "791 Đường XYZ, Quận ABC, Thành phố HCM",
        "cccd": "987654321",
        "tinhTrangTaiKhoan": "inactive"
    },
    {
        "idUser": 21,
        "hoTen": "Lê Văn V",
        "role": "Khách Hàng",
        "email": "example21@example.com",
        "sdt": 123456800,
        "diaChi": "802 Đường ABC, Quận XYZ, Thành phố HCM",
        "cccd": "123456789",
        "tinhTrangTaiKhoan": "active"
    },
    {
        "idUser": 22,
        "hoTen": "Trần Thị W",
        "role": "Khách Hàng",
        "email": "example22@example.com",
        "sdt": 123456801,
        "diaChi": "913 Đường XYZ, Quận ABC, Thành phố HCM",
        "cccd": "987654321",
        "tinhTrangTaiKhoan": "inactive"
    },
    {
        "idUser": 23,
        "hoTen": "Phạm Văn X",
        "role": "Khách Hàng",
        "email": "example23@example.com",
        "sdt": 123456802,
        "diaChi": "024 Đường ABC, Quận XYZ, Thành phố HCM",
        "cccd": "123456789",
        "tinhTrangTaiKhoan": "active"
    },
    {
        "idUser": 24,
        "hoTen": "Nguyễn Thị Y",
        "role": "Khách Hàng",
        "email": "example24@example.com",
        "sdt": 123456803,
        "diaChi": "135 Đường XYZ, Quận ABC, Thành phố HCM",
        "cccd": "987654321",
        "tinhTrangTaiKhoan": "inactive"
    },
    {
        "idUser": 25,
        "hoTen": "Trần Văn Z",
        "role": "Khách Hàng",
        "email": "example25@example.com",
        "sdt": 123456804,
        "diaChi": "246 Đường ABC, Quận XYZ, Thành phố HCM",
        "cccd": "123456789",
        "tinhTrangTaiKhoan": "active"
    },
    {
        "idUser": 26,
        "hoTen": "Hoàng Thị Aa",
        "role": "Quản lí",
        "email": "example26@example.com",
        "sdt": 123456805,
        "diaChi": "357 Đường XYZ, Quận ABC, Thành phố HCM",
        "cccd": "987654321",
        "tinhTrangTaiKhoan": "inactive"
    },
    {
        "idUser": 27,
        "hoTen": "Vũ Văn Bb",
        "role": "Quản lí",
        "email": "example27@example.com",
        "sdt": 123456806,
        "diaChi": "468 Đường ABC, Quận XYZ, Thành phố HCM",
        "cccd": "123456789",
        "tinhTrangTaiKhoan": "active"
    },
    {
        "idUser": 28,
        "hoTen": "Nguyễn Thị Cc",
        "role": "Quản lí",
        "email": "example28@example.com",
        "sdt": 123456807,
        "diaChi": "579 Đường XYZ, Quận ABC, Thành phố HCM",
        "cccd": "987654321",
        "tinhTrangTaiKhoan": "inactive"
    },
    {
        "idUser": 29,
        "hoTen": "Lê Văn Dd",
        "role": "Quản lí",
        "email": "example29@example.com",
        "sdt": 123456808,
        "diaChi": "680 Đường ABC, Quận XYZ, Thành phố HCM",
        "cccd": "123456789",
        "tinhTrangTaiKhoan": "active"
    },
    {
        "idUser": 30,
        "hoTen": "Trần Thị Ee",
        "role": "Quản lí",
        "email": "example30@example.com",
        "sdt": 123456809,
        "diaChi": "791 Đường XYZ, Quận ABC, Thành phố HCM",
        "cccd": "987654321",
        "tinhTrangTaiKhoan": "inactive"
    },
    {
        "idUser": 31,
        "hoTen": "Phạm Văn Ff",
        "role": "Quản lí",
        "email": "example31@example.com",
        "sdt": 123456810,
        "diaChi": "802 Đường ABC, Quận XYZ, Thành phố HCM",
        "cccd": "123456789",
        "tinhTrangTaiKhoan": "active"
    },
    {
        "idUser": 32,
        "hoTen": "Nguyễn Thị Gg",
        "role": "Quản lí",
        "email": "example32@example.com",
        "sdt": 123456811,
        "diaChi": "913 Đường XYZ, Quận ABC, Thành phố HCM",
        "cccd": "987654321",
        "tinhTrangTaiKhoan": "inactive"
    },
    {
        "idUser": 33,
        "hoTen": "Lê Văn Hh",
        "role": "Quản lí",
        "email": "example33@example.com",
        "sdt": 123456812,
        "diaChi": "024 Đường ABC, Quận XYZ, Thành phố HCM",
        "cccd": "123456789",
        "tinhTrangTaiKhoan": "active"
    },
    {
        "idUser": 34,
        "hoTen": "Trần Thị Ii",
        "role": "Quản lí",
        "email": "example34@example.com",
        "sdt": 123456813,
        "diaChi": "135 Đường XYZ, Quận ABC, Thành phố HCM",
        "cccd": "987654321",
        "tinhTrangTaiKhoan": "inactive"
    },
    {
        "idUser": 35,
        "hoTen": "Phạm Văn Jj",
        "role": "Quản lí",
        "email": "example35@example.com",
        "sdt": 123456814,
        "diaChi": "246 Đường ABC, Quận XYZ, Thành phố HCM",
        "cccd": "123456789",
        "tinhTrangTaiKhoan": "active"
    },{
        "idUser": 1,
        "hoTen": "Nguyễn Văn A",
        "role": "Nhân viên",
        "email": "example1@example.com",
        "sdt": 123456780,
        "diaChi": "123 Đường ABC, Quận XYZ, Thành phố HCM",
        "cccd": "123456789",
        "tinhTrangTaiKhoan": "active"
    },
    {
        "idUser": 2,
        "hoTen": "Trần Thị B",
        "role": "Nhân viên",
        "email": "example2@example.com",
        "sdt": 123456781,
        "diaChi": "456 Đường XYZ, Quận ABC, Thành phố HCM",
        "cccd": "987654321",
        "tinhTrangTaiKhoan": "inactive"
    },
    {
        "idUser": 3,
        "hoTen": "Lê Văn C",
        "role": "Nhân viên",
        "email": "example3@example.com",
        "sdt": 123456782,
        "diaChi": "789 Đường XYZ, Quận ABC, Thành phố HCM",
        "cccd": "246813579",
        "tinhTrangTaiKhoan": "active"
    },
    {
        "idUser": 4,
        "hoTen": "Phạm Thị D",
        "role": "Nhân viên",
        "email": "example4@example.com",
        "sdt": 123456783,
        "diaChi": "135 Đường ABC, Quận XYZ, Thành phố HCM",
        "cccd": "987654321",
        "tinhTrangTaiKhoan": "inactive"
    },
    {
        "idUser": 5,
        "hoTen": "Đỗ Văn E",
        "role": "Nhân viên",
        "email": "example5@example.com",
        "sdt": 123456784,
        "diaChi": "246 Đường XYZ, Quận ABC, Thành phố HCM",
        "cccd": "123456789",
        "tinhTrangTaiKhoan": "active"
    },
    {
        "idUser": 6,
        "hoTen": "Hoàng Thị F",
        "role": "Khách Hàng",
        "email": "example6@example.com",
        "sdt": 123456785,
        "diaChi": "357 Đường XYZ, Quận ABC, Thành phố HCM",
        "cccd": "987654321",
        "tinhTrangTaiKhoan": "inactive"
    },
    {
        "idUser": 7,
        "hoTen": "Vũ Văn G",
        "role": "Khách Hàng",
        "email": "example7@example.com",
        "sdt": 123456786,
        "diaChi": "468 Đường ABC, Quận XYZ, Thành phố HCM",
        "cccd": "123456789",
        "tinhTrangTaiKhoan": "active"
    },
    {
        "idUser": 8,
        "hoTen": "Nguyễn Thị H",
        "role": "Khách Hàng",
        "email": "example8@example.com",
        "sdt": 123456787,
        "diaChi": "579 Đường XYZ, Quận ABC, Thành phố HCM",
        "cccd": "987654321",
        "tinhTrangTaiKhoan": "inactive"
    },
    {
        "idUser": 9,
        "hoTen": "Trần Văn I",
        "role": "Khách Hàng",
        "email": "example1@example.com",
        "sdt": 123456788,
        "diaChi": "680 Đường ABC, Quận XYZ, Thành phố HCM",
        "cccd": "123456789",
        "tinhTrangTaiKhoan": "active"
    },
    {
        "idUser": 10,
        "hoTen": "Phan Thị K",
        "role": "Khách Hàng",
        "email": "example2@example.com",
        "sdt": 123456789,
        "diaChi": "791 Đường XYZ, Quận ABC, Thành phố HCM",
        "cccd": "987654321",
        "tinhTrangTaiKhoan": "inactive"
    },
    {
        "idUser": 11,
        "hoTen": "Lê Thị L",
        "role": "Khách Hàng",
        "email": "example1@example.com",
        "sdt": 123456790,
        "diaChi": "802 Đường ABC, Quận XYZ, Thành phố HCM",
        "cccd": "123456789",
        "tinhTrangTaiKhoan": "active"
    },
    {
        "idUser": 12,
        "hoTen": "Nguyễn Văn M",
        "role": "Khách Hàng",
        "email": "example2@example.com",
        "sdt": 123456791,
        "diaChi": "913 Đường XYZ, Quận ABC, Thành phố HCM",
        "cccd": "987654321",
        "tinhTrangTaiKhoan": "inactive"
    },
    {
        "idUser": 13,
        "hoTen": "Trần Văn N",
        "role": "Quản lí",
        "email": "example1@example.com",
        "sdt": 123456792,
        "diaChi": "024 Đường ABC, Quận XYZ, Thành phố HCM",
        "cccd": "123456789",
        "tinhTrangTaiKhoan": "active"
    },
    {
        "idUser": 14,
        "hoTen": "Hoàng Thị O",
        "role": "Quản lí",
        "email": "example2@example.com",
        "sdt": 123456793,
        "diaChi": "135 Đường XYZ, Quận ABC, Thành phố HCM",
        "cccd": "987654321",
        "tinhTrangTaiKhoan": "inactive"
    },
    {
        "idUser": 1,
        "hoTen": "Nguyễn Văn A",
        "role": "Nhân viên",
        "email": "example1@example.com",
        "sdt": 123456780,
        "diaChi": "123 Đường ABC, Quận XYZ, Thành phố HCM",
        "cccd": "123456789",
        "tinhTrangTaiKhoan": "active"
    },
    {
        "idUser": 2,
        "hoTen": "Trần Thị B",
        "role": "Nhân viên",
        "email": "example2@example.com",
        "sdt": 123456781,
        "diaChi": "456 Đường XYZ, Quận ABC, Thành phố HCM",
        "cccd": "987654321",
        "tinhTrangTaiKhoan": "inactive"
    },
    {
        "idUser": 3,
        "hoTen": "Lê Văn C",
        "role": "Nhân viên",
        "email": "example3@example.com",
        "sdt": 123456782,
        "diaChi": "789 Đường XYZ, Quận ABC, Thành phố HCM",
        "cccd": "246813579",
        "tinhTrangTaiKhoan": "active"
    },
    {
        "idUser": 4,
        "hoTen": "Phạm Thị D",
        "role": "Nhân viên",
        "email": "example4@example.com",
        "sdt": 123456783,
        "diaChi": "135 Đường ABC, Quận XYZ, Thành phố HCM",
        "cccd": "987654321",
        "tinhTrangTaiKhoan": "inactive"
    },
    {
        "idUser": 5,
        "hoTen": "Đỗ Văn E",
        "role": "Nhân viên",
        "email": "example5@example.com",
        "sdt": 123456784,
        "diaChi": "246 Đường XYZ, Quận ABC, Thành phố HCM",
        "cccd": "123456789",
        "tinhTrangTaiKhoan": "active"
    },
    {
        "idUser": 6,
        "hoTen": "Hoàng Thị F",
        "role": "Khách Hàng",
        "email": "example6@example.com",
        "sdt": 123456785,
        "diaChi": "357 Đường XYZ, Quận ABC, Thành phố HCM",
        "cccd": "987654321",
        "tinhTrangTaiKhoan": "inactive"
    },
    {
        "idUser": 7,
        "hoTen": "Vũ Văn G",
        "role": "Khách Hàng",
        "email": "example7@example.com",
        "sdt": 123456786,
        "diaChi": "468 Đường ABC, Quận XYZ, Thành phố HCM",
        "cccd": "123456789",
        "tinhTrangTaiKhoan": "active"
    },
    {
        "idUser": 8,
        "hoTen": "Nguyễn Thị H",
        "role": "Khách Hàng",
        "email": "example8@example.com",
        "sdt": 123456787,
        "diaChi": "579 Đường XYZ, Quận ABC, Thành phố HCM",
        "cccd": "987654321",
        "tinhTrangTaiKhoan": "inactive"
    },
    {
        "idUser": 9,
        "hoTen": "Trần Văn I",
        "role": "Khách Hàng",
        "email": "example1@example.com",
        "sdt": 123456788,
        "diaChi": "680 Đường ABC, Quận XYZ, Thành phố HCM",
        "cccd": "123456789",
        "tinhTrangTaiKhoan": "active"
    },
    {
        "idUser": 10,
        "hoTen": "Phan Thị K",
        "role": "Khách Hàng",
        "email": "example2@example.com",
        "sdt": 123456789,
        "diaChi": "791 Đường XYZ, Quận ABC, Thành phố HCM",
        "cccd": "987654321",
        "tinhTrangTaiKhoan": "inactive"
    },
    {
        "idUser": 11,
        "hoTen": "Lê Thị L",
        "role": "Khách Hàng",
        "email": "example1@example.com",
        "sdt": 123456790,
        "diaChi": "802 Đường ABC, Quận XYZ, Thành phố HCM",
        "cccd": "123456789",
        "tinhTrangTaiKhoan": "active"
    },
    {
        "idUser": 12,
        "hoTen": "Nguyễn Văn M",
        "role": "Khách Hàng",
        "email": "example2@example.com",
        "sdt": 123456791,
        "diaChi": "913 Đường XYZ, Quận ABC, Thành phố HCM",
        "cccd": "987654321",
        "tinhTrangTaiKhoan": "inactive"
    },
    {
        "idUser": 13,
        "hoTen": "Trần Văn N",
        "role": "Quản lí",
        "email": "example1@example.com",
        "sdt": 123456792,
        "diaChi": "024 Đường ABC, Quận XYZ, Thành phố HCM",
        "cccd": "123456789",
        "tinhTrangTaiKhoan": "active"
    },
    {
        "idUser": 14,
        "hoTen": "Hoàng Thị O",
        "role": "Quản lí",
        "email": "example2@example.com",
        "sdt": 123456793,
        "diaChi": "135 Đường XYZ, Quận ABC, Thành phố HCM",
        "cccd": "987654321",
        "tinhTrangTaiKhoan": "inactive"
    },
    {
        "idUser": 1,
        "hoTen": "Nguyễn Văn A",
        "role": "Nhân viên",
        "email": "example1@example.com",
        "sdt": 123456780,
        "diaChi": "123 Đường ABC, Quận XYZ, Thành phố HCM",
        "cccd": "123456789",
        "tinhTrangTaiKhoan": "active"
    },
    {
        "idUser": 2,
        "hoTen": "Trần Thị B",
        "role": "Nhân viên",
        "email": "example2@example.com",
        "sdt": 123456781,
        "diaChi": "456 Đường XYZ, Quận ABC, Thành phố HCM",
        "cccd": "987654321",
        "tinhTrangTaiKhoan": "inactive"
    },
    {
        "idUser": 3,
        "hoTen": "Lê Văn C",
        "role": "Nhân viên",
        "email": "example3@example.com",
        "sdt": 123456782,
        "diaChi": "789 Đường XYZ, Quận ABC, Thành phố HCM",
        "cccd": "246813579",
        "tinhTrangTaiKhoan": "active"
    },
    {
        "idUser": 4,
        "hoTen": "Phạm Thị D",
        "role": "Nhân viên",
        "email": "example4@example.com",
        "sdt": 123456783,
        "diaChi": "135 Đường ABC, Quận XYZ, Thành phố HCM",
        "cccd": "987654321",
        "tinhTrangTaiKhoan": "inactive"
    },
    {
        "idUser": 5,
        "hoTen": "Đỗ Văn E",
        "role": "Nhân viên",
        "email": "example5@example.com",
        "sdt": 123456784,
        "diaChi": "246 Đường XYZ, Quận ABC, Thành phố HCM",
        "cccd": "123456789",
        "tinhTrangTaiKhoan": "active"
    },
    {
        "idUser": 6,
        "hoTen": "Hoàng Thị F",
        "role": "Khách Hàng",
        "email": "example6@example.com",
        "sdt": 123456785,
        "diaChi": "357 Đường XYZ, Quận ABC, Thành phố HCM",
        "cccd": "987654321",
        "tinhTrangTaiKhoan": "inactive"
    },
    {
        "idUser": 7,
        "hoTen": "Vũ Văn G",
        "role": "Khách Hàng",
        "email": "example7@example.com",
        "sdt": 123456786,
        "diaChi": "468 Đường ABC, Quận XYZ, Thành phố HCM",
        "cccd": "123456789",
        "tinhTrangTaiKhoan": "active"
    },
    {
        "idUser": 8,
        "hoTen": "Nguyễn Thị H",
        "role": "Khách Hàng",
        "email": "example8@example.com",
        "sdt": 123456787,
        "diaChi": "579 Đường XYZ, Quận ABC, Thành phố HCM",
        "cccd": "987654321",
        "tinhTrangTaiKhoan": "inactive"
    },
    {
        "idUser": 9,
        "hoTen": "Trần Văn I",
        "role": "Khách Hàng",
        "email": "example1@example.com",
        "sdt": 123456788,
        "diaChi": "680 Đường ABC, Quận XYZ, Thành phố HCM",
        "cccd": "123456789",
        "tinhTrangTaiKhoan": "active"
    },
    {
        "idUser": 10,
        "hoTen": "Phan Thị K",
        "role": "Khách Hàng",
        "email": "example2@example.com",
        "sdt": 123456789,
        "diaChi": "791 Đường XYZ, Quận ABC, Thành phố HCM",
        "cccd": "987654321",
        "tinhTrangTaiKhoan": "inactive"
    },
    {
        "idUser": 11,
        "hoTen": "Lê Thị L",
        "role": "Khách Hàng",
        "email": "example1@example.com",
        "sdt": 123456790,
        "diaChi": "802 Đường ABC, Quận XYZ, Thành phố HCM",
        "cccd": "123456789",
        "tinhTrangTaiKhoan": "active"
    },
    {
        "idUser": 12,
        "hoTen": "Nguyễn Văn M",
        "role": "Khách Hàng",
        "email": "example2@example.com",
        "sdt": 123456791,
        "diaChi": "913 Đường XYZ, Quận ABC, Thành phố HCM",
        "cccd": "987654321",
        "tinhTrangTaiKhoan": "inactive"
    },
    {
        "idUser": 13,
        "hoTen": "Trần Văn N",
        "role": "Quản lí",
        "email": "example1@example.com",
        "sdt": 123456792,
        "diaChi": "024 Đường ABC, Quận XYZ, Thành phố HCM",
        "cccd": "123456789",
        "tinhTrangTaiKhoan": "active"
    },
    {
        "idUser": 14,
        "hoTen": "Hoàng Thị O",
        "role": "Quản lí",
        "email": "example2@example.com",
        "sdt": 123456793,
        "diaChi": "135 Đường XYZ, Quận ABC, Thành phố HCM",
        "cccd": "987654321",
        "tinhTrangTaiKhoan": "inactive"
    },
    {
        "idUser": 1,
        "hoTen": "Nguyễn Văn A",
        "role": "Nhân viên",
        "email": "example1@example.com",
        "sdt": 123456780,
        "diaChi": "123 Đường ABC, Quận XYZ, Thành phố HCM",
        "cccd": "123456789",
        "tinhTrangTaiKhoan": "active"
    },
    {
        "idUser": 2,
        "hoTen": "Trần Thị B",
        "role": "Nhân viên",
        "email": "example2@example.com",
        "sdt": 123456781,
        "diaChi": "456 Đường XYZ, Quận ABC, Thành phố HCM",
        "cccd": "987654321",
        "tinhTrangTaiKhoan": "inactive"
    },
    {
        "idUser": 3,
        "hoTen": "Lê Văn C",
        "role": "Nhân viên",
        "email": "example3@example.com",
        "sdt": 123456782,
        "diaChi": "789 Đường XYZ, Quận ABC, Thành phố HCM",
        "cccd": "246813579",
        "tinhTrangTaiKhoan": "active"
    },
    {
        "idUser": 4,
        "hoTen": "Phạm Thị D",
        "role": "Nhân viên",
        "email": "example4@example.com",
        "sdt": 123456783,
        "diaChi": "135 Đường ABC, Quận XYZ, Thành phố HCM",
        "cccd": "987654321",
        "tinhTrangTaiKhoan": "inactive"
    },
    {
        "idUser": 5,
        "hoTen": "Đỗ Văn E",
        "role": "Nhân viên",
        "email": "example5@example.com",
        "sdt": 123456784,
        "diaChi": "246 Đường XYZ, Quận ABC, Thành phố HCM",
        "cccd": "123456789",
        "tinhTrangTaiKhoan": "active"
    },
    {
        "idUser": 6,
        "hoTen": "Hoàng Thị F",
        "role": "Khách Hàng",
        "email": "example6@example.com",
        "sdt": 123456785,
        "diaChi": "357 Đường XYZ, Quận ABC, Thành phố HCM",
        "cccd": "987654321",
        "tinhTrangTaiKhoan": "inactive"
    },
    {
        "idUser": 7,
        "hoTen": "Vũ Văn G",
        "role": "Khách Hàng",
        "email": "example7@example.com",
        "sdt": 123456786,
        "diaChi": "468 Đường ABC, Quận XYZ, Thành phố HCM",
        "cccd": "123456789",
        "tinhTrangTaiKhoan": "active"
    },
    {
        "idUser": 8,
        "hoTen": "Nguyễn Thị H",
        "role": "Khách Hàng",
        "email": "example8@example.com",
        "sdt": 123456787,
        "diaChi": "579 Đường XYZ, Quận ABC, Thành phố HCM",
        "cccd": "987654321",
        "tinhTrangTaiKhoan": "inactive"
    },
    {
        "idUser": 9,
        "hoTen": "Trần Văn I",
        "role": "Khách Hàng",
        "email": "example1@example.com",
        "sdt": 123456788,
        "diaChi": "680 Đường ABC, Quận XYZ, Thành phố HCM",
        "cccd": "123456789",
        "tinhTrangTaiKhoan": "active"
    },
    {
        "idUser": 10,
        "hoTen": "Phan Thị K",
        "role": "Khách Hàng",
        "email": "example2@example.com",
        "sdt": 123456789,
        "diaChi": "791 Đường XYZ, Quận ABC, Thành phố HCM",
        "cccd": "987654321",
        "tinhTrangTaiKhoan": "inactive"
    },
    {
        "idUser": 11,
        "hoTen": "Lê Thị L",
        "role": "Khách Hàng",
        "email": "example1@example.com",
        "sdt": 123456790,
        "diaChi": "802 Đường ABC, Quận XYZ, Thành phố HCM",
        "cccd": "123456789",
        "tinhTrangTaiKhoan": "active"
    },
    {
        "idUser": 12,
        "hoTen": "Nguyễn Văn M",
        "role": "Khách Hàng",
        "email": "example2@example.com",
        "sdt": 123456791,
        "diaChi": "913 Đường XYZ, Quận ABC, Thành phố HCM",
        "cccd": "987654321",
        "tinhTrangTaiKhoan": "inactive"
    },
    {
        "idUser": 13,
        "hoTen": "Trần Văn N",
        "role": "Quản lí",
        "email": "example1@example.com",
        "sdt": 123456792,
        "diaChi": "024 Đường ABC, Quận XYZ, Thành phố HCM",
        "cccd": "123456789",
        "tinhTrangTaiKhoan": "active"
    },
    {
        "idUser": 14,
        "hoTen": "Hoàng Thị O",
        "role": "Quản lí",
        "email": "example2@example.com",
        "sdt": 123456793,
        "diaChi": "135 Đường XYZ, Quận ABC, Thành phố HCM",
        "cccd": "987654321",
        "tinhTrangTaiKhoan": "inactive"
    },
    {
        "idUser": 1,
        "hoTen": "Nguyễn Văn A",
        "role": "Nhân viên",
        "email": "example1@example.com",
        "sdt": 123456780,
        "diaChi": "123 Đường ABC, Quận XYZ, Thành phố HCM",
        "cccd": "123456789",
        "tinhTrangTaiKhoan": "active"
    },
    {
        "idUser": 2,
        "hoTen": "Trần Thị B",
        "role": "Nhân viên",
        "email": "example2@example.com",
        "sdt": 123456781,
        "diaChi": "456 Đường XYZ, Quận ABC, Thành phố HCM",
        "cccd": "987654321",
        "tinhTrangTaiKhoan": "inactive"
    },
    {
        "idUser": 3,
        "hoTen": "Lê Văn C",
        "role": "Nhân viên",
        "email": "example3@example.com",
        "sdt": 123456782,
        "diaChi": "789 Đường XYZ, Quận ABC, Thành phố HCM",
        "cccd": "246813579",
        "tinhTrangTaiKhoan": "active"
    },
    {
        "idUser": 4,
        "hoTen": "Phạm Thị D",
        "role": "Nhân viên",
        "email": "example4@example.com",
        "sdt": 123456783,
        "diaChi": "135 Đường ABC, Quận XYZ, Thành phố HCM",
        "cccd": "987654321",
        "tinhTrangTaiKhoan": "inactive"
    },
    {
        "idUser": 5,
        "hoTen": "Đỗ Văn E",
        "role": "Nhân viên",
        "email": "example5@example.com",
        "sdt": 123456784,
        "diaChi": "246 Đường XYZ, Quận ABC, Thành phố HCM",
        "cccd": "123456789",
        "tinhTrangTaiKhoan": "active"
    },
    {
        "idUser": 6,
        "hoTen": "Hoàng Thị F",
        "role": "Khách Hàng",
        "email": "example6@example.com",
        "sdt": 123456785,
        "diaChi": "357 Đường XYZ, Quận ABC, Thành phố HCM",
        "cccd": "987654321",
        "tinhTrangTaiKhoan": "inactive"
    },
    {
        "idUser": 7,
        "hoTen": "Vũ Văn G",
        "role": "Khách Hàng",
        "email": "example7@example.com",
        "sdt": 123456786,
        "diaChi": "468 Đường ABC, Quận XYZ, Thành phố HCM",
        "cccd": "123456789",
        "tinhTrangTaiKhoan": "active"
    },
    {
        "idUser": 8,
        "hoTen": "Nguyễn Thị H",
        "role": "Khách Hàng",
        "email": "example8@example.com",
        "sdt": 123456787,
        "diaChi": "579 Đường XYZ, Quận ABC, Thành phố HCM",
        "cccd": "987654321",
        "tinhTrangTaiKhoan": "inactive"
    },
    {
        "idUser": 9,
        "hoTen": "Trần Văn I",
        "role": "Khách Hàng",
        "email": "example1@example.com",
        "sdt": 123456788,
        "diaChi": "680 Đường ABC, Quận XYZ, Thành phố HCM",
        "cccd": "123456789",
        "tinhTrangTaiKhoan": "active"
    },
    {
        "idUser": 10,
        "hoTen": "Phan Thị K",
        "role": "Khách Hàng",
        "email": "example2@example.com",
        "sdt": 123456789,
        "diaChi": "791 Đường XYZ, Quận ABC, Thành phố HCM",
        "cccd": "987654321",
        "tinhTrangTaiKhoan": "inactive"
    },
    {
        "idUser": 11,
        "hoTen": "Lê Thị L",
        "role": "Khách Hàng",
        "email": "example1@example.com",
        "sdt": 123456790,
        "diaChi": "802 Đường ABC, Quận XYZ, Thành phố HCM",
        "cccd": "123456789",
        "tinhTrangTaiKhoan": "active"
    },
    {
        "idUser": 12,
        "hoTen": "Nguyễn Văn M",
        "role": "Khách Hàng",
        "email": "example2@example.com",
        "sdt": 123456791,
        "diaChi": "913 Đường XYZ, Quận ABC, Thành phố HCM",
        "cccd": "987654321",
        "tinhTrangTaiKhoan": "inactive"
    },
    {
        "idUser": 13,
        "hoTen": "Trần Văn N",
        "role": "Quản lí",
        "email": "example1@example.com",
        "sdt": 123456792,
        "diaChi": "024 Đường ABC, Quận XYZ, Thành phố HCM",
        "cccd": "123456789",
        "tinhTrangTaiKhoan": "active"
    },
    {
        "idUser": 14,
        "hoTen": "Hoàng Thị O",
        "role": "Quản lí",
        "email": "example2@example.com",
        "sdt": 123456793,
        "diaChi": "135 Đường XYZ, Quận ABC, Thành phố HCM",
        "cccd": "987654321",
        "tinhTrangTaiKhoan": "inactive"
    },
    {
        "idUser": 1,
        "hoTen": "Nguyễn Văn A",
        "role": "Nhân viên",
        "email": "example1@example.com",
        "sdt": 123456780,
        "diaChi": "123 Đường ABC, Quận XYZ, Thành phố HCM",
        "cccd": "123456789",
        "tinhTrangTaiKhoan": "active"
    },
    {
        "idUser": 2,
        "hoTen": "Trần Thị B",
        "role": "Nhân viên",
        "email": "example2@example.com",
        "sdt": 123456781,
        "diaChi": "456 Đường XYZ, Quận ABC, Thành phố HCM",
        "cccd": "987654321",
        "tinhTrangTaiKhoan": "inactive"
    },
    {
        "idUser": 3,
        "hoTen": "Lê Văn C",
        "role": "Nhân viên",
        "email": "example3@example.com",
        "sdt": 123456782,
        "diaChi": "789 Đường XYZ, Quận ABC, Thành phố HCM",
        "cccd": "246813579",
        "tinhTrangTaiKhoan": "active"
    },
    {
        "idUser": 4,
        "hoTen": "Phạm Thị D",
        "role": "Nhân viên",
        "email": "example4@example.com",
        "sdt": 123456783,
        "diaChi": "135 Đường ABC, Quận XYZ, Thành phố HCM",
        "cccd": "987654321",
        "tinhTrangTaiKhoan": "inactive"
    },
    {
        "idUser": 5,
        "hoTen": "Đỗ Văn E",
        "role": "Nhân viên",
        "email": "example5@example.com",
        "sdt": 123456784,
        "diaChi": "246 Đường XYZ, Quận ABC, Thành phố HCM",
        "cccd": "123456789",
        "tinhTrangTaiKhoan": "active"
    },
    {
        "idUser": 6,
        "hoTen": "Hoàng Thị F",
        "role": "Khách Hàng",
        "email": "example6@example.com",
        "sdt": 123456785,
        "diaChi": "357 Đường XYZ, Quận ABC, Thành phố HCM",
        "cccd": "987654321",
        "tinhTrangTaiKhoan": "inactive"
    },
    {
        "idUser": 7,
        "hoTen": "Vũ Văn G",
        "role": "Khách Hàng",
        "email": "example7@example.com",
        "sdt": 123456786,
        "diaChi": "468 Đường ABC, Quận XYZ, Thành phố HCM",
        "cccd": "123456789",
        "tinhTrangTaiKhoan": "active"
    },
    {
        "idUser": 8,
        "hoTen": "Nguyễn Thị H",
        "role": "Khách Hàng",
        "email": "example8@example.com",
        "sdt": 123456787,
        "diaChi": "579 Đường XYZ, Quận ABC, Thành phố HCM",
        "cccd": "987654321",
        "tinhTrangTaiKhoan": "inactive"
    },
    {
        "idUser": 9,
        "hoTen": "Trần Văn I",
        "role": "Khách Hàng",
        "email": "example1@example.com",
        "sdt": 123456788,
        "diaChi": "680 Đường ABC, Quận XYZ, Thành phố HCM",
        "cccd": "123456789",
        "tinhTrangTaiKhoan": "active"
    },
    {
        "idUser": 10,
        "hoTen": "Phan Thị K",
        "role": "Khách Hàng",
        "email": "example2@example.com",
        "sdt": 123456789,
        "diaChi": "791 Đường XYZ, Quận ABC, Thành phố HCM",
        "cccd": "987654321",
        "tinhTrangTaiKhoan": "inactive"
    },
    {
        "idUser": 11,
        "hoTen": "Lê Thị L",
        "role": "Khách Hàng",
        "email": "example1@example.com",
        "sdt": 123456790,
        "diaChi": "802 Đường ABC, Quận XYZ, Thành phố HCM",
        "cccd": "123456789",
        "tinhTrangTaiKhoan": "active"
    },
    {
        "idUser": 12,
        "hoTen": "Nguyễn Văn M",
        "role": "Khách Hàng",
        "email": "example2@example.com",
        "sdt": 123456791,
        "diaChi": "913 Đường XYZ, Quận ABC, Thành phố HCM",
        "cccd": "987654321",
        "tinhTrangTaiKhoan": "inactive"
    },
    {
        "idUser": 13,
        "hoTen": "Trần Văn N",
        "role": "Quản lí",
        "email": "example1@example.com",
        "sdt": 123456792,
        "diaChi": "024 Đường ABC, Quận XYZ, Thành phố HCM",
        "cccd": "123456789",
        "tinhTrangTaiKhoan": "active"
    },
    {
        "idUser": 14,
        "hoTen": "Hoàng Thị O",
        "role": "Quản lí",
        "email": "example2@example.com",
        "sdt": 123456793,
        "diaChi": "135 Đường XYZ, Quận ABC, Thành phố HCM",
        "cccd": "987654321",
        "tinhTrangTaiKhoan": "inactive"
    },
    {
        "idUser": 1,
        "hoTen": "Nguyễn Văn A",
        "role": "Nhân viên",
        "email": "example1@example.com",
        "sdt": 123456780,
        "diaChi": "123 Đường ABC, Quận XYZ, Thành phố HCM",
        "cccd": "123456789",
        "tinhTrangTaiKhoan": "active"
    },
    {
        "idUser": 2,
        "hoTen": "Trần Thị B",
        "role": "Nhân viên",
        "email": "example2@example.com",
        "sdt": 123456781,
        "diaChi": "456 Đường XYZ, Quận ABC, Thành phố HCM",
        "cccd": "987654321",
        "tinhTrangTaiKhoan": "inactive"
    },
    {
        "idUser": 3,
        "hoTen": "Lê Văn C",
        "role": "Nhân viên",
        "email": "example3@example.com",
        "sdt": 123456782,
        "diaChi": "789 Đường XYZ, Quận ABC, Thành phố HCM",
        "cccd": "246813579",
        "tinhTrangTaiKhoan": "active"
    },
    {
        "idUser": 4,
        "hoTen": "Phạm Thị D",
        "role": "Nhân viên",
        "email": "example4@example.com",
        "sdt": 123456783,
        "diaChi": "135 Đường ABC, Quận XYZ, Thành phố HCM",
        "cccd": "987654321",
        "tinhTrangTaiKhoan": "inactive"
    },
    {
        "idUser": 5,
        "hoTen": "Đỗ Văn E",
        "role": "Nhân viên",
        "email": "example5@example.com",
        "sdt": 123456784,
        "diaChi": "246 Đường XYZ, Quận ABC, Thành phố HCM",
        "cccd": "123456789",
        "tinhTrangTaiKhoan": "active"
    },
    {
        "idUser": 6,
        "hoTen": "Hoàng Thị F",
        "role": "Khách Hàng",
        "email": "example6@example.com",
        "sdt": 123456785,
        "diaChi": "357 Đường XYZ, Quận ABC, Thành phố HCM",
        "cccd": "987654321",
        "tinhTrangTaiKhoan": "inactive"
    },
    {
        "idUser": 7,
        "hoTen": "Vũ Văn G",
        "role": "Khách Hàng",
        "email": "example7@example.com",
        "sdt": 123456786,
        "diaChi": "468 Đường ABC, Quận XYZ, Thành phố HCM",
        "cccd": "123456789",
        "tinhTrangTaiKhoan": "active"
    },
    {
        "idUser": 8,
        "hoTen": "Nguyễn Thị H",
        "role": "Khách Hàng",
        "email": "example8@example.com",
        "sdt": 123456787,
        "diaChi": "579 Đường XYZ, Quận ABC, Thành phố HCM",
        "cccd": "987654321",
        "tinhTrangTaiKhoan": "inactive"
    },
    {
        "idUser": 9,
        "hoTen": "Trần Văn I",
        "role": "Khách Hàng",
        "email": "example1@example.com",
        "sdt": 123456788,
        "diaChi": "680 Đường ABC, Quận XYZ, Thành phố HCM",
        "cccd": "123456789",
        "tinhTrangTaiKhoan": "active"
    },
    {
        "idUser": 10,
        "hoTen": "Phan Thị K",
        "role": "Khách Hàng",
        "email": "example2@example.com",
        "sdt": 123456789,
        "diaChi": "791 Đường XYZ, Quận ABC, Thành phố HCM",
        "cccd": "987654321",
        "tinhTrangTaiKhoan": "inactive"
    },
    {
        "idUser": 11,
        "hoTen": "Lê Thị L",
        "role": "Khách Hàng",
        "email": "example1@example.com",
        "sdt": 123456790,
        "diaChi": "802 Đường ABC, Quận XYZ, Thành phố HCM",
        "cccd": "123456789",
        "tinhTrangTaiKhoan": "active"
    },
    {
        "idUser": 12,
        "hoTen": "Nguyễn Văn M",
        "role": "Khách Hàng",
        "email": "example2@example.com",
        "sdt": 123456791,
        "diaChi": "913 Đường XYZ, Quận ABC, Thành phố HCM",
        "cccd": "987654321",
        "tinhTrangTaiKhoan": "inactive"
    },
    {
        "idUser": 13,
        "hoTen": "Trần Văn N",
        "role": "Quản lí",
        "email": "example1@example.com",
        "sdt": 123456792,
        "diaChi": "024 Đường ABC, Quận XYZ, Thành phố HCM",
        "cccd": "123456789",
        "tinhTrangTaiKhoan": "active"
    },
    {
        "idUser": 14,
        "hoTen": "Hoàng Thị O",
        "role": "Quản lí",
        "email": "example2@example.com",
        "sdt": 123456793,
        "diaChi": "135 Đường XYZ, Quận ABC, Thành phố HCM",
        "cccd": "987654321",
        "tinhTrangTaiKhoan": "inactive"
    },
    {
        "idUser": 1,
        "hoTen": "Nguyễn Văn A",
        "role": "Nhân viên",
        "email": "example1@example.com",
        "sdt": 123456780,
        "diaChi": "123 Đường ABC, Quận XYZ, Thành phố HCM",
        "cccd": "123456789",
        "tinhTrangTaiKhoan": "active"
    },
    {
        "idUser": 2,
        "hoTen": "Trần Thị B",
        "role": "Nhân viên",
        "email": "example2@example.com",
        "sdt": 123456781,
        "diaChi": "456 Đường XYZ, Quận ABC, Thành phố HCM",
        "cccd": "987654321",
        "tinhTrangTaiKhoan": "inactive"
    },
    {
        "idUser": 3,
        "hoTen": "Lê Văn C",
        "role": "Nhân viên",
        "email": "example3@example.com",
        "sdt": 123456782,
        "diaChi": "789 Đường XYZ, Quận ABC, Thành phố HCM",
        "cccd": "246813579",
        "tinhTrangTaiKhoan": "active"
    },
    {
        "idUser": 4,
        "hoTen": "Phạm Thị D",
        "role": "Nhân viên",
        "email": "example4@example.com",
        "sdt": 123456783,
        "diaChi": "135 Đường ABC, Quận XYZ, Thành phố HCM",
        "cccd": "987654321",
        "tinhTrangTaiKhoan": "inactive"
    },
    {
        "idUser": 5,
        "hoTen": "Đỗ Văn E",
        "role": "Nhân viên",
        "email": "example5@example.com",
        "sdt": 123456784,
        "diaChi": "246 Đường XYZ, Quận ABC, Thành phố HCM",
        "cccd": "123456789",
        "tinhTrangTaiKhoan": "active"
    },
    {
        "idUser": 6,
        "hoTen": "Hoàng Thị F",
        "role": "Khách Hàng",
        "email": "example6@example.com",
        "sdt": 123456785,
        "diaChi": "357 Đường XYZ, Quận ABC, Thành phố HCM",
        "cccd": "987654321",
        "tinhTrangTaiKhoan": "inactive"
    },
    {
        "idUser": 7,
        "hoTen": "Vũ Văn G",
        "role": "Khách Hàng",
        "email": "example7@example.com",
        "sdt": 123456786,
        "diaChi": "468 Đường ABC, Quận XYZ, Thành phố HCM",
        "cccd": "123456789",
        "tinhTrangTaiKhoan": "active"
    },
    {
        "idUser": 8,
        "hoTen": "Nguyễn Thị H",
        "role": "Khách Hàng",
        "email": "example8@example.com",
        "sdt": 123456787,
        "diaChi": "579 Đường XYZ, Quận ABC, Thành phố HCM",
        "cccd": "987654321",
        "tinhTrangTaiKhoan": "inactive"
    },
    {
        "idUser": 9,
        "hoTen": "Trần Văn I",
        "role": "Khách Hàng",
        "email": "example1@example.com",
        "sdt": 123456788,
        "diaChi": "680 Đường ABC, Quận XYZ, Thành phố HCM",
        "cccd": "123456789",
        "tinhTrangTaiKhoan": "active"
    },
    {
        "idUser": 10,
        "hoTen": "Phan Thị K",
        "role": "Khách Hàng",
        "email": "example2@example.com",
        "sdt": 123456789,
        "diaChi": "791 Đường XYZ, Quận ABC, Thành phố HCM",
        "cccd": "987654321",
        "tinhTrangTaiKhoan": "inactive"
    },
    {
        "idUser": 11,
        "hoTen": "Lê Thị L",
        "role": "Khách Hàng",
        "email": "example1@example.com",
        "sdt": 123456790,
        "diaChi": "802 Đường ABC, Quận XYZ, Thành phố HCM",
        "cccd": "123456789",
        "tinhTrangTaiKhoan": "active"
    },
    {
        "idUser": 12,
        "hoTen": "Nguyễn Văn M",
        "role": "Khách Hàng",
        "email": "example2@example.com",
        "sdt": 123456791,
        "diaChi": "913 Đường XYZ, Quận ABC, Thành phố HCM",
        "cccd": "987654321",
        "tinhTrangTaiKhoan": "inactive"
    },
    {
        "idUser": 13,
        "hoTen": "Trần Văn N",
        "role": "Quản lí",
        "email": "example1@example.com",
        "sdt": 123456792,
        "diaChi": "024 Đường ABC, Quận XYZ, Thành phố HCM",
        "cccd": "123456789",
        "tinhTrangTaiKhoan": "active"
    },
    {
        "idUser": 14,
        "hoTen": "Hoàng Thị O",
        "role": "Quản lí",
        "email": "example2@example.com",
        "sdt": 123456793,
        "diaChi": "135 Đường XYZ, Quận ABC, Thành phố HCM",
        "cccd": "987654321",
        "tinhTrangTaiKhoan": "inactive"
    },
    {
        "idUser": 1,
        "hoTen": "Nguyễn Văn A",
        "role": "Nhân viên",
        "email": "example1@example.com",
        "sdt": 123456780,
        "diaChi": "123 Đường ABC, Quận XYZ, Thành phố HCM",
        "cccd": "123456789",
        "tinhTrangTaiKhoan": "active"
    },
    {
        "idUser": 2,
        "hoTen": "Trần Thị B",
        "role": "Nhân viên",
        "email": "example2@example.com",
        "sdt": 123456781,
        "diaChi": "456 Đường XYZ, Quận ABC, Thành phố HCM",
        "cccd": "987654321",
        "tinhTrangTaiKhoan": "inactive"
    },
    {
        "idUser": 3,
        "hoTen": "Lê Văn C",
        "role": "Nhân viên",
        "email": "example3@example.com",
        "sdt": 123456782,
        "diaChi": "789 Đường XYZ, Quận ABC, Thành phố HCM",
        "cccd": "246813579",
        "tinhTrangTaiKhoan": "active"
    },
    {
        "idUser": 4,
        "hoTen": "Phạm Thị D",
        "role": "Nhân viên",
        "email": "example4@example.com",
        "sdt": 123456783,
        "diaChi": "135 Đường ABC, Quận XYZ, Thành phố HCM",
        "cccd": "987654321",
        "tinhTrangTaiKhoan": "inactive"
    },
    {
        "idUser": 5,
        "hoTen": "Đỗ Văn E",
        "role": "Nhân viên",
        "email": "example5@example.com",
        "sdt": 123456784,
        "diaChi": "246 Đường XYZ, Quận ABC, Thành phố HCM",
        "cccd": "123456789",
        "tinhTrangTaiKhoan": "active"
    },
    {
        "idUser": 6,
        "hoTen": "Hoàng Thị F",
        "role": "Khách Hàng",
        "email": "example6@example.com",
        "sdt": 123456785,
        "diaChi": "357 Đường XYZ, Quận ABC, Thành phố HCM",
        "cccd": "987654321",
        "tinhTrangTaiKhoan": "inactive"
    },
    {
        "idUser": 7,
        "hoTen": "Vũ Văn G",
        "role": "Khách Hàng",
        "email": "example7@example.com",
        "sdt": 123456786,
        "diaChi": "468 Đường ABC, Quận XYZ, Thành phố HCM",
        "cccd": "123456789",
        "tinhTrangTaiKhoan": "active"
    },
    {
        "idUser": 8,
        "hoTen": "Nguyễn Thị H",
        "role": "Khách Hàng",
        "email": "example8@example.com",
        "sdt": 123456787,
        "diaChi": "579 Đường XYZ, Quận ABC, Thành phố HCM",
        "cccd": "987654321",
        "tinhTrangTaiKhoan": "inactive"
    },
    {
        "idUser": 9,
        "hoTen": "Trần Văn I",
        "role": "Khách Hàng",
        "email": "example1@example.com",
        "sdt": 123456788,
        "diaChi": "680 Đường ABC, Quận XYZ, Thành phố HCM",
        "cccd": "123456789",
        "tinhTrangTaiKhoan": "active"
    },
    {
        "idUser": 10,
        "hoTen": "Phan Thị K",
        "role": "Khách Hàng",
        "email": "example2@example.com",
        "sdt": 123456789,
        "diaChi": "791 Đường XYZ, Quận ABC, Thành phố HCM",
        "cccd": "987654321",
        "tinhTrangTaiKhoan": "inactive"
    },
    {
        "idUser": 11,
        "hoTen": "Lê Thị L",
        "role": "Khách Hàng",
        "email": "example1@example.com",
        "sdt": 123456790,
        "diaChi": "802 Đường ABC, Quận XYZ, Thành phố HCM",
        "cccd": "123456789",
        "tinhTrangTaiKhoan": "active"
    },
    {
        "idUser": 12,
        "hoTen": "Nguyễn Văn M",
        "role": "Khách Hàng",
        "email": "example2@example.com",
        "sdt": 123456791,
        "diaChi": "913 Đường XYZ, Quận ABC, Thành phố HCM",
        "cccd": "987654321",
        "tinhTrangTaiKhoan": "inactive"
    },
    {
        "idUser": 13,
        "hoTen": "Trần Văn N",
        "role": "Quản lí",
        "email": "example1@example.com",
        "sdt": 123456792,
        "diaChi": "024 Đường ABC, Quận XYZ, Thành phố HCM",
        "cccd": "123456789",
        "tinhTrangTaiKhoan": "active"
    },
    {
        "idUser": 14,
        "hoTen": "Hoàng Thị O",
        "role": "Quản lí",
        "email": "example2@example.com",
        "sdt": 123456793,
        "diaChi": "135 Đường XYZ, Quận ABC, Thành phố HCM",
        "cccd": "987654321",
        "tinhTrangTaiKhoan": "inactive"
    },
];

export default users;

"use strict";
//Hàm có return => khai báo kiểu dữ liệu cho kết quả trả về
//Hàm không có return => :void
//Tham số tùy chọn: 
//param?:type tham số không bắt buộc
//Tham số mặc định: 
//param:type=value
//nếu không truyền tham số => lấy giá trị mặc định
//nếu truyền tham số => lấy giá trị truyền vào
let tinhTong = (a, b = 5) => {
    console.log(a + b);
};
// function tinhTong(a:number,b:number):void {
//     console.log(a+b);
// }
tinhTong(3, 10);

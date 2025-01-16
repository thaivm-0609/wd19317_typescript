"use strict";
//cú pháp khai báo: var/let/const tenBien:kieuDuLieu = value;
//1. Kiểu dữ liệu nguyên thủy: Number/String/Boolean:
//1.1. Number 
var a = 10;
console.log(a);
//1.2. String:
var chuoi = 'Đây là chuỗi';
//1.3. Boolean:
var isValid = true;
//2.1. Object
var objectSV = {
    maSV: 'PH12345',
    hoTen: 'Vương Minh Thái',
    namSinh: 1900
};
console.log(objectSV.hoTen);
//2.2. Array (mảng):
//C1: dùng cặp []: var/let/const tenBien:kieuDuLieuCuaCacPhanTu[] = [];
var numberArray = [1, 2, 3, 4, 5, 6];
//C2: dùng cặp Array<kieuDuLieuCuaCacPhanTu> (angle-bracket)
var stringArray = ['1', '2', '3'];
//2.3. Tuple (kiểu dữ liệu đặc biệt trong typescript)
//là mảng => biết trước số phần tử trong mảng và phải khai báo kiểu dữ liệu của từng phần tử theo đúng thứ tự
var testTuple = [1, 'hai', false];
//2.4. Union: khai báo các kiểu dữ liệu hợp lệ kieuDuLieu1|kieuDuLieu2|...|kieuDuLieuN
var testUnion = true;
//kết hợp Union và Array để tạo thành 1 mảng không cần xác định trước số lượng phần tử
//và các phần tử vẫn có thể có các kiểu dữ liệu khác nhau
//C1: []
var unionArray1 = [1, '2', 4, 6, 'abc'];
//C2: Array<>
var unionArray2 = [true, false, 'true', 'false'];
//2.5. Any: có thể nhận được bất kỳ kiểu dữ liệu nào đều được
var anyVariable = {};
//2.6. Enum: chỉ được chọn 1 trong những giá trị đã được khai báo sẵn
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["User"] = 1] = "User";
})(Role || (Role = {}));
;
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
    Gender[Gender["Other"] = 2] = "Other";
})(Gender || (Gender = {}));
;
//Ép kiểu ở trong typescript:
var input = '222222'; //đếm số chữ số: B1:ép kiểu về string => B2: .length để đếm số ký tự trong chuỗi đó
//C1: <> (angle-bracket) <kieuDuLieuMuonEp>tenBien
var count1 = input.length;
//C2: dùng từ khóa as (tenBien as kieuDuLieuMuonEp)
var count2 = input.length;
console.log(count1, count2);

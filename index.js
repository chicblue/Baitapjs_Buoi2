// bài tập 1
// input
function tinhLuong(){
var luongNgay = document.getElementById('luongNgay').value;
var ngayLam = document.getElementById('ngayLam').value;
// output
var tienLuong = 0;
// process
tienLuong = luongNgay * ngayLam;
document.getElementById('tongLuong').innerHTML = tienLuong;
}
// bài tập 2
// input
function tinhTrungBinh(){
    var soThu1 =document.getElementById('soThu1').value;
    var soThu2 =document.getElementById('soThu2').value;
    var soThu3 =document.getElementById('soThu3').value;
    var soThu4 =document.getElementById('soThu4').value;
    var soThu5 =document.getElementById('soThu5').value;
    // output
    var diemTrungBinh = 0;
    // process
    diemTrungBinh = (Number(soThu1)+Number(soThu2)+Number(soThu3)+Number(soThu4)+Number(soThu5))/5 ;
    document.getElementById('trungBinh').innerHTML = diemTrungBinh;

}
// bài tập 3 
// input
function tienQuyDoi(){
    const tienViet = 23500;
    var tienUsd = document.getElementById('tienUsd').value;
    // out put
    tienDoi = 0;
    // process
    var tienDoi = tienUsd *tienViet ;
    
    document.getElementById('tienDaDoi').innerHTML = tienDoi;
}
// bài tập 4
// input
function tinhDoDai(){
    var chieuDai =document.getElementById('chieuDai').value;
    var chieuRong =document.getElementById('chieuRong').value;
    // output
    dienTich = 0;
    chuVi = 0 ;
    // process
    var dienTich = Number(chieuDai) * Number(chieuRong);
    var chuVi = (Number(chieuDai) + Number(chieuRong)) *2;
    document.getElementById('tongDT').innerHTML = dienTich;
    document.getElementById('tongCV').innerHTML = chuVi;
}
// bài tập 5 
// input
function tinhTong2So(){
var so2Chu =document.getElementById('so2Chu').value;
// output
var tong2So = 0 ;
// process
if(9<so2Chu&&so2Chu<100){
var soHangDV = so2Chu % 10 ;
var soHangChuc = Math.floor(so2Chu / 10) ;
var tong2So = soHangDV + soHangChuc ;
document.getElementById('tongSo').innerHTML = tong2So;
}
}
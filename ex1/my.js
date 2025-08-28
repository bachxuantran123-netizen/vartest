nhapDiemVatLy = prompt("Nhap diem vat ly(<= 10): ");
nhapDiemHoaHoc = prompt("Nhap diem hoa hoc(<=10): ");
nahDiemSinhHoc = prompt("Nhap diem sinh hoc(<=10): ");
let VatLy = parseInt(nhapDiemVatLy);
let HoaHoc = parseInt(nhapDiemHoaHoc);
let SinhHoc = parseInt(nahDiemSinhHoc)
let DiemTong = VatLy + HoaHoc + SinhHoc;
let DiemTB = DiemTong / 3;
if (VatLy, HoaHoc, SinhHoc > 10){
    alert("Nhap lai diem!");
}
else{
    document.write("Diem tong cua ban la: " + DiemTong + "\n");
    document.write("Diem trung binh cua ban la: " + DiemTB);
}

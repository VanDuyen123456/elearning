$.ajax({
    type:'GET',
    dataType: 'json',
    url:'http://svcy.myclass.vn/api/QuanLyTrungTam/DanhSachNguoiDung'

}).done(function(danhsach){
    // var tbody =  $('#tbody')
    // console.log(tbody)

    var tbody = document.getElementById('tbody');

    for (let index = 0; index < 20; index++){
        const nguoidung = danhsach[index];

        var tr = document.createElement('tr');
        var tdTaiKhoan = document.createElement('td');
        tdTaiKhoan.innerHTML = nguoidung.TaiKhoan

        var tdHoTen = document.createElement('td');
        tdHoTen.innerHTML = nguoidung.HoTen

        var tdEmail = document.createElement('td');
        tdEmail.innerHTML = nguoidung.Email

        var tdSDT = document.createElement('td')
        tdSDT.innerHTML = nguoidung.SoDT

        var tdButton = document.createElement('td');
        var  btn = document.createElement('button')
        btn.innerHTML = "Chi tiet"
        btn.setAttribute('data-toggle','modal');
        btn.setAttribute('data-target','#modelId')
        tdButton.appendChild(btn);

        btn.onclick = function(){
            $.ajax({
                type: 'GET',
                dataType: 'json',
                url: 'http://svcy.myclass.vn/api/quanlytrungtam/thongtinnguoidung?taikhoan='+nguoidung.TaiKhoan
            }).done(function(user){
                console.log(user)
                document.getElementById('modelBody').innerHTML = user[0].TaiKhoan 
            }
            )
        }

        tr.appendChild(tdTaiKhoan)
        tr.appendChild(tdHoTen)
        tr.appendChild(tdEmail)
        tr.appendChild(tdSDT)
        tr.appendChild(tdButton)

        tbody.appendChild(tr)

    }
})

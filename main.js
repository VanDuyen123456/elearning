//JSON like object: {key:value}
var user = {
    maso: "001",
    name: "Nguyen Van A",
    email: "a1@gmail.com",
    sdt: 01234
}

var userArray = [
    {maso:"001", hoten:"Nguyen Van A", email:"a1@gmal.com",sdt:"01234"},
    {maso:"002", hoten:"Nguyen Van B", email:"b1@gmal.com",sdt:"012345"},
    {maso:"003", hoten:"Nguyen Van C", email:"c1@gmal.com",sdt:"0123456"},
    {maso:"004", hoten:"Nguyen Van D", email:"d1@gmal.com",sdt:"01234567"},
    {maso:"005", hoten:"Nguyen Van E", email:"e1@gmal.com",sdt:"012345678"},
]

for(let index = 0; index < userArray.length; index++){
    const element = userArray[index];
    var trTag = document.createElement('tr');

        var tdMaSo = document.createElement('td');
        tdMaSo.innerHTML = element.maso;
        var tdHoTen = document.createElement('td');
        tdHoTen.innerHTML = element.hoten;
        var tdEmail = document.createElement('td');
        tdEmail.innerHTML = element.email;
        var tdSDT = document.createElement('td');
        tdSDT.innerHTML = element.sdt;
        
        trTag.appendChild(tdMaSo)
        trTag.appendChild(tdHoTen)
        trTag.appendChild(tdEmail)
        trTag.appendChild(tdSDT)
        

        var tBody = document.getElementById('tbody');

        tBody.appendChild(trTag)
}

//Xử lý form
var btnSubmit = document.getElementById('submit');
btnSubmit.onclick = function(){ //anonymous function
   var maso =  document.getElementById('maso').value
   var hoten =  document.getElementById('hoten').value
   var email =  document.getElementById('email').value
   var sdt =  document.getElementById('sdt').value

   console.log(maso,hoten,email,sdt)
   var trTag = document.createElement('tr');

        var tdMaSo = document.createElement('td');
        tdMaSo.innerHTML = maso;
        var tdHoTen = document.createElement('td');
        tdHoTen.innerHTML = hoten;
        var tdEmail = document.createElement('td');
        tdEmail.innerHTML = email;
        var tdSDT = document.createElement('td');
        tdSDT.innerHTML = sdt;
        
        trTag.appendChild(tdMaSo)
        trTag.appendChild(tdHoTen)
        trTag.appendChild(tdEmail)
        trTag.appendChild(tdSDT)
        

        var tBody = document.getElementById('tbody');

        tBody.appendChild(trTag)
}



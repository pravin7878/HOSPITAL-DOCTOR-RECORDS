let name = document.getElementById('name');
let DoctorID = document.getElementById('docID');
let department = document.getElementById('dept');
let exp = document.getElementById('exp');
let email = document.getElementById('email');
let mbl = document.getElementById('mbl');
let myform = document.querySelector('form')
let submit = document.querySelector('btn')
let tbody = document.querySelector('tbody')

let alldata = [];
myform.addEventListener('submit',function(e){
e.preventDefault();
let data = {};
     data.inp1 = name.value
     data.inp2 = DoctorID.value
     data.inp3 = department.value
     data.inp4 = exp.value
     data.inp5 = email.value
     data.inp6 = mbl.value
    alldata.push(data);
    // tbody.innerHTML = null
    alldata.map((ele)=>{
       
        let row = document.createElement('tr')
        let td1 = document.createElement('td')
        let td2 = document.createElement('td')
        let td3 = document.createElement('td')
        let td4 = document.createElement('td')
        let td5 = document.createElement('td')
        let td6 = document.createElement('td')
        // let td7 = document.createElement('td')
        // let td8 = document.createElement('button').
        
        td1.innerText = ele.inp1
        td2.innerText = ele.inp2
        td3.innerText = ele.inp3
        td4.innerText = ele.inp4
        td5.innerText = ele.inp5
        td6.innerText = ele.inp6
    //    td7.innerText = ele.inp7
    //     td8.innerText = "delet"
        row.append(td1,td2,td3,td4,td5,td6)
        tbody.append(row)
    })
});

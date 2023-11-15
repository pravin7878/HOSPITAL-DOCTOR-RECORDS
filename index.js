let submit = document.getElementById('btn')
let myform = document.querySelector('form')

myform.addEventListener('submit',(e)=>{
    e.preventDefault();
    let arr = JSON.parse(localStorage.getItem("data")) || [];
    let name = e.target.name.value
let id = e.target.docID.value
let dept = e.target.dept.value
let exp = e.target.exp.value
let email = e.target.email.value
let mbl = e.target.mbl.value
    // console.log(name,id,dept,exp,email,mbl)
    let data = {
        name,
        id,
        dept,
        exp,
        email,
        mbl,
    };
   arr.push(data)
   localStorage.setItem("data",JSON.stringify(arr))
//    console.log(arr)
   showdata(arr)
});

function showdata(arr){
      let tbody = document.querySelector('tbody')
    //   tbody.innerHTML ==null;
      let x = ``;
      arr.map((ele,ind)=>{
       x+=`
       <tr>
           <td>${ele.name}</td>
           <td>${ele.id}</td>
           <td>${ele.dept}</td>
           <td>${ele.exp}</td>
           <td>${ele.email}</td>
           <td>${ele.mbl}</td>
           <td>${ roll(ele)}</td>
           <th><button onclick="removedata(${ind})">Delete</button></th>
     </tr>
       `
    })
    tbody.innerHTML = x
        
    
};

function roll(ele){
    if(ele.exp>=5){
        return "Senior"
    }
    else if(5>ele.exp && ele.exp>=2){
        return "Junior"
    }
    else if(ele.exp<=1){
        return "Fresher"
    }
}

function removedata(el){
    let arr = JSON.parse(localStorage.getItem("data")) || [];
    // console.log(el,"hello")
   arr= arr.filter((e,i)=>{
    return i!=el
  })
  localStorage.setItem("data",JSON.stringify(arr))
  showdata(arr)
}

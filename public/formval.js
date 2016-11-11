function loginvalidate(){
var uname = document.getElementById("loginname").value;
var pw1 = document.getElementById("loginpwd").value;

  if (uname.length==0){
  alert("please enter a valid registeration number");
  return false;
  }

  if (!uname.match(/^[0-9]{2}[A-Z]{3}[0-9]{4}$/)){
  alert("please enter a valid user name ");
  return false;
  }

  if (pw1.length==0){
alert("password cannot be empty!");
return false;
}
}

function regval1(){

uname = document.getElementById('reg_no1').value;
mno = document.getElementById('mobile1').value;

  if (uname.length==0){
  alert("please enter a valid registeration number");
  return false;
  }

  if (!uname.match(/^[0-9]{2}[A-Z]{3}[0-9]{4}$/)){
  alert("please enter a valid registeration number");
  return false;
  }

if(mno.length==0||!mno.match(/^[0-9]{10}$/)){
alert("enter a valid phone number");
return false;
}


}

function regval2(){

uname = document.getElementById('reg2').value;
mno = document.getElementById('mobile2').value;

  if (uname.length==0){
  alert("please enter a valid registeration number");
  return false;
  }

  if (uname.length == 0 || !uname.match(/^[0-9]{2}[A-Z]{3}[0-9]{4}$/)){
  alert("please enter a valid registeration number");
  return false;
  }

if(mno.length==0||!mno.match(/^[0-9]{10}$/)){
alert("enter a valid phone number");
return false;
}



}

function regval3(){

uname = document.getElementById('reg3').value;
mno = document.getElementById('mobile3').value;


  if (uname.length==0){
  alert("please enter a valid registeration number");
  return false;
  }


  if (uname.length == 0 || !uname.match(/^[0-9]{2}[A-Z]{3}[0-9]{4}$/)){
  alert("please enter a valid registeration number");
  return false;
  }

if(mno.length==0||!mno.match(/^[0-9]{10}$/)){
alert("enter a valid phone number");
return false;
}

}
alert("hllo");
function fun(){
let email=document.querySelector("#un").value;
let pass=document.querySelector("#pw").value;
let login=document.querySelector("#ali");
console.log(email);
console.log(pass);
console.log(login);
if((email == "ppsingh")&&(pass=="1234"))
{
  console.log("corret");
  login.href="./internal/welcome.html";
}
else {
  console.log("Incorrect");
}
}

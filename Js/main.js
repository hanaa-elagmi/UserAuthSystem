var Name =document.querySelector('.name');
var Email=document.querySelector('.email');
var logoutBtn=document.querySelector('.logoutBtn');
let currentUser = JSON.parse(localStorage.getItem('currentUser')) ;

Name.innerHTML='Welcome '+ currentUser.Name;
Email.innerHTML='Your Email is '+currentUser.Email;

logoutBtn.addEventListener('click',function(){
    localStorage.removeItem('currentUser');
    window.location='login.html';
});
////////////////////////////////////////////////Registeration////////////////////////////////////////////////
var form =document.getElementById('form');
var Users=[];
form.addEventListener('submit',function(e){
    e.preventDefault();

    var Name=document.querySelector('.nameInput').value;
    const Email = document.querySelector('.emailInput').value;
    var Password=document.querySelector('.passwordInput').value;
    var NullFeilds=document.querySelector('.NullFeilds');
    //check for null values
       if (!Name || !Email || !Password) {
        NullFeilds.innerHTML = 'All Feilds Requaired';
        return;
    }
    //get users array
    let usersArray = JSON.parse(localStorage.getItem('Users')) || [];
    //check if email is exist
    Emailexist=usersArray.some(u=>u.Email==Email);
    var emailError = document.getElementsByClassName('emailError')[0];
    if (Emailexist) {
        emailError.innerHTML = 'Email already exists!';
        return;
    }
  
    const user = { Name, Email, Password };
    usersArray.push(user);
    localStorage.setItem('Users', JSON.stringify(usersArray));

    alert("User registered successfully!");
    window.location='login.html';
  
})

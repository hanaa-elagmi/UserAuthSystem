////////////////////////////////////////////////Login////////////////////////////////////////////////
var form =document.querySelector('.form');
var error=document.querySelector('.Error');
form.addEventListener('submit',function(e){
    e.preventDefault();

    const Email = document.querySelector('.emailInput').value;
    const Password = document.querySelector('.passwordInput').value;
     if (!Email || !Password) {
           error.innerHTML='please insert your credentials'
            return;
        }
    const Users = JSON.parse(localStorage.getItem('Users')) ;
    const matchedUser = Users.find(user => user.Email === Email && user.Password === Password);
    
    if (matchedUser) {
        window.location = 'index.html';
        localStorage.setItem('currentUser', JSON.stringify(matchedUser));

    } else {
        error.innerHTML='Email or Password is not correct';
    }

})

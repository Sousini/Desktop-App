document.addEventListener('DOMContentLoaded', function(){

    const loginButton = document.getElementById('loginButton');
    const registerButton = document.getElementById('registerButton');


    if(loginButton) {
        loginButton.addEventListener('click', function() {
            window.location.href = './src/html//login.html';
        });
    } 

    if(registerButton) {
        registerButton.addEventListener('click', function() {
            window.location.href = './src/html//register.html';
        })
    }
}
)
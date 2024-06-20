document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if(!localStorage.getItem(username)) {
        alert('Username does not exist. Try to register first!');


    }

    const storedPassword = localStorage.getItem(username);

    if(password === storedPassword) {
        window.location.href='../../html//mainPage.html';

        
    } else {
        alert('Incorrect password.');
    }


})
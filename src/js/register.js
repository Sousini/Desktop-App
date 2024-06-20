document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // verificação

    if(localStorage.getItem(username)) {
        alert('Username already exists!');
    } else {
        // armazenar os dados 
        localStorage.setItem(username, password);
        alert('User registered successfully!');

    }
    
});
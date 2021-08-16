function login() {
    const emailAddress = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    // console.log(emailAddress, password);
    if (emailAddress == 'srp@vip.com' && password == 'secrect') {
	window.location.href = 'banking.html';
    }
}


document.getElementById('login').addEventListener('click', login);

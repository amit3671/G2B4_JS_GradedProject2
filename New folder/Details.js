
window.history.forward();
function noBack() {
    window.history.forward();
}

function validate() {

    let user = document.getElementById('username').value;
    let pass = document.getElementById('password').value;

    if (user == 'Admin' && pass == 'Javascript') {
        return true;
    }

    else {
        alert("Invalid username/password");
        return false;
    }
}
document.getElementById('submit').addEventListener("click", function ()
{
    // input value detected //
    const intputTextFiled = document.getElementById('text');
    const inputValue = intputTextFiled.value;
    // password value detected //
    const intputPassFiled = document.getElementById('password');
    const passwordValue = intputPassFiled.value;
    // this is a bad pratice just simple pratice form soto bacha //
    if (inputValue == 'admin' && passwordValue == 'admin') {
        window.location.href = 'banking.html';
    } else {
        window.location.href = 'login.html';
    }
})
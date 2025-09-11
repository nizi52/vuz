const form = document.getElementById('contactform');
const emailinput = document.getElementById('email');

emailinput.addEventListener('input', validateEmail);

function validateEmail() {
    const emailRegex = /[A-Za-z0-9_\-\.]{2,10}@[a-z0-9\.\-_]{1,10}\.[a-z]{2,3}/;
    if(emailRegex.test(emailinput.value))
    {
        removeError(emailinput);
        return true;
    }
    else
    {
        showError(emailinput, "Email не соотвестует формату. Пример: ivanov@mail.ru")
        return false;
    }
}

function showError(input, message) {
    const formControl = input.parentElement;
    const errorElement = formControl.querySelector('.error') || document.createElement('div');

    errorElement.className == 'error'
    errorElement.textContent = message;

    formControl.appendChild(errorElement);
    input.style.borderColor = 'red';

}

function removeError(input) {
    const formControl = input.parentElement;
    const errorElement = formControl.querySelector('.error');

    if (errorElement)
    {
        formControl.removeChild(errorElement);
    }

    input.style.borderColor = 'green';
}

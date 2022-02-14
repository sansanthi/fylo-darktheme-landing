const emailInput = document.getElementById('email');
const btn = document.querySelector('.subscribe-btn');

const emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


btn.addEventListener('click', function(e){
    e.preventDefault();

    if(!emailReg.test(emailInput.value)) {
        showErrorMessage(emailInput, 'Error, please check your email');
    }
})

function showErrorMessage(inputValue, messasge) {
    const errorMessage = inputValue.nextElementSibling;
    console.log(errorMessage);
    errorMessage.style.display = 'block';
    errorMessage.textContent = messasge;
}
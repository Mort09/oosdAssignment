// Assignment 5, Dialog/Modal Pop

let regForm = document.registerForm;
let submitBtn = regForm.regBtn;
let resetBtn = submitBtn.nextElementSibling;

submitBtn.addEventListener('click', (e) => {

    let confirmSub = confirm('Are you sure you want to proceed?')

    if (confirmSub === true) {
        // e.prevenDefault()
        regForm.submit();
    } else {
        console.log(confirmSub);
        return false;
    }
})

resetBtn.addEventListener('click', (e) => {

    let confirmRes = confirm('Are you sure you want to reset this form?')

    if (confirmRes == true) {
        // e.preventDefault()
        regForm.reset();
    } else {
        // regForm.stop()
        console.log(confirmRes);
        return false;
    }

})
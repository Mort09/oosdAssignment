// Assingment 7, Focus and Form Validation

let regForm = document.registerForm;
let fullName = regForm.fullName;
let address1 = regForm.address1;
let address2 = regForm.address2;
let city = regForm.city;
let province = regForm.province;
let postCode = regForm.postCode;

let submitBtn = regForm.regBtn;

let regEx = new RegExp('/^[A-Z]\d[A-Z] ?\d[A-Z]\d$/');

let inputErr = document.getElementsByClassName('validate');
let inputEls = document.getElementsByClassName('focus');

// console.log(inputErr);
// console.log(inputEls);

let arraySubs = Array.from(inputErr);
let arrayInputs = Array.from(inputEls);

// console.log(arrayErrs);
// console.log(arrayInputs);


arraySubs.forEach((arraySub) => {
    
    // arrayErr.addEventListener('submit', (e) => {

    // })

    // console.log(arraySub.nextElementSibling.nextElementSibling);

    submitBtn.addEventListener('click', (e) => {
        let nonDisp = arraySub.nextElementSibling.nextElementSibling;
        nonDisp.className = 'validation';

        let subVal = arraySub.value;
        let postVal = postCode.value;

        if (!subVal){
            e.preventDefault();
            nonDisp.className = 'validation-error';
        }

        if ((subVal === postVal) && (regEx.test(subVal))) {
            e.preventDefault();
            nonDisp.className = 'validation-error';
        }
    })
})

arrayInputs.forEach((arrInp) => {

    // console.log(arrInp.nextElementSibling);

    arrInp.addEventListener('focus', (e) => {
        let current = e.currentTarget;

        let focusMsg = current.nextElementSibling;

        focusMsg.className = 'focus-display';

    });

    arrInp.addEventListener('blur', (e) => {
        let current = e.currentTarget;
    
        let removeMsg = current.nextElementSibling;
    
        removeMsg.className = 'focus-feedback';
    });
})

/* Retired, too Repeatitive, Above is drier. */

// fullName.addEventListener('focus', (e) => {
//     let current = e.currentTarget;

//     // console.log(current.nextElementSibling);

//     let focusMsg = current.nextElementSibling;

//     focusMsg.className='focus-display';

// })

// fullName.addEventListener('blur', (e) => {
//     let current = e.currentTarget;

//     let removeMsg = current.nextElementSibling;

//     removeMsg.className = 'focus-feedback';
// })

// address1.addEventListener('focus', (e) => {
//     let current = e.currentTarget;

//     // console.log(current.nextElementSibling);

//     let focusMsg = current.nextElementSibling;

//     focusMsg.className='focus-display';

// })

// address1.addEventListener('blur', (e) => {
//     let current = e.currentTarget;

//     let removeMsg = current.nextElementSibling;

//     removeMsg.className = 'focus-feedback';
// })

// address2.addEventListener('focus', (e) => {
//     let current = e.currentTarget;

//     // console.log(current.nextElementSibling);

//     let focusMsg = current.nextElementSibling;

//     focusMsg.className='focus-display';

// })

// address2.addEventListener('blur', (e) => {
//     let current = e.currentTarget;

//     let removeMsg = current.nextElementSibling;

//     removeMsg.className = 'focus-feedback';
// })

// city.addEventListener('focus', (e) => {
//     let current = e.currentTarget;

//     // console.log(current.nextElementSibling);

//     let focusMsg = current.nextElementSibling;

//     focusMsg.className='focus-display';

// })

// city.addEventListener('blur', (e) => {
//     let current = e.currentTarget;

//     let removeMsg = current.nextElementSibling;

//     removeMsg.className = 'focus-feedback';
// })

// province.addEventListener('focus', (e) => {
//     let current = e.currentTarget;

//     // console.log(current.nextElementSibling);

//     let focusMsg = current.nextElementSibling;

//     focusMsg.className='focus-display';

// })

// province.addEventListener('blur', (e) => {
//     let current = e.currentTarget;

//     let removeMsg = current.nextElementSibling;

//     removeMsg.className = 'focus-feedback';
// })

// postCode.addEventListener('focus', (e) => {
//     let current = e.currentTarget;

//     // console.log(current.nextElementSibling);

//     let focusMsg = current.nextElementSibling;

//     focusMsg.className='focus-display';

// })

// postCode.addEventListener('blur', (e) => {
//     let current = e.currentTarget;

//     let removeMsg = current.nextElementSibling;

//     removeMsg.className = 'focus-feedback';
// })

// console.log(fullName);
// console.log(address1);
// console.log(address2);
// console.log(city);
// console.log(province);
// console.log(postCode)

// console.log(regForm);





// Assignment 6, Table Image Gallery
let tableCont = document.getElementById('table-container');

let images =  [
    "https://images.unsplash.com/photo-1526863336296-fac32d550655?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    "https://images.unsplash.com/photo-1526940839067-9b35a6326d93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1539152620375-ef3504215b05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=925&q=80",
    "https://images.unsplash.com/photo-1527201488222-1877fba009be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1523592131502-9ae85180b9f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
]

let descriptions = [
    'Calgary: The commercial capital of Alberta',
    'Calgary',
    'Edmonton: The seat of politics',
    'Vancouver: Where the sun shines',
    'Saskatoon'
]

let table = document.createElement('table')
table.classList = 'table table-hover';

let tr = document.createElement('tr');

let th1 = document.createElement('th');
let headerImg = document.createTextNode('Images');
th1.appendChild(headerImg);
tr.appendChild(th1);

let th2 = document.createElement('th');
let headerDesc = document.createTextNode('Descriptions');
th2.appendChild(headerDesc);
tr.appendChild(th2)

table.appendChild(tr);

// let img = document.createElement('img');

// img.src = "https://images.unsplash.com/photo-1526863336296-fac32d550655?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
// img.width = "500"
// img.height = "450"
// img.alt = "Calgary"

// tableCont.appendChild(table);

// console.log(img)
// console.log(tableCont)

// images.forEach((image)=>{
//     console.log(image)
// })


for (let i=0; i < images.length; i++) {

    let tr = document.createElement('tr');
    
    let td1 = document.createElement('td');

    let img = document.createElement('img');

    img.src = images[i];
    img.width = "500";
    img.heigh ="450";
    img.alt = descriptions[i];
    td1.appendChild(img);

    td1.addEventListener('mouseover', () => {
        par.style.display = 'inline';
    })

    tr.appendChild(td1);

    let td2 = document.createElement('td');
    let par = document.createElement('p');
    par.style.display = 'none';
    let parTxt = document.createTextNode(descriptions[i]);
    par.appendChild(parTxt);
    td2.appendChild(par);
    tr.appendChild(td2);

    table.appendChild(tr);
}

tableCont.appendChild(table);

// console.log(tableCont);

// Assignment 5, Dialog/Modal Pop
// let regForm = document.registerForm; moved to the top
// let submitBtn = regForm.regBtn; moved to the top
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
        console.log(confirmRes);
        return false;
    }

})


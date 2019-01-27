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

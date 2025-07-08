let selectbtn = document.querySelector('.select-btn');
let checkboxes = document.querySelectorAll('#check-all');
let maincheck = document.querySelector('.main-check');


selectbtn.addEventListener('click', () => {
    let checkintoarray = Array.from(checkboxes);
    let checkevery = checkintoarray.every(item => item.checked);
    checkboxes.forEach((item) => {
        item.checked = !checkevery;
    })
});

maincheck.addEventListener('click', () => {
    checkboxes.forEach((items) => {
        items.checked = maincheck.checked;
    })
});

document.addEventListener('DOMContentLoaded', () => {
    let storedCartNumber = localStorage.getItem('cartstorage');
    cartnumber.innerHTML = storedCartNumber || 0;
});
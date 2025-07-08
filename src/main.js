const dropimg = document.querySelector('.drop-img');
const droplist = document.querySelector('.dropdown');
const plus = document.querySelectorAll('.plus');
const minus = document.querySelectorAll('.minus');
const count = document.querySelectorAll('.count');
const additemstocart = document.querySelectorAll('.add-items-to-cart');
const cartnumber = document.querySelector('.cart-number');
const carticon = document.querySelector('.cart-button');
const clearall = document.querySelector('.clear-cart');
const loginbtn = document.querySelectorAll('.login');
const registerbtn = document.querySelectorAll('.register');
const logomain = document.querySelector('.logo');
const popupinput = document.querySelectorAll('.popup-input');
const successtoast = document.querySelector('.success-toast');
const filltoast = document.querySelector('.fill-toast');
const carttoast = document.querySelector('.cart-toast');
const containerofcard = document.querySelector('.container');



//to add product
const addproductbtn = document.querySelector('.add-products-btn');
const productpopup = document.querySelector('.add-p-popup');
const overlay = document.querySelector('.overlay');
const popupclose = document.querySelector('.popup-close');


const addproduct = document.querySelector('.add-product');

//to validate all inputs when add products
const validateinput = () => {
    let allvalid = true;

    popupinput.forEach((item) => {
        if (item.value.trim() === '') {
            allvalid = false;
        }
    });
    if (!allvalid) {
        filltoast.style.display = 'flex';
        setTimeout(() => {
            filltoast.style.display = 'none';
        }, 5000);
    }
    else {
        addnewproduct();
        resetinputfields();
        successtoast.style.display = 'flex';
        setTimeout(() => {
            successtoast.style.display = 'none';
        }, 5000);
    }
};

const resetinputfields = () => {
    document.querySelector('#for-category').value = '';
    document.querySelector('#for-p-name').value = '';
    document.querySelector('#for-description').value = '';
    document.querySelector('#for-price-was').value = '';
    document.querySelector('#for-price-now').value = '';
    document.querySelector('#for-stock').value = '';
};

let existingCards = '';

const addnewproduct = () => {
    const forcategory = document.querySelector('#for-category').value;
    const forname = document.querySelector('#for-p-name').value;
    const fordescription = document.querySelector('#for-description').value;
    const forpricewas = document.querySelector('#for-price-was').value;
    const forpricenow = document.querySelector('#for-price-now').value;
    const forstock = document.querySelector('#for-stock').value;
    const forimage = document.querySelector('#for-image');
    let imageurl = URL.createObjectURL(forimage.files[0]);

    const cardData = {
        category: forcategory,
        name: forname,
        description: fordescription,
        priceWas: forpricewas,
        priceNow: forpricenow,
        stock: forstock,
        image: imageurl
    };

    //store cards data in local string
    existingCards = localStorage.getItem('cards');
    if (existingCards) {
        const cards = JSON.parse(existingCards);
        cards.push(cardData);
        localStorage.setItem('cards', JSON.stringify(cards));
    } else {
        localStorage.setItem('cards', JSON.stringify([cardData]));
    }

    const carddiv = document.createElement('div');
    carddiv.className = 'card';
    cardivhtml(cardData);

    plus.forEach((add, index) => {
        add.addEventListener('click', () => {
            let currentcount = parseInt(count[index].innerHTML);
            count[index].innerHTML = currentcount + 1;
            localStorage.setItem(`count${index}`, currentcount + 1);
        })
        let storedCount = localStorage.getItem(`count${index}`);
        if (storedCount) {
            count[index].innerHTML = storedCount;
        }
    });

    minus.forEach((sub, index) => {
        sub.addEventListener('click', () => {
            let currentcount = parseInt(count[index].innerHTML);
            if (currentcount > 1) {
                count[index].innerHTML = currentcount - 1;
                localStorage.setItem(`count${index}`, currentcount - 1);
            }
        })
    });

};

const loadcardfromLS = () => {
    // get data fro local string
    let storedcards = localStorage.getItem('cards');
    if (storedcards) {
        const carddata = JSON.parse(storedcards);
        carddata.forEach((cardData) => {
            cardivhtml(cardData);
        })
    }

};

const cardivhtml = (cardData) => {
    const carddiv = document.createElement('div');
    carddiv.className = 'card';

    carddiv.innerHTML = `<div class="category">${cardData.category}</div>
        <div class="card-img">
        <img src="${cardData.image}" alt="">
        </div>
        <p class="product-name">
          ${cardData.name}
          </p>
        <div class="rating">
          <img src="./public/emojione--star.png" alt="">
          <p>4.6</p>
        </div>
        <div class="product-description">
          ${cardData.description}
          </div>
        <div class="product-price">
          <div class="price-now">
            PKR <span>${cardData.priceNow}</span>
          </div>
          <div class="price-actual">
          ${cardData.priceWas}
          </div>
        </div>
        <div class="total-stock">
        <p>Total Stocks Available: <span class="stocks">${cardData.stock}</span></p>
        </div>
        <div class="quantitytobuy">
          <p class="quantity">Quantity: </p>
          <div class="plus-minus">
          <p class="plus">+</p>
          <p class="count">1</p>
          <p class="minus">-</p>
          </div>
          </div>
          <div class="addtocart">
          <img src="./public/mdi--cart-outline.png" alt="">
          <button class="add-items-to-cart" type="submit">Add To Cart</button>
          </div>`;

    containerofcard.appendChild(carddiv);

};


document.addEventListener('DOMContentLoaded', () => {
    productpopup.style.display = 'none';
    let storedCartNumber = localStorage.getItem('cartstorage');
    cartnumber.innerHTML = storedCartNumber || 0;
    loadcardfromLS();
});

loginbtn.forEach((btn) => {
    btn.addEventListener('click', (event) => {
        if (window.location.href.includes('cart.html')) {
            window.location.href = './login.html';
        }
        else {
            window.location.href = '../src/login.html';
        }
    });
});
registerbtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        if (window.location.href.includes('cart.html')) {
            window.location.href = './register.html';
        }
        else {
            window.location.href = '../src/register.html';
        }
    });
});

dropimg.addEventListener('click', () => {
    if (window.innerWidth <= 440 && (droplist.style.opacity == '0' || droplist.style.opacity == '')) {
        droplist.style.opacity = '1';
        droplist.style.cursor = 'pointer';
    }
    else
        droplist.style.opacity = '0';
    droplist.style.cursor = 'default';
});
document.addEventListener('click', (event) => {
    if (window.innerWidth <= 440 && !dropimg.contains(event.target) && !droplist.contains(event.target)) {
        droplist.style.opacity = '0';
    }
})


plus.forEach((add, index) => {
    add.addEventListener('click', () => {
        let currentcount = parseInt(count[index].innerHTML);
        count[index].innerHTML = currentcount + 1;
        localStorage.setItem(`count${index}`, currentcount + 1);
    })
    let storedCount = localStorage.getItem(`count${index}`);
    if (storedCount) {
        count[index].innerHTML = storedCount;
    }
});

minus.forEach((sub, index) => {
    sub.addEventListener('click', () => {
        let currentcount = parseInt(count[index].innerHTML);
        if (currentcount > 1) {
            count[index].innerHTML = currentcount - 1;
            localStorage.setItem(`count${index}`, currentcount - 1);
        }
    })
});

additemstocart.forEach((items, index) => {
    items.addEventListener('click', () => {
        let itemstoadd = parseInt(count[index].innerHTML);
        let currentitems = parseInt(cartnumber.innerHTML);
        let cartstorage = itemstoadd + currentitems;
        cartnumber.innerHTML = cartstorage;
        localStorage.setItem(`cartstorage`, cartstorage);

        carttoast.style.display = 'flex';
        setTimeout(() => {
            carttoast.style.display = 'none';
        }, 3000);
    });
    let storedcartnumber = localStorage.getItem(`cartstorage`);
    cartnumber.innerHTML = storedcartnumber || 0;
});


carticon.addEventListener('mouseenter', () => {
    setTimeout(() => {
        clearall.style.opacity = '1';
    }, 200)
});

carticon.addEventListener('touchstart', (event) => {
    event.preventDefault();
    carticon.style.backgroundColor = '#adc3d6';
    setTimeout(() => {
        clearall.style.opacity = '1';
    }, 200)
});

document.addEventListener('mousemove', (event) => {
    if (!clearall.contains(event.target) && !carticon.contains(event.target)) {
        carticon.style.backgroundColor = '#ffffff';
        clearall.style.opacity = '0';
    }
});

clearall.addEventListener('click', (event) => {
    event.preventDefault();
    localStorage.removeItem(`cartstorage`);
    cartnumber.innerHTML = 0;
});

logomain.addEventListener('click', (event) => {
    event.preventDefault();
    window.location.href = '../index.html';
});

addproductbtn.addEventListener('click', () => {
    if (productpopup.style.display === 'none') {
        productpopup.style.display = 'flex';
        overlay.style.display = 'block';
        document.body.style.pointerEvents = 'none';
    }

});

popupclose.addEventListener('click', () => {
    productpopup.style.display = 'none';
    document.body.style.pointerEvents = 'auto';
    overlay.style.display = 'none';
});

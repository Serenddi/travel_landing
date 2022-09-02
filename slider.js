let div_1 = document.getElementById('d_1');

let div_2 = document.getElementById('d_2');

let div_3 = document.getElementById('d_3');


// let x = document.body.wi

let checking1 = document.getElementById('checking1')
let checking2 = document.getElementById('checking2')
let checking3 = document.getElementById('checking3')

function changeOrder() {
    div_1.style.order = 2;
    div_2.style.order = 3;
    div_3.style.order = 1;
    checking1.classList.remove('active-label')
    checking2.classList.add('active-label')
div_3.removeEventListener('click', changeOrder);
div_2.addEventListener('click', changeOrder2);
}

function changeOrder2() {
  
    div_1.style.order = 3;
    div_2.style.order = 1;
    div_3.style.order = 2;
    checking2.classList.remove('active-label')
    checking3.classList.add('active-label')
div_2.removeEventListener('click', changeOrder2);
div_2.addEventListener('click', changeOrder3);
}

function changeOrder3() {
    div_1.style.order = 2;
    div_2.style.order = 3;
    div_3.style.order = 1;
    checking3.classList.remove('active-label')
    checking2.classList.add('active-label')
div_2.removeEventListener('click', changeOrder3);
div_3.addEventListener('click', function back() {
  div_1.style.order = 1;
  div_2.style.order = 2;
  div_3.style.order = 3;
  checking2.classList.remove('active-label')
  checking1.classList.add('active-label')
div_3.removeEventListener('click', back)
div_3.addEventListener('click', changeOrder);
})
}

div_3.addEventListener('click', changeOrder);

let dest_items = document.getElementById('dest_items');
let prev = document.getElementById('prev');
let next = document.getElementById('next');

const arr = ['url("assets/d_mini_1.jpg")', 'url("assets/d_mini_2.jpg")', 'url("assets/d_mini_3.jpg")']

// function mobileSlider() {
//     dest_items.style.background = 'url("assets/d_mini_2.jpg")';
//     next.removeEventListener('click', mobileSlider)
//     next.addEventListener('click', mobileSlider2)
// }
// function mobileSlider2() {
//     dest_items.style.background = 'url("assets/d_mini_3.jpg")';
//     next.removeEventListener('click', mobileSlider2)
//     prev.addEventListener('click', mobileSliderBack)
// }
// function mobileSliderBack() {
//     dest_items.style.background = 'url("assets/d_mini_2.jpg")';
//     prev.removeEventListener('click', mobileSliderBack);
//     prev.addEventListener('click', mobileSliderBack2);
// }
// function mobileSliderBack2() {
//     dest_items.style.background = 'url("assets/d_mini_1.jpg")';
//     prev.removeEventListener('click', mobileSliderBack2);
//     next.addEventListener('click', mobileSlider)
// }
next.addEventListener('click', mobileSlider)
prev.addEventListener('click', mobileSliderBack)

let count = 0;


function mobileSlider() {
    switch(count) {
        case count=0: 
        dest_items.style.background = arr[0];
        count++; break
        case count=1:
        dest_items.style.background = arr[1];
        checking1.classList.remove('active-label')
        checking2.classList.add('active-label')
        count++;break
        case count=2:
        dest_items.style.background = arr[2];
        checking2.classList.remove('active-label')
        checking3.classList.add('active-label')
        break;
    }
}

function mobileSliderBack() {
    switch(count) {
        case count=2:
        dest_items.style.background = arr[1];
        checking3.classList.remove('active-label')
        checking2.classList.add('active-label')
        count--;break
        case count=1:
        dest_items.style.background = arr[0];
        checking2.classList.remove('active-label')
        checking1.classList.add('active-label')
        count--;
        // dest_items.style.background = 'none';
        break;
    }
}




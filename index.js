let pop = document.getElementById("pop");
let burger = document.querySelector('header div');
let body = document.body;
let close = document.getElementById('close');
let ul = document.getElementById("ul");
let bodyDark = document.createElement('div');
bodyDark.className = 'dark';

function stopPrevent (burger) {
  burger.preventDefault();
}

function burgerClick() {
burger.addEventListener('click', popActive, stopPrevent);
}

burgerClick()

function popActive() {
  pop.classList.add('active');
  document.body.append(bodyDark);
  bodyDark.classList.add('dark');
}

function closeClick() {
  close.addEventListener('click', popDisactive);
}

closeClick()

function popDisactive() {
  pop.classList.remove('active');
  pop.classList.add('pop-up');
  // bodyDark.classList.remove('dark');
}

function clickLi () {
  ul.addEventListener('click', popDisactive);
  bodyDark.addEventListener('click', popDisactive);
}

clickLi()



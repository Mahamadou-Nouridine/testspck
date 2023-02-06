let outScreen = document.querySelector('.output input');
mode = 'calc';

function insert(num) {
  outScreen.value += num;
  if (mode == 'equal') {
    outScreen.value = '';
    outScreen.value += num;
    mode = 'calc';
  };
};

function clr() {
  outScreen.value = '';
};

function del() {
  outScreen.value = outScreen.value.slice(0, -1);
  if (mode == 'equal') {
    outScreen.value = '';
  };
};

function calc() {
  try {
    outScreen.value = eval(outScreen.value);
    mode = 'equal';
  } catch (err) {
    outScreen.value = 'INVALID';
    mode = 'equal';
  };
};

let menuIcon = document.querySelector('.icon'),
  menu = document.querySelector('.menu');

menuIcon.onclick = function() {
  menu.classList.toggle('open');
};

let blueTheme = document.querySelector('.blue'),
  orangeTheme = document.querySelector('.orange'),
  redTheme = document.querySelector('.red'),
  purpleTheme = document.querySelector('.purple'),
  pinkTheme = document.querySelector('.pink');

blueTheme.onclick = function() {
  document.body.classList.remove('orange');
  document.body.classList.remove('red');
  document.body.classList.remove('purple');
  document.body.classList.remove('pink');
  document.body.classList.add('blue');
  menu.classList.remove('open');
};

orangeTheme.onclick = function() {
  document.body.classList.remove('blue');
  document.body.classList.remove('red');
  document.body.classList.remove('purple');
  document.body.classList.remove('pink');
  document.body.classList.add('orange');
  menu.classList.remove('open');
};

redTheme.onclick = function() {
  document.body.classList.remove('orange');
  document.body.classList.remove('blue');
  document.body.classList.remove('purple');
  document.body.classList.remove('pink');
  document.body.classList.add('red');
  menu.classList.remove('open');
};

purpleTheme.onclick = function() {
  document.body.classList.remove('orange');
  document.body.classList.remove('red');
  document.body.classList.remove('blue');
  document.body.classList.remove('pink');
  document.body.classList.add('purple');
  menu.classList.remove('open');
};

pinkTheme.onclick = function() {
  document.body.classList.remove('orange');
  document.body.classList.remove('red');
  document.body.classList.remove('purple');
  document.body.classList.remove('blue');
  document.body.classList.add('pink');
  menu.classList.remove('open');
};
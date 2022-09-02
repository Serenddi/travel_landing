let header = document.getElementById('header');
let preview = document.getElementById("first-section");
let login_button = document.getElementById('login');
let account = document.getElementById('account');
let section = document.querySelectorAll('section');


function loginClick() {
  login_button.addEventListener('click', PopUpLogin);
}
loginClick()

function loginClickAccount() {
  account.addEventListener('click', PopUpLogin);
  // bodyDark.classList.remove('dark');
}

loginClickAccount()



function closeLogin () {
  d.remove(), h5.remove(), buttons.remove(), b_facebook.remove(), b_google.remove(), span_line_or.remove(), inputs.remove(), span_email.remove(), span_password.remove(), b_sign.remove(), span_forgot.remove();
 inp_email.value = '';
 inp_password.value = '';
 bodyDark.classList.remove('dark')
}

function closeLoginClick () {
  bodyDark.addEventListener('click', closeLogin);
}

closeLoginClick()

let d = document.createElement('div');
let h5 = document.createElement('h5');
let buttons = document.createElement('div');
let b_facebook = document.createElement('button');
let facebook_logo = document.createElement('img');
let b_google = document.createElement('button');
let google_logo = document.createElement('img');
let span_line_or = document.createElement('span');
let inputs = document.createElement('div');
let span_email = document.createElement('span');
let inp_email = document.createElement('input');
let span_password = document.createElement('span');
let inp_password = document.createElement('input');
let b_sign = document.createElement('button');
let span_forgot = document.createElement('span');
let span_line = document.createElement('span');
  let span_register = document.createElement('span');


function PopUpLogin () {
  document.body.append(bodyDark);
  bodyDark.classList.add('dark');
  //create main div
  d.className = 'login_pop_up';
  header.after(d);
  //create a title
  d.prepend(h5);
  h5.textContent = "Log in to your account";
  h5.className = 'login_title';
  //create div for buttons of social medias
  buttons.className = 'buttons';
  d.append(buttons)
  //create the facebook button
  buttons.append(b_facebook);
  b_facebook.textContent = "Sign In with Facebook";
  b_facebook.className = 'button b_facebook';
  facebook_logo.src = 'assets/facebook_logo.svg';
  b_facebook.prepend(facebook_logo);
  //create the google button
  buttons.append(b_google);
  b_google.textContent = "Sign In with Google";
  b_google.className = 'button b_google';
  google_logo.src = 'assets/logo_google.svg';
  b_google.prepend(google_logo);
  //create a separator
  d.append(span_line_or);
  span_line_or.textContent = 'or';
  span_line_or.className = 'span_line_or'
  //create div for inputs and elements
  d.append(inputs);
  inputs.className = 'inputs';
  //create email input
  span_email.textContent = 'Email';
  span_email.className = 'span_email';
  inputs.prepend(span_email);
  inp_email.className = 'inp inp_email';
  inputs.append(inp_email);
  //create password input
  span_password.textContent = 'Password';
  span_password.className = 'span_password';
  inputs.append(span_password);
  inp_password.className = 'inp inp_password';
  inputs.append(inp_password);
  //create sign button
  inputs.append(b_sign);
  b_sign.textContent = "Sign In";
  b_sign.className = 'button b_sign';
  //create "forgot the password?"
  span_forgot.className = 'span_forgot';
  span_forgot.textContent = 'Forgot Your Password?';
  inputs.append(span_forgot);
  span_line.className = 'span_line';
  d.append(span_line);
  span_register.className = 'span_register';
  span_register.textContent = 'Don’t have an account? Register';
  d.append(span_register);
  }
  
  function goAlert() {
    alert('Your email: ' + inp_email.value + '\nYour password: ' + inp_password.value);
  }

  function b_signClick() {
    b_sign.addEventListener('click', goAlert)
  }

  b_signClick()


  function span_registerClick() {
    // if (span_register.className = 'span_register') {
    span_register.addEventListener('click', registration);
    // span_register.addEventListener('click',PopUpLogin);
  }

  span_registerClick()

  function registration() {
    // PopUpLogin;
    buttons.remove();
    span_line_or.remove();
    span_forgot.remove();
    span_register.textContent = 'Already have an account? Log in';
    b_sign.textContent = 'Sign Up';
    h5.textContent = 'Create account';
    d.classList.add('register_form');
  }

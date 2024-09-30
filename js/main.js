//Design
const signInBtn = document.querySelector("#sign-in-btn");
const signUpBtn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
const signInBtn2 = document.querySelector("#sign-in-btn2");
const signUpBtn2 = document.querySelector("#sign-up-btn2");

signUpBtn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
});

signInBtn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
});

signUpBtn2.addEventListener("click", () => {
    container.classList.add("sign-up-mode2");
});

signInBtn2.addEventListener("click", () => {
    container.classList.remove("sign-up-mode2");
});

//HTML Elemetns 
let username = document.getElementById('signName') ;
let email = document.getElementById('signEmail');
let password = document.getElementById('signPassword');
const errorMessage = document.getElementById('signup-error-message');
let signUp_btn = document.querySelector("#signUp");
let userNameError = document.querySelector("#userName-error-message");
let emailError = document.querySelector("#email-error-message");
let errorMess = document.querySelector("#errorMessage");


//event
signUp_btn.addEventListener("click" , signUp );

// Regex patterns
const usernameRegex = /^[A-Za-z0-9._-]{3,}$/; 
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 

//Function Signup
function signUp() {

  errorMessage.textContent = "";

  const username = document.getElementById('signName').value;
  const email = document.getElementById('signEmail').value;
  const password = document.getElementById('signPassword').value;

  // Check if fields are empty
  if (username === '' || email === '' || password === '') {
      if (username === '') {
          userNameError.classList.replace('d-none', 'd-block');
          userNameError.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> Username is required`;
      }
      if (email === '') {
          emailError.classList.replace('d-none', 'd-block');
          emailError.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> Email is required`;
      }
      if (password === '') {
        errorMessage.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> Password is required`;
      }
      return;
  }else{
    clear();
  }

  // Validate username
  if (!usernameRegex.test(username)) {
    userNameError.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> Invalid username`;
      return;
  }else{
    clear();
  }

  // Validate email
  if (!emailRegex.test(email)) {
    emailError.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> Please enter a valid email address`;
      return;
  }else{
    clear();
  }

  // Get existing users from local storage
  const users = JSON.parse(localStorage.getItem('users')) || [];

  // Check if user already exists
  const userExists = users.some(user => user.username === username || user.email === email);
  if (userExists) {
      errorMessage.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> Username or Email already taken`;
      return;
  }

  // Add new user
  users.push({ username, email, password });

  // Save updated users list to local storage
  localStorage.setItem('users', JSON.stringify(users));
   userNameError.innerHTML = '';
  emailError.innerHTM = '';
  errorMessage.innerHTML ='';
  username.value = '';
  email.value = '';
  password.value = '';

  displayErrorMess("Congratulations! " + username + '<img class="cong-img" src="./SVG/congratulationpng.png" alt="">');

  Toastify({

    text: "Confirmed!, Registration Sucessfully",
    
    duration: 5000,
  
    gravity : "bottom",
    
    }).showToast();

}

function clear(){
  userNameError.innerHTML = '';
  emailError.innerHTML = '';
  username.value = '';
  email.value = '';
  password.value = '';

}

function start(){
  window.location.href = 'index.html';    
}

function displayErrorMess(message){
  errorMess.parentElement.parentElement.classList.replace('d-none' , 'd-block');
  errorMess.innerHTML = message;
}

//Function Login
function login() {
  let username = document.getElementById('login-username').value;
  let password = document.getElementById('login-password').value;
  let errorMessage = document.getElementById('login-error-message');

  // Clear previous error messages
  document.querySelector("#nameValid").classList.add('d-none');
  document.querySelector("#passValid").classList.add('d-none');
  errorMessage.textContent = '';

  let isValid = true;

  // Check if username is empty
  if (username === '') {
    document.querySelector("#nameValid").classList.replace('d-none', 'd-block');
    isValid = false;
  }

  // Check if password is empty
  if (password === '') {
    document.querySelector("#passValid").classList.replace('d-none', 'd-block');
    isValid = false;
  }

  // If either field is not valid, stop here
  if (!isValid) {
    document.getElementById('login-username').value = "";
    return;
  }

  // Get existing users from local storage
  const users = JSON.parse(localStorage.getItem('users')) || [];

  // Validation
  const user = users.find(user => user.username === username && user.password === password);
  
  if (user) {
    displayErrorMess("Hello, " + username + '<img class="cong-img" src="./SVG/congratulationpng.png" alt="">');
    document.querySelector("#startBtn").addEventListener("click", go);
    errorMessage.textContent = '';
    document.getElementById('login-username').value = "";
    document.getElementById('login-password').value = ""
    Toastify({

      text: "Welcome" +"  " +  username + " ,Nice Day!",
      
      duration: 5000,

      position: "left",
    
      gravity : "bottom",
      
      }).showToast();

  } else {
    document.getElementById('login-username').value = "";
    document.getElementById('login-password').value = ""
    errorMessage.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> Invalid username or password`;
  }
  document.getElementById('login-username').value = "";
  document.getElementById('login-password').value = ""
}

function go() {
  window.location.href = 'home.html';
  username = '';
  password = '';
}


//Function Logout
function logout(){
  localStorage.removeItem('username');
  window.location.href = 'index.html';
}

document.querySelector('#close').addEventListener("click" , close);
function close(){
  document.querySelector('#closeWindow').classList.replace('d-block' , 'd-none' );
  username.value = '';
  email.value = '';
  password.value = '';
}
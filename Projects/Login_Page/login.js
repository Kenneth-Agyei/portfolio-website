const navLinks = document.querySelectorAll(".nav-link");
const welcome = document.querySelector('.welcome');
const nameInput = document.querySelector("#name");
const pwdInput = document.querySelector('#pwd');
const showPwdInput = document.querySelector('#show-pwd');
console.log(showPwdInput);

//auto focus on first input 
window.onload = () => nameInput.focus();

//Apply active on navLink click 
navLinks.forEach(navLink => {
  navLink.addEventListener("click", () => {
    navLinks.forEach(link => {
      link.classList.remove('active');
    });
    navLink.classList.add('active');
  });
});

//Display nameInput on page
nameInput.addEventListener("keyup", () => {
  welcome.innerHTML = "Welcome, " + nameInput.value + "!!";
});

//show password 
showPwdInput.addEventListener("click", () => {
  if(pwdInput.getAttribute("type") === "password") {
    pwdInput.setAttribute("type", "text");
  } else {
    pwdInput.setAttribute("type", "password");
  }
});
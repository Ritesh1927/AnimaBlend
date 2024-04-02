function showModal() {
  document.querySelector(".overlay").classList.add("showoverlay");
  document.querySelector(".loginform").classList.add("showloginform");
}
function closeModal() {
  document.querySelector(".overlay").classList.remove("showoverlay");
  document.querySelector(".loginform").classList.remove("showloginform");
}
function showBorder() {
  document.querySelector(".login-system-wrapper").classList.add("login-border");
}
// login section
function otpSection() {
  document.querySelector(".login-option").classList.add("hidelogin-option");
  document
    .querySelector(".passward-section")
    .classList.add("showotp-passward-section");
  // mail id section
  var mail = document.getElementById("login-mail").value;
  document.getElementById("showmail").innerHTML = mail;
}
// male value recive to otp form
function backLogin() {
  document.querySelector(".login-option").classList.remove("hidelogin-option");
  document
    .querySelector(".passward-section")
    .classList.remove("showotp-passward-section");
}
function openSearchbar() {
  document.querySelector(".project-header").classList.add("hide-header");
  document
    .querySelector(".search-bar-wrapper")
    .classList.add("show-search-bar-wrapper");
}
function closeSearchbar() {
  document.querySelector(".project-header").classList.remove("hide-header");
  document
    .querySelector(".search-bar-wrapper")
    .classList.remove("show-search-bar-wrapper");
}
function showSignupform() {
  document
    .querySelector(".main-signup-form-container")
    .classList.add("show-main-signup-form-container");
  document
    .querySelector(".main-loginform-container")
    .classList.add("hide-main-loginform-container");
  document
    .querySelector(".signup-show-btn")
    .classList.add("hide-signup-show-btn");
  document
    .querySelector(".signin-show-btn")
    .classList.add("show-signin-show-btn");
}
function showSigninform() {
  document
    .querySelector(".main-signup-form-container")
    .classList.remove("show-main-signup-form-container");
  document
    .querySelector(".main-loginform-container")
    .classList.remove("hide-main-loginform-container");
  document
    .querySelector(".signup-show-btn")
    .classList.remove("hide-signup-show-btn");
  document
    .querySelector(".signin-show-btn")
    .classList.remove("show-signin-show-btn");
}

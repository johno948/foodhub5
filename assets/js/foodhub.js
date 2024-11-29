'use strict';


// navbar variables
const nav = document.querySelector('.navbar-nav');
const navLinks = document.querySelectorAll('.nav-link');
const cartToggleBtn = document.querySelector('.shopping-cart-btn');
const navToggleBtn = document.querySelector('.menu-toggle-btn');
const shoppingCart = document.querySelector('.cart-box');



// nav toggle function
const navToggleFunc = function () {
  nav.classList.toggle('active');
  navToggleBtn.classList.toggle('active');
}

// shopping cart toggle function
const cartToggleFunc = function () { shoppingCart.classList.toggle('active') }



// add event on nav-toggle-btn
navToggleBtn.addEventListener('click', function () {

  // If the shopping-cart has an `active` class, it will be removed.
  if (shoppingCart.classList.contains('active')) cartToggleFunc();

  navToggleFunc();

});

// add event on cart-toggle-btn
cartToggleBtn.addEventListener('click', function () {

  // If the navbar-nav has an `active` class, it will be removed.
  if (nav.classList.contains('active')) navToggleFunc();

  cartToggleFunc();

});

// add event on all nav-link
for (let i = 0; i < navLinks.length; i++) {

  navLinks[i].addEventListener('click', navToggleFunc);

}

// Disable right-click context menu
document.oncontextmenu = () => {
  alert("Don't try right click!");
  return false;
}

// Disable F12 (DevTools) and Ctrl+U (View Source)
document.onkeydown = (e) => {
  // Prevent F12 (DevTools) and other shortcuts
  if (e.key === "F12") {
      alert("Don't try to Inspect Element!");
      return false;
  }

  // Prevent Ctrl+U (View Source)
  if (e.ctrlKey && e.key === "u") {
      alert("Don't try to View Page Source!");
      return false;
  }

  // Prevent Ctrl+Shift+I (DevTools shortcut)
  if (e.ctrlKey && e.shiftKey && e.key === "I") {
      alert("Don't try to Inspect Element!");
      return false;
  }

  // Prevent Ctrl+Shift+J (DevTools shortcut)
  if (e.ctrlKey && e.shiftKey && e.key === "J") {
      alert("Don't try to Inspect Element!");
      return false;
  }
};
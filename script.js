'use strict'


const viewPlansBtn = document.querySelector('.view-plans');
const section1El = document.querySelector('.section-1');
const viewPlansBtn2 = document.querySelector('.view-plans-2');

viewPlansBtn.addEventListener('click', function (e) {
  e.preventDefault()
  
  section1El.scrollIntoView({behavior: 'smooth'})
})

viewPlansBtn2.addEventListener('click', function (e) {
    e.preventDefault();
     section1El.scrollIntoView({ behavior: 'smooth' });
})
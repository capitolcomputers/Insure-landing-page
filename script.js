'use strict'


const viewPlansBtn = document.querySelector('.view-plans');
const section1El = document.querySelector('.section-1');


viewPlansBtn.addEventListener('click', function (e) {
  e.preventDefault()
  
  section1El.scrollIntoView({behavior: 'smooth'})
})

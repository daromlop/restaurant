/* Jquery

$(document).ready(function(){

  Menu Fixed

  let menuh = $(".container-barmenu").outerHeight();

$(window).on('scroll', function () {
    if ($(window).scrollTop() > menuh) {
        $('.container-barmenu').addClass('fixed');
    } else {
        $('.container-barmenu').removeClass('fixed');
    }
})

   Menu Nav 

  $(".fa-bars").click(function() {
    $(".container-barmenu-nav").css("transform", "translateX(0%)");
    $(".container-barmenu-nav").css("transition-delay", "500ms");
    $(".background-nav").css("visibility", "visible");
    $(".background-nav").css("background-color", "rgba(255, 255, 255, 1)");
  });

  $(".fa-times").click(function() {
    $(".container-barmenu-nav").css("transform", "translateX(-100%)");
    $(".container-barmenu-nav").css("transition-delay", "0ms");
    $(".background-nav").css("visibility", "hidden");
    $(".background-nav").css("background-color", "rgba(255, 255, 255, 0)");
  });

  $(".fa-times").mouseover(function() {
    $(this).removeClass("fa-times").addClass("fa-arrow-left");
  });

    $(".fa-times").mouseout(function() {
    $(this).removeClass("fa-arrow-left").addClass("fa-times");
  });

  });



Platos Estrella 

$(".infoplatos .button").click(function(event){

  let botonse = $(event.target);
  let parent = $(botonse).parent();

  if ($(this).text() === "VER MÁS 🖹") {
$(parent).find(".cartaes").css("transform", "rotateY(180deg)");
$(this).text("⬅ VOLVER");
} else {
  $(".cartaes").css("transform", "rotateY(0deg)");
  $(this).text("VER MÁS 🖹");
}
});
});*/

/* JS */

/* Menu Fixed*/

let menu = document.getElementById("bar-menu");
let menuh = document.getElementById("bar-menu").offsetHeight;

window.addEventListener('scroll', function(){
if (window.pageYOffset > menuh) {
    menu.classList.add('fixed');
  } else {
    menu.classList.remove('fixed');
  }
});

/* Menu Nav */

let fabars = document.getElementsByClassName('fa-bars')[0];
let fatimes = document.getElementsByClassName('fa-times')[0];
let menuopt = document.querySelectorAll(".menuopt");
let media = window.matchMedia("(min-width: 1024px)");

fabars.addEventListener('click', function(){
document.getElementsByClassName('container-barmenu-nav')[0].style.cssText = 'transform: translateX(0%); transition-delay: 500ms;';
document.getElementsByClassName('background-nav')[0].style.cssText = 'visibility: visible; background-color: rgba(255, 255, 255, 1);';
document.getElementsByTagName('body')[0].style.cssText = 'overflow: hidden;';
});

fatimes.addEventListener('click', function(){
document.getElementsByClassName('container-barmenu-nav')[0].style.cssText = 'transform: translateX(-100%); transition-delay: 0ms;';
document.getElementsByClassName('background-nav')[0].style.cssText = 'visibility: hidden; background-color: rgba(255, 255, 255, 0);';
document.getElementsByTagName('body')[0].style.cssText = 'overflow: initial;';
});

fatimes.addEventListener('mouseover', function(){
this.classList.remove('fa-times');
this.classList.add('fa-arrow-left');
});

fatimes.addEventListener('mouseout', function(){
this.classList.remove('fa-arrow-left');
this.classList.add('fa-times');
});

menuopt.forEach(function(e) {
  e.addEventListener('click', function() {
document.getElementsByClassName('container-barmenu-nav')[0].style.cssText = 'transform: translateX(-100%); transition-delay: 0ms;';
document.getElementsByClassName('background-nav')[0].style.cssText = 'visibility: hidden; background-color: rgba(255, 255, 255, 0);';
document.getElementsByTagName('body')[0].style.cssText = 'overflow: initial;';
  });
})

/* Platos Estrella */

let botonpla = document.getElementById('platosestrella').getElementsByClassName('button');

Array.prototype.forEach.call(botonpla, function(e) {
e.addEventListener('click', function(){
  if(e.innerHTML === "VER MÁS") {
    e.parentElement.querySelector('.cartaes').style.transform = "rotateY(180deg)";
    e.innerHTML = "VOLVER";
  } else {
    e.parentElement.querySelector('.cartaes').style.transform = "rotateY(0deg)";
    e.innerHTML = "VER MÁS";
  }
});
});

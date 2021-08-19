let menu = document.querySelector('#openMenu');
let menuc = document.querySelector('#closeMenu');
let menuOpen = document.querySelector('.navlist');

menu.addEventListener("click",function () {
    menuOpen.style.left="0";
    menu.style.display="none";
    menuc.style.display="block";
});
menuc.addEventListener("click",function () {
    menuOpen.style.left="-300px";
    menu.style.display="block";
    menuc.style.display="none";
});


$(document).ready(function(){
    $("#searchopen").click(function(){
      $("#searchList").slideToggle("first");
    });
  });


let openform = document.querySelector('#openForm');
let Openuser = document.querySelector('#openuser');
let Closuser = document.querySelector('#close-user');

Openuser.addEventListener("click",function () {
    openform.style.top="0";
    Openuser.style.opacity="0";
});
Closuser.addEventListener("click",function () {
    openform.style.top="-110vh";
    Openuser.style.opacity="1";
});




$('.Review-op').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    autoplayTimeout:2000,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})
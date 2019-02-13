function modal(){
    let myEl=$('#modal')[0];
    myEl.style.opacity=1;
    myEl.style.zIndex=1;
    myEl.style.backgroundColor='white';
    let myEl1=$('#modalBtn')[0];
    let myEl3=$('#sliders')[0];
    myEl3.style.zIndex=-10;
    myEl1.onclick = function(){
        console.log('gdfhdfhr');
        myEl.style.opacity=0;
        myEl.style.transitionDuration='1s';
        myEl.style.transform='scale(0.1)';
        myEl.style.transformOrigin='-50px -100px 0';
        myEl.style.zIndex=-1;
        myEl1.style.cursor='default';
        myEl1.disabled=true;
        let myEl2=$('#modalMain')[0];
        myEl2.style.zIndex=-3;
        myEl2.style.opacity=0;
        myEl2.style.transitionDuration='1s';
    }
}
modal();
//----------animation---------
$(document).ready(function() {
    $('h1.animated').hover(
     function() {
      $(this).addClass('swing'); 
     },
     function() {
      $(this).removeClass('swing'); 
     }
    )});
//--------slider---------
    var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true
});


/*function openCity(evt, sliderName) {
    var i, slider, btns;
    slider = document.getElementsByClassName("slider");
    for (i = 0; i < slider.length; i++) {
      slider[i].style.display = "none";
    }
    btns = document.getElementsByClassName('btns');
    for (i = 0; i < btns.length; i++) {
      btns[i].className = btns[i].className.replace(" active", "");
    }
    document.getElementById(sliderName).style.display = "block";
    evt.currentTarget.className += " active";
  }
*/

function slider(){
let myEl=$('#btn1')[0];
let myEl1=$('#btn2')[0];
let myEl2=$('#btn3')[0];
let myEl3=$('.productsMobile')[0];
let myEl4=$('.productsTablet')[0];
let myEl5=$('.productsLaptop')[0];
let mySlider=$('#slider1')[0];
let mySlider1=$('#slider2')[0];
let mySlider2=$('#slider3')[0];
myEl.onclick=function(){
    //openCity(event,'slider1');
    mySlider.style.visibility='visible';
    mySlider.style.height='100%';
    mySlider1.style.visibility='hidden';
    mySlider1.style.height='0';
    mySlider2.style.visibility='hidden';
    mySlider2.style.height='0';
    myEl4.style.display="none";
    myEl5.style.display="none";
    myEl3.style.display="flex";
    myEl3.style.visibility='visible';
    myEl3.style.height='100%';
    myEl.style.borderColor='rgb(230, 166, 29)';
    myEl1.style.borderColor='transparent';
    myEl2.style.borderColor='transparent';
}
myEl1.onclick=function(){
    //openCity(event,'slider2');
    mySlider.style.visibility='hidden';
    mySlider.style.height='0';
    mySlider2.style.visibility='hidden';
    mySlider2.style.height='0';
    mySlider1.style.visibility='visible';
    mySlider1.style.height='100%';
    myEl4.style.display="flex";
    myEl4.style.visibility='visible';
    myEl4.style.height='100%';
    myEl5.style.display="none";
    myEl3.style.display="none";
    myEl1.style.borderColor='rgb(230, 166, 29)';
    myEl.style.borderColor='transparent';
    myEl2.style.borderColor='transparent';
}
myEl2.onclick=function(){
   mySlider.style.visibility='hidden';
   mySlider.style.height='0';
   mySlider2.style.visibility='visible';
   mySlider2.style.height='100%';
   mySlider1.style.visibility='hidden';
   mySlider1.style.height='0';
   myEl4.style.display="none";
   myEl5.style.display="flex";
   myEl5.style.visibility='visible';
   myEl5.style.height='100%';
   myEl3.style.display="none";
   myEl2.style.borderColor='rgb(230, 166, 29)';
   myEl1.style.borderColor='transparent';
   myEl.style.borderColor='transparent';
}
}
slider();
$( function() {
    $( ".accordion" ).accordion();
  } );
  $( function() {
    $( ".accordion" ).accordion();
  } );
  $( function() {
    $( ".accordion" ).accordion();
  } );
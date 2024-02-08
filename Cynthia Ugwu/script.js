const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

function firstPageAnim(){
    var t1 = gsap.timeline();

    t1.from("#nav",{
        y:'-10',
        opacity:0,
        duration:2,
        ease:Expo.easeInOut

    })

    
    .to(".boundingelem",{
        y:0,
        ease: Expo.easeInOut,
        duration:2,
        delay:-1,
        stagger:.2
})

  .from("#homefooter",{
    y:-10,
    opacity:0,
    duration:1,
    delay:-0.5,
    ease:Expo.easeInOut


  });
}
 //jab mouse move ho to hum log skew kar paaye aur maximum skew
// and minimum skew define kar paaye, jab mouse move ho to chapta
// ki value badhe, aur jab mouse chalna band ho jaye to skew wapas se
// circle m change ho jaye.

var timeout;

function circleChaptakaro(){
  // define default scale value
  var xscale = 1;
  var yscale = 1;

  var xprev = 0;
  var yprev = 0;
  window.addEventListener("mousemove", function(details){
    clearTimeout(timeout);

     xscale = gsap.utils.clamp(.8, 1.2, details.clientX - xprev);
     yscale = gsap.utils.clamp(.8, 1.2, details.clientY - yprev);
  
    xprev = details.clientX;
    yprev = details.clientY;

   circleMouseFollower(xscale, yscale);

  timeout = setTimeout(function(){
      document.querySelector(
        "#minicircle"
      ).style.transform = `translate(${details.clientX}px,${details.clientY}px) scale(1,1) `;
   },100);

  });
}

function circleMouseFollower(xscale, yscale){
    window.addEventListener("mousemove",function (details){
        // console.log(details.clientX , details.clientY);//iss console ki waza se hi hum ko clientX,aur ClientY ki details milti hai. 
        document.querySelector("#minicircle").style.transform = `translate(${details.clientX}px,${details.clientY}px) scale(${xscale}, ${yscale}) `;
});
 
}
 circleChaptakaro() 
circleMouseFollower();
firstPageAnim();


// teeno element ko select karo, uske baad teeno par ek mousemove lagao,
// jab mousemover ho to ye pata karo ki mouse kaha pr hai, jiska mtlb hai
// mouse ki x aur y position ka pata karo,ab mouse ki x,y position ke badle
// us image ko show karo aur image ko move kro, move karte waqt rotate karo,
// and jaise jaise mouse tez chale waise rotation bhi tez ho jaye.

document.querySelectorAll(".element").forEach(function (element) {
  var rotate = 0;
  var diffrot = 0;
  element.addEventListener("mouseleave", function (details) {
    // var diff = details.clientY - element.getBoundingClientRect().top;
    // diffrot = rotate - details.clientX;
    // rotate = details.clientX;

    gsap.to(element.querySelector("img"), {
      opacity: 0,
      ease: Power3,
      duration:0.5,
      // top: diff,
      // left: details.clientX,
      // rotate: gsap.utils.clamp(-20, 20, diffrot * 0.2),
    });
  });
});

// const menu = document.querySelector(".menubtn")
// const menunav = document.querySelector(".menunav")
// const visible = document.querySelector(".displaytog");

// menu.addEventListener("click", ()=>{
//   menunav.classList.toggle(visible)
// })



document.querySelectorAll(".element").forEach(function (element) {
  var rotate = 0;
  var diffrot = 0;
  element.addEventListener("mousemove",function(details){
    var diff = details.clientY - element.getBoundingClientRect().top;
    diffrot = rotate - details.clientX;
    rotate = details.clientX;
    
    gsap.to(element.querySelector("img"),{
      opacity:1,
      ease:Power3,
      top: diff,
      left:details.clientX,
      rotate: gsap.utils.clamp(-20,20,diffrot*.2),
    });
  });
})
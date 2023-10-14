console.log("hello world")
const a=10;
const b=20;
console.log(a+b)

// set navigation
const btnavEl=document.querySelector("btn-mobile-navigation");
const headerEl=document.querySelector(".header");
    // Your code here
    if (btnavEl) {
        btnavEl.addEventListener("click",function () {
            headerEl.classList.toggle("open-nav");
    });
}
//if(href === "#")
//window.scrollTo {
    //top: 0,
   // behavior:"smooth",
//};



//const obs = new IntersectionObserver{
  //   function (entries){
 //const ent=entries[0];
 //console.log(ent);


 //if (ent.isIntersecting === false)  {
  //  document.body.classList.add("sticky");
 //}
   //  },  
    // };



    

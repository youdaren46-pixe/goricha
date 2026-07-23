const slides=document.querySelectorAll(".slide");

const dotsContainer=document.querySelector(".dots");

let current=0;

slides.forEach((slide,index)=>{

const dot=document.createElement("span");

dot.classList.add("dot");

if(index===0) dot.classList.add("active");

dot.addEventListener("click",()=>showSlide(index));

dotsContainer.appendChild(dot);

});

const dots=document.querySelectorAll(".dot");

function showSlide(index){

slides[current].classList.remove("active");

dots[current].classList.remove("active");

current=index;

slides[current].classList.add("active");

dots[current].classList.add("active");

}

document.querySelector(".next").onclick=function(){

showSlide((current+1)%slides.length);

}

document.querySelector(".prev").onclick=function(){

showSlide((current-1+slides.length)%slides.length);

}

setInterval(function(){

showSlide((current+1)%slides.length);

},4000);
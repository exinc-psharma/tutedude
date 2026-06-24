let a=document.querySelector(".abcd");

window.addEventListener("mousemove",function(val){
    a.style.top= val.clientY-25+"px";
    a.style.left=val.clientX-25+"px";
})
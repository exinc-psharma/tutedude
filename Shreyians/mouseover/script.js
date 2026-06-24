let a=document.querySelector(".abcd");

a.addEventListener("mouseover", function(val){
    a.style.backgroundColor="yellow";
});
a.addEventListener("mouseout", function(val){
    a.style.backgroundColor="red";
});
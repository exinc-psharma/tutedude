let btn=document.querySelector("#themeBtn");
let body=document.querySelector("body");
function darkorlight(){
    if(window.matchMedia("(prefers-color-scheme: dark)").matches){
        body.classList.add("dark");
    }else{
        body.classList.remove("dark");
    }
};

const savedTheme = localStorage.getItem("theme");

if(savedTheme){
    if(savedTheme === "dark"){
        body.classList.add("dark");
    }
    else{
        body.classList.remove("dark");
    }
}
else{
    darkorlight();
}

window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function(){
    if(!localStorage.getItem("theme")){
        darkorlight();
    }
});
btn.addEventListener("click", function(){
    body.classList.toggle("dark");
    if(document.body.classList.contains("dark")){
        localStorage.setItem("theme","dark");
    }
    else{ 
        localStorage.setItem("theme","light");
    }
});
let btn=document.querySelector("#btn");
let file=document.querySelector("input");
btn.addEventListener('click',function(){
    file.click();
});
file.addEventListener("change",function(dets){
    const text=dets.target.files[0];
    if(text){
        btn.textContent=text.name;
    }
});
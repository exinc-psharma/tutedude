//Greeting
const btn= document.getElementById('greet');
btn.addEventListener('click', ()=>{
    const ins= document.getElementById('name').value;
    const hello=document.getElementById('hello');
    if(ins===""){
        hello.innerText="Hello!";
    }
    else{
        hello.innerText=`Hello, ${ins}!`;
    }
})

//Box colors
const red= document.getElementById('red');
red.addEventListener('click',()=>{
    red.style.backgroundColor="red";
    red.style.color="white";
    red.style.border="none";
})
const blue= document.getElementById('blue');
blue.addEventListener('click',()=>{
    blue.style.backgroundColor="blue";
    blue.style.color="white";
    blue.style.border="none";
})
const green= document.getElementById('green');
green.addEventListener('click',()=>{
    green.style.backgroundColor="green";
    green.style.color="white";
    green.style.border="none";
})
const yellow= document.getElementById('yellow');
yellow.addEventListener('click',()=>{
    yellow.style.backgroundColor="yellow";
    yellow.style.color="black";
    yellow.style.border="none";
})
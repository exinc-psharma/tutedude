const N=153;
let sum=0;
for(let i=1;i<=N;i++){      //Sum upto N
    sum+=i;
}
console.log(`Number: ${N}`); //Print N
console.log(`Sum upto ${N} numbers is: ${sum}`); //Print Sum
for(let i=1;i<=10;i++){
    console.log(`${N} X ${i} = ${N*i}`);         //Print Table of N
}
let f=0;
for(let i=2;i<N;i++){            //Check for Not Prime
    if(N%i===0){
        f=1;
        break;
    }
}
if(N<=1){
    console.log(`is ${N} a Prime Number? No`);         //Check for N=1 or less than 1
}
else if(f===0){
    console.log(`is ${N} a Prime Number? Yes`);   //If check not execute, print Prime
}else{
    console.log(`is ${N} a Prime Number? No`);  //Print Not prime
}
console.log(`The factors of ${N} are:`)   //Factors of N
for(let i=1;i<=N;i++){
    if(N%i===0){
        console.log(`${i}`);      //Print Factor
    }
}
let sumD=0;            //Sum of Digits
let numD=0             //Number of Digits
let n=N;
while(n!==0){
    let k=n%10;
    sumD+=k;
    numD++;
    n=Math.floor(n/10);
}
console.log(`Sum of Digits for ${N} is ${sumD}`);  //Print Sum of Digits
n=N;
let arm=0;                //Armstrong number calculation
while(n!==0){
    let k=n%10;
    arm+=(k**numD);
    n=Math.floor(n/10);
}
if(arm===N){                                          //Armstrong check
    console.log(`Is ${N} an armstrong? Yes`);
}else{
    console.log(`Is ${N} an armstrong? No`);
}
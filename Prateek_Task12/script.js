const P=20000;
const r=0.06;  /*Rate is 6% so 6/100 is used*/
const n=3;
const t=2;

const A=P*(1+(r/n))**(n*t);
const C=A-P;
console.log(`The compound interest after ${t} years is: ${C.toFixed(2)}`); /*Used backticks, and tofixed to reduce decimals to 2 places.*/
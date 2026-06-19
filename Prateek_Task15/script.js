let arr = [4,8,2,11,6,7,10]
console.log(`Array: ${arr}`);
//Maximum number function  (Named Function)
function max(arr){
    let maxi=arr[0];
    for(let i=1;i<arr.length;i++){
        if(arr[i]>maxi){
            maxi=arr[i];
        }
    }
    return maxi;
}
const m=max(arr);
console.log(`Maximum Number: ${m}`);
//Sum of all elements function (Anonymous Function)
const sum = function(arr){
    let s=0;
    for(let i=0;i<arr.length;i++){
        s+=arr[i];
    }
    return s;
}
const sumOfAllElements=sum(arr);
console.log(`Sum of all elements: ${sumOfAllElements}`);
//Count of Odd numbers (Arrow Function)
const oddn= (arr) =>{
    let c=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2!==0){
            c++;
        }
    }
    return c;
}
const oddnumber=oddn(arr);
console.log(`Count of odd numbers: ${oddnumber}`);
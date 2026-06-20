const division = (a,b)=>{
    return new Promise((resolve,reject)=>{
        if(typeof a!== 'number' || typeof b!== 'number' || Number.isNaN(a) || Number.isNaN(b)){
            reject(new Error("Inputs must be valid!"));
        }else if(b===0){
            reject(new Error("The divisor cant be Zero!"));
        }else{
            resolve(a/b);
        }
    })
}

division(30, 15)
    .then(result => console.log(`30 / 15 = ${result}`))
    .catch(error => console.log(error.message));

division(10, 2)
    .then(result => console.log(`10 / 2 = ${result}`))
    .catch(error => console.log(error.message));

division(100, 5)
    .then(result => console.log(`100 / 5 = ${result}`))
    .catch(error => console.log(error.message));

division(10, 0)
    .then(result => console.log(result))
    .catch(error => console.log(error.message));

division("abc", 5)
    .then(result => console.log(result))
    .catch(error => console.log(error.message));
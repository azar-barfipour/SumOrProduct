function sunOrProduct(operation, ...numbers){
    let result;
if(operation=='sum'){
    result=0;
    for(let number of numbers){
    result += number; 
    }
}
else if(operation=='product'){
    result=1;
    for(let number of numbers){
    result *= number;
    }
}
return result;

}

console.log(sunOrProduct('sum', 5,856));
console.log(sunOrProduct('product',5,10));



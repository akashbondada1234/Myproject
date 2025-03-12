function outer() {
    var a = 10;
    function inner() {
        a++;  
        return a;
    }
    return inner;  
}

let b = outer(); 

console.log(b()); 
console.log(b()); 
console.log(b()); 

let human={
    drinks:true
};

let Male={
    walks:true
};
Male.__proto__=human;


console.log(human.drinks);


console.log(human.walks);

console.log(human.hasOwnProperty("drinks"));
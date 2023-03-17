// check truthy
let myVar = 5;
// check any truthy
if (myVar) {
    myVar = myVar * 100
} else{
    myVar = 0
}

let myMoney = 50;
// you check negative or falsy anything
if (!myMoney) {
    myMoney = myMoney * 5
}

const money = 80
let food;

if (money > 100) {
    food = 'biriyani'
} else{
    food = 'cha coffie vensenzo'
}

// number to string convert json

let food1 = money > 100 ? 'biriyani' : 'Cha bere';
// console.log(food1);

let drink = (money > 100 || myVar > 100) ? 'coke' : 'water'
// console.log(drink);

const input = '500';
const inputNum = +input;
// console.log(inputNum);

let isActive = false;
const showUser = () => console.log('display User');
const hideUser = () => console.log('Hide user');

// isActive ? showUser() : hideUser();
isActive && showUser()


// use && if the left side is true then right side will be executed


// use || 
isActive || showUser() || hideUser()

isActive = !isActive;
console.log(isActive);
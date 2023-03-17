// 1-1
// const arrow = (a,b,c) => a*b*c;
// const result = arrow(4,5,4);
// console.log(result);

// 1-2
// const threeLines = 
//     `I am a web developer.
// I love to code. 
// I love to eat biryani.`;
//  console.log(threeLines);

// 1-3

// const defaultValue = 0;

// const add = (a=defaultValue,b=defaultValue) => a+b;
// const result = add(1,1);
// console.log(result);

// 2


// 3


// 4

// const num1= [1,2,3,4,];
// const num2= [,5,6,7,8];

// const nums1 = [...num1];
// const nums2 = [...num2];

// const plus = num1 + num2

// console.log(plus);




// Ajaira alap

// const numbers = [2,3,4,5,6];


// function getDoubles(numbers){
//     const output =[];
// for(const number of numbers){
//     const doubled = number * number * number;
//     output.push(doubled);
//     } return output;
// } const result = getDoubles(numbers);
// console.log(result);
// const numbers = [2,4,6,8,10]
// // const func = numbers => numbers * numbers;
// // const result =  func(numbers);
// // console.log(result);

// const makeDouble = numbers.map(num => num*2)
// console.log(makeDouble);

// const maph = [1,2,3,4,5].map(x => x*5); console.log(maph);

// const numbers = [12,18,27,57].map(x => x /3); console.log(numbers);

// const numbers = [12,5,6,2,43,63,99,243,100,4,0];
// const bigNums = numbers.filter(n => n > 20);
// const even = numbers.filter(num => num % 2 === 0);
// console.log(even);

// const numbers = [1,2,3,4,5,6,7];
// const total = numbers.reduce((previus,current) => previus + current,0)
// console.log(total);

// class Instructor {
//     name;
//     designation  = 'Web course Instructor'
//     team = 'Web Team'
//     lacation;
//     constructor(name,location){
//         this.name = name;
//         this.location = location;
//     }
//     startSupportSession(time){
//         console.log(`Start support session at${time}`);
//     } createQuiz(module){
//         console.log(`Please create quiz for module ${module}`);
//     }
// }

// const aamir = new Instructor('Mehetaj', 'Mirpur-14');
// console.log(aamir);
// aamir.startSupportSession('9.00');
// aamir.createQuiz(60);

// const Mehetaj = new Instructor('Mehetaj Khandaker', 'Mirpur-14, Kachukhet, Muktijoddha Road');
// console.log(Mehetaj);


// class vehicle {
//     constructor(make, model,color){
//         this.make = make;
//         this.model = model;
//         this.color = color;
//     }
//     getName(){
//         return this.make + " " + this.model;
//     }
// } 
// let car = new vehicle('Mclaren', 'MC Brand', 'Black');
// console.log(car);


// class Developer {
//     name;
//     designation  = 'Web course Instructor'
//     team = 'Web Team'
//     lacation;
//     constructor(name,location, tech){
//         this.name = name;
//         this.location = location;
//         this.tech = tech;
//     }
//     developFeature(feature){
//         console.log(`Please Develop The${feature}`);
//     } release(version){
//         console.log(`Please Release the version ${version}`);
//     }
//     provideFeedback(){
//         console.log(`${this.name} Thank your for tour feedback.`);
//     }
// }
// class JobPlacement {
//     name;
//     designation  = 'Job placement commandos'
//     team = 'Job Placement'
//     lacation;
//     constructor(name,location, tech){
//         this.name = name;
//         this.location = location;
//         this.tech = tech;
//     }
//     provideResume(feature){
//         console.log(`Please Develop The${feature}`);
//     } PreapreStudent(version){
//         console.log(`Please Release the version ${version}`);
//     }
//     provideFeedback(){
//         console.log(`${this.name} Thank your for tour feedback.`);
//     }
// }

// class TeamMember{
//     name;
//     location;

//     constructor(name, location){
//         this.name = name;
//         this.lacation = location;
//     }
//     provideFeedback(){
//         console.log(`${this.name} Thank your for tour feedback.`);
//     }
// }


const friends = ["Moushumi", "Misha", "Manna", "mimi" , "mahiya"];
const b = friends.find(f=>f.length==5);
console.log(b);


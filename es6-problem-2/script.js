// 1 out of 1
// const odd = [1,3,5,7,9].map(even => even+1);
// console.log(odd);

// const odd = [1,3,5,7,9];

// for(let i = 0; i < odd.length; i++){
//     const oddeven = odd[i];
//     const even = oddeven + 1;
//     console.log(even);
// }

// 1 out of 2

// const numbers  = [33, 50, 79, 78, 90, 101, 30].filter(num => num % 10 == 0);
// console.log(numbers);

// 1 out of 3

// const numbers  = [33, 50, 79, 78, 90, 101, 30].find(num => num % 10 == 0);
// console.log(numbers);


// 2 out of 1

// const reduce = [1, 9, 17, 22].reduce((previus,current)=> previus + current,0);
// console.log(reduce);


// 3 out of 1

// const people = [
//     {name: 'Meena', age: 20},
//     {name: 'Riina', age: 15},
//     {name: 'Suchona', age: 22},
// ];
// const ages = people[0].age + people[1].age + people[2].age;
// console.log(ages);

// 4 out of 1

// const student = {
//     name:'Fredie',
//     age: 69,
// }; console.log(student.age);

// 5 out of 1

// let data ={
//     location: [
//         {
//             latitude : '34.5 , 37.8',
//             longiude : '98.77 , 58.7',
//             city     : 'Dhaka',
//             Country  : 'Bangladesh',
//         }
//     ]
// }

// const city  = data.location[0].city;
// console.log(city);

// 6 out of 1

const user = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496"
      }
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets"
    }
  }

  const email = user.email; console.log(email);
  const address = user.address; console.log(address);
  const city = address.city; console.log(city);
  const lat = address.geo.lat; console.log(lat);
  const companyName = user.company.name; console.log(companyName);
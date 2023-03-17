// const name = 'Hero';const age = 34;
// const person = {name, age}; console.log(person);

// const adventurer = { name: 'Alice',cat: {name: 'Lucy'} };
// const ratName = adventurer?.rat?.name;
// console.log(ratName);

// let person =null;
// console.log(person ? person : "person is null");

// function driversWithRevenueOver(driver, revenue) {
//     driver.filter(function(person) {
//       if (person.revenue === revenue) {
//         console.log(person);
//           return person; 
//     }
//     });
//   }
  
//     driversWithRevenueOver(
//       [
//         { name: "Sally", revenue: 400 },
//         { name: "Annette", revenue: 200 },
//         { name: "Jim", revenue: 150 },
//         { name: "Sally", revenue: 200 }
//       ],
//       250
//     );

const obj = {a:1};
console.log(Object.keys(obj).length===0);
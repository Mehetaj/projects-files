// let data = {
//         Sophia: {
//             id: 33,
//             study: [
//                 {
//                     primary:
//                         [
//                             { school_name: "ABC primary school" },
//                             { location: "Peters burg" }
//                         ]
//                 },
//                 {
//                     secondary:
//                         [
//                             { school_name: "ABC secondary school" },
//                             { location: "St Lorence" }
//                         ]
//                 },
//             ]
//         }
//     };

//     let secondary = data.Sophia.study[1].secondary[1].location;
//     console.log(secondary);



// let activities = {
//     activity1 : [
//       {
//           name : "listen on spotify",
//               song_list: { song_1 : "abc",
//               song_2 : "bcd"
//             },
//               id : 1
// },{
// name : "listen music through bot",
//             song_list: {
//             song_1 : "wxy",
//             song_2 : "xyz"     	 },
//             id : 2
// }]}


// const abc = activities.activity1[0].song_list.song_1;
// const xyz = activities.activity1[1].song_list.song_2;
// console.log(abc);
// console.log(xyz);



// let students = {
    
// 	2222: {
//             	name: "Jack",
//             	section: "C",
//             	class: "IX",
//             	address: {
//                          	buildingNo: 12,
//                          	street  : "St. Jonson",
//                          	city : "Petersburg",
//                          	country : "UK"
//                      	}
//       	},


// 	3333: {
//             	name: "Herry",
//             	section: "D",
//             	class : "X",
//             	address: {
//                           	buildingNo : 85,
//                               street : "DC road",
//                           	city : "Kachukhet",
//                           	country : "Bangladesh"
//                      	}
//      	}
//  	};

//     const peter = students[2222].address.city;
//     const herry = students[3333].name;
// console.log(herry);
//     console.log(peter);

// let instructor = {
// 	name: "Jhankar Mahbub",
// 	entrepreneur: true,
// 	additionalData: {
//     	writer: true,
//     	favoriteHobbies: ["travelling", "Coding"],
//     	books: ["programming er bolod to bos", "programming er coddogosti"],
//     	moreDetails: {
//         	favoriteBasketballTeam: "XYZ",
//         	isYoungest: true,
//         	hometown: {
//             	city: "ABC",
//             	state: "VW",
//         	},
//         	countriesLivedIn: ["Bangladesh", "New York"]
//     	}
// 	}
// };

// const coddogosti = instructor.additionalData.books[1];
// const vw = instructor.additionalData.moreDetails.hometown.state;

// const bd = instructor.additionalData.moreDetails.countriesLivedIn[0];
// console.log(bd);
// console.log(vw);
// console.log(coddogosti);


// const studentData = [
//     {
//         class: 10,
//         details: [
//             {
//                 studentId: '1',
//                 gradingDetails: [{ grade: 'A' }]
//             },
//             {
//                 studentId: '2',
//                 gradingDetails: [{ grade: 'B' }]
//             }
//         ]
//     },
//     {
//         class: 11,
//         details: [
//             {
//                 studentId: 3,
//                 gradingDetails: [{ grade: 'B' }]
//             },
//             {
//                 studentId: 4,
//                 gradingDetails: [{ grade: 'D' }]
//             }
//         ]
//     },
// ]


// const b = studentData[0].details[1].gradingDetails[0].grade;
// console.log(b);

// const d = studentData[1].details[1].gradingDetails[0].grade;
// console.log(d);




// let data = {
//     data:
//              [
//          {
//              bookId: 1,
//              bookDetails: {
//                  name: "habluder adda",
//                  category: "XYZ",
//                  price: "20$",
//              },
//              bookCategory: "Basic",
//          },
//          {
//              bookId: 2,
//              bookDetails: {
//                  name: "gobluder adda",
//                  category: "ABC",
//                  price: "40$",
//              },
//              bookCategory: "Beginner",
//          }
//      ]
// }

// const adda = data.data[0].bookDetails.name;
// const beg = data.data[1].bookCategory;
// console.log(beg);
// console.log(adda);


// let data =
//  [
// 	{
//     	pHeroCourses: {
//         	coursex: "web development"
//     	}
// 	},
// 	{
//     	pHeroCourses: {
//         	coursey: "phitron"
//     	}
// 	},
// 	{
//     	pHeroCourses: {
//         	coursez: "acc"
//     	}
// 	},
// 	{
//     	pHeroCourses: {
//         	coursexyx: "level-2"
//     	},
//     	locationField: {
//         	enUS: {
//             	lat: 19.28563,
//             	lon: 72.8691
//         	}
//     	}
// 	}
// ];

// const level1 = data[3].locationField.enUS.lon;
// console.log(level1);

// const level2 = data[3].pHeroCourses.coursexyx;
// console.log(level2);

// const mult = (x,y,z) => x * y * z ;
// const result = mult(2,2,2);
// console.log(result);

// const add= (x=0,y=0) => {
// 	const xe = x + 2;
// 	const ye = y + 2;
// 	const plus = xe * ye;
// 	return plus
// }

// const result =  add(3);
// console.log(result);

// const oneLineDimension = [1,2,3,4,5,6,7,8,9,10].map(x => x*5);
// console.log(oneLineDimension);

const findOdd = [1,2,3,4,5,6,7,8,9,10].filter(x => x%2===1);
console.log(findOdd);
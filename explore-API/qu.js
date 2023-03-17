
// const totalCost = (products) => {
//     const total = products[0].price + products[1].price + products[2].price
//     return total;
// };



// totalCost([
//  { name: "Dano Milk", price: 500 },
//  { name: "Taaza Tea", price: 200}, 
//  { name: 'Fresh Sugar', price:300}
//  ])

function temperatureConverter(valNum) {

    const celcius = (valNum - 32) / 1.8;
    return celcius
}

const result = temperatureConverter(103).toFixed(2);

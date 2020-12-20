const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

let totalBatteries = batteryBatches.reduce((accumulator, element) => {
    return accumulator + element;}, 0)

/* 
const products = [
    {name: "Shampoo", price: 4.99},
    {name: "Donuts", price: 7.99},
    {name: "Cookies", price: 6.49},
    {name: "Bath Gel", price: 13.99}
]

function getTotalAmountForProducts(products){
    let totalPrice = 0; 

    products.forEach(function(product){
        totalPrice += product.price
    });
    return totalPrice; 
}

console.log(getTotalAmountForProducts(products)); 


const couponLocations = [
    {room: "Living room", amount: 5},
    {room: "Kitchen", amount: 2},
    {room: "Bathroom", amount: 1},
    {room: "Master Bedroom", amount: 7}
];

function ourReduce(array, reducer, init){
    let accumulate = init
    array.forEach(element => {
        accumulate = reducer(accumulate, element)
});
return accumulate;
}

function couponCounter(totalAmount, location){
    return totalAmount + location.amount; 
}

console.log(ourReduce(couponLocations, couponCounter, 0))


ourReduce 
Accepts 3 arguments, the array we want to reduce, the callback function, and the inital value. 
It then iterates over teh array, calling the reducer function each time, which updates the value of the accumulator. 
The final value of the accumulator is returned at the end. 




*/







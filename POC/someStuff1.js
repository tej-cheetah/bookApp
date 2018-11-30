// const add = (...arg) => {
//     return arg.reduce((val,sum)=>sum+val)
// };

// const partialApply = (func, ...fixedArgs) =>
//     // (...remainingArgs) => func(...remainingArgs, ...fixedArgs);
//     (...remainingArgs) => {
//         console.log(fixedArgs.concat(remainingArgs), 'was ist das')
//         return func.apply(this, fixedArgs.concat(remainingArgs));
        
//     }

// const add10 = partialApply(add, 10, 20);
// console.log(add10(10, 22, 33));

// const trip = (...args) => {
//     let sum = 0;
//     args.forEach((val) => {
//         sum += val;
//     })
//     return sum;
// }

// const some = [1,2,3,4,5,6,7,8,9,0]
// const some1 = ['a', 'b', 'c', ...some]
// const some2 = {x: 'x', y: 'y', z: 'z'};

// console.log(trip('a', 'b', 'c', some, some2.x));

// console.log(trip.apply(null, some));
// console.log(trip(...some));

// //Understanding closures

// let Hurray = Array.prototype;
// console.log(Hurray.length)
// // Hurray.prototype = Object.create(Array.prototype);

// // var h = new Hurray;
// Hurray.push('a', 'z', 'x')
// // h.push('a','b','c');

// console.log(Hurray.length); // 3

// var last = Hurray.pop();

// console.log(last); // 'c'
// console.log(Hurray.length); // 2
// console.log(Hurray); // 2



// var array = ['a', 'b'];
// var elements = [0, 1, 2];
// array.push.apply(array, elements);
// array.push([1,2,3,4,5,56,8])

// console.log(array);
// console.log(array[5]);

// function Product(name, price) {
//   this.name = name;
//   this.price = price;
// }

// function Food(name, price) {
//   Product.call(this, name, price);
//   this.category = 'food';
// }

// class DairyProd {
//     constructor(name, price) {
//         this.prod = Product.call( name, price );
//         this.getName = ;
//     };
// };

// var brick = new DairyProd();

// console.log(new DairyProd('cheese', 33).prod);
// console.log(this);
// // console.log(x.name);

// const arr = [1,2,3,4,56,7]

// var [a, b] = arr
// console.log(a, b)

// var [a, b] = [b, a]

// var a = 10 
// var b = 20;

// [a, b] = [b, a]
// console.log(a, b)

// a= {
//     a: 'x',
//     b: 't',
//     s: 's'
// }
// b = {
//     a: 'x',
//     b: 't',
//     s: 'y'
// }

// console.log(a)

// function some(obj, obj1) {
//     // console.log('a: ', obj, 'b: ', obj1)    
//     // obj1= obj;
//     // console.log('a: ', obj, 'b: ', obj1)
//     obj1.b='tejas'; obj.b='bhavin';
    
// }

// let some1 = some(a, b)

// console.log(a)
// console.log(b)

const _ = require('lodash');

// const myNewPromise = new Promise(function(resolve, reject) {

//   setTimeout(() => {
//     resolve(
//         'what the well'
//       )
//   },5000);
  
// })

// myNewPromise.then((data) => {
//   // let bookData = JSON.parse(data);
//   console.log('is it working?');
//   console.log(data);
// }).catch((reason) => {
//   console.log(reason);
// })

// console.log('ow what is happening');

// let enterKey = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('enter the key');
//   }, 2000);

// });

// let igniteEngine = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('engine ignited, vroooom vroooomm');
//   }, 0)
// });

// let allSet = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('switch to 1st gear and acclerate');
//   }, 4000)
// });

// let driving = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('running at 12Km/hr');
//   }, 3000)
// });

// enterKey.then((resolve) => {
//   console.log(resolve);
//   return igniteEngine;
// }).then((resolve)=> {
//   console.log(resolve);
//   return allSet;
// }).then((resolve) => {
//   console.log(resolve);
//   return driving;
// }).then((resolve) => {
//   console.log(resolve);
// })

// function enterKey (n1, n2){
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(n1+n2);
//     }, 2000); 
//   });
//   return promise;
// }

// function igniteEngine(r)
// {
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(r*2);
//     }, 0)
//   });
//   return promise;
// }

// function allSet(r1){
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(r1 * 3);
//     }, 4000)
//   });
//   return promise;
// }

// function driving(r2){
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(r2 * 2);
//     }, 3000)
//   });
//   return promise;
// }

// enterKey(2,2).then((resolve) => {
//   return igniteEngine(resolve);
// }).then((resolve)=> {
//   return allSet(resolve);
// }).then((resolve) => {
//   return driving(resolve);
// }).then((result)=>{
//   console.log(result);
// })

// var users = [
//     { name: 'John', points: 1200},
//     { name: 'Jerry', points: 300}, 
//     { name: 'bill', points: 935},
//     {name:'Tejas', points: 1300}
 
// ];

// console.log(_.isEmpty(_.filter(users, (i) => i.name.match(new RegExp(`^tjas$`, 'gi')
// ))))
// dataToWrite = void 0;
// (dataToWrite)? console.log('true') : console.log('false', dataToWrite);


// match = (o) => { return o.name.match(new RegExp('^tejas$', 'gi'))};

// const index = _.findIndex(users, match);
// const bookObj = users[index];
// const boolVal = (typeof bookObj === 'object');

// const value = {index: index, bookObj: bookObj, boolVal: boolVal};

// console.log(value);

// (undefined) ? console.log('undefined workds'): console.log('undefined does not work')


// _.each(users, (obj) => {
//   _.includes(obj, 'John') ? true: false;
// })

// console.log(_.find(users, (obj) => {
//   return (obj.name == 'John');
// }))


// console.log(_.includes(users, ['name', 'John']));

// console.log(_.findIndex(users, (obj) => {
//   console.log(obj.name)
//   return obj.name.match(/^JERRY$/gi);
// }));

// function add(x, y) {
//   console.log('add in execution')
//   return x+y;
// }

// function random() {
//   const val = Math.random();
//   if(val>0.5) {
//     console.log(val);
//     return 1;
//   } else {
//     console.log(val);    
//     return false;
//   }
// }

// const trax = random() ? {data: 'data does not exist', status: true} : {data: 'data does exist', status: false};
// console.log(trax.data);
// console.log(trax.status);

// if(-100) {
//   console.log('true')
// } else {
//   console.log('false')
// }

// console.log(_.each({a:1, b:2, c:3}, function(value, key, obj) { obj[key] = value * value; }))

var regEx = RegExp('(http|https)://^(w{3}|w{2}[0-9]|){1}$') //://(^(w{3}|w{2}[0-9]){1}$)'); //.tejas(\.com|\.co\.in|\.in)

// var regEx1 = new RegExp('(http|https)://(w{3}\.|w{2}[0-9]\.|)[a-z0-9\-]+(\.com|\.co\.in|\.in)')      //(\.com|\.co\.in|\.in)
var regEx1 = new RegExp('(http|https)://(w{3}\.|w{2}[0-9]\.|)[a-z0-9\-(:(\d+))?]+(\.com|\.co\.in|\.in)')

console.log(regEx1.test('http://www.tej3as-tram.co.in/ohgod'))   //true
console.log(regEx1.test('http://www3.teja3s-c-c'))  //false
console.log(regEx1.test('https://ww2.teja12s--a.com/are/you/allGood?'))   //true
console.log(regEx1.test('http://ww03.tej2as'))  //false
console.log(regEx1.test('https://w203.tejas'))  //false
console.log(regEx1.test('https://w23.tejas'))   //false
console.log(regEx1.test('http://.tejas'))      //false
console.log(regEx1.test('https://tejas-some-19203-big.in/I%20%you%20%guys%20%are%20%doing%20%fine'))       //true

let val = [
    'https://www.tejas.com',
    'https://www.tejas.co.in',
    'https://www.tejas.in',
    'https://ww2.tejas.in',
    'https://www12.tejas.in',
    'https://tejas.com',
    'https://tejas.co.in',
    'https://tejas.in'
]

// val.forEach(function(element) {
//     console.log(regEx1.test(element));
// }, this);

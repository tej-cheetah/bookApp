// const _ = require('lodash');

// var arrString = ['tejas', 'bhavin', 'pramay neema', 'tejas', 'himanshu', 'anand', 'pranit neema', 'vidhyanand'];
// var arrNum = [2, -10, 894, -6744, 78653, -3223, 23423];
// var arrAlphaNum = [2, 6, -9, 'tejas', -90, 'bhavin'];
// var arrBoolean = [true, true, true, true, true, true];

// var students = [{id: 1, Name: 'Tejas'},{id: 5, Name: 'Bhavin'},{id: 8, Name: 'Pramay'}];
// var obj = {player: {team: 'GoodGuys', hp: 12, hpMax: 100, heal: false},
//             enemys: [{team: 'BadGuys', hp: 90, hpMax: 250, heal: true},
//                      {team: 'BadGuys', hp: 120, hpMax: 250, heal: true}]};

// //returns the false and true as response, as per the condition defined in function
// //(.false can be invoked to get count of false or .true for count of truthies)
// _.countBy(students, function(rec) {
//     return rec.Name=='Tejas';
// }).false;
// _.countBy(arrString, function(obj) {
//     return obj.length;
// });

// //_.forEach in lodash allows us to break the loop by returning false value
// //compare to array's forEach loop does return anything
// _.each(students, function(value, index, arr) {
//     // console.log(index + ' : ' + value.Name + ' : ' + arr[index].id);
//     if(value.Name == 'Bhavin') return false;
// });

// _.eachRight(students, function(value, index, arr) {
//     // console.log(index + ' : ' + value.Name + ' : ' + arr[index].id);
//     if(value.Name == 'Bhavin') return false;
// });

// nameIsString = (val) => {
//     return typeof(val.Name) == 'string';
// }

// {
//     if(_.every(students, nameIsString) && _.some(students, nameIsString)){
//         console.log('All name consists of a string');
//     } else {
//         console.log('Not all Name are string');
//     }
// }

// console.log(_.every(arrBoolean, Boolean));

// _.find(arrString, (obj) => {
//     if(obj.includes('tejas'))
//     console.log(obj);
// });

// var object = { 'a': [{ 'b': { 'c': 3 } }] };

// console.log(_.get(object, 'a[0].b.c'));
// console.log(_.get(students, 'obj.player.team'))
// console.log(students[0].Name)

function doubleAfter2Seconds(x) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(x * 2);
      }, 2000);
    });
};

async function addAsync(x) {
    const a = await doubleAfter2Seconds(10);
    console.log('1')
    const b = await doubleAfter2Seconds(20);
    console.log('2')
    const c = await doubleAfter2Seconds(30);
    console.log('3')
    return x + a + b + c;
  }

//   addAsync(10).then((data) => {
//       console.log(data)
//   })

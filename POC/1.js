const seon2 = require('./2');

console.log(seon2.some(2, 4, (obj) => {
    return obj*2;
}));
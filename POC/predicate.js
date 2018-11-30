function or(p1, p2) {
    return function(x) {
        return p1(x) || p2(x);
    };
};

function positive(x) {
    return x>0;
}

function negative(x) {
    return x<0;
}

var nonZero = or(negative, positive);
console.log(nonZero(-12));
console.log(nonZero(0));
console.log(nonZero(12));

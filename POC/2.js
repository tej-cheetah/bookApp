module.exports = {
    some: (one, two, three) => {
        let four = one + two
        return 'something might be happening here ' + three(four);
    }
}
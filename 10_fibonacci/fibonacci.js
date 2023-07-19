const fibonacci = function(number) {
    if(number < 1) return 'OOPS';
    else if(number == 1 || number == 2) return 1;

    let first = 1;
    let second = 1;
    for (let i = 3; i <= number; i++){
        let sum = first + second;
        first = second;
        second = sum;
    }
    return second;
};

// Do not edit below this line
module.exports = fibonacci;

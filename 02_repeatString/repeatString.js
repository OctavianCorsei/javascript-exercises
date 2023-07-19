const repeatString = function(myString, number) {
    if(number < 0) return 'ERROR';
    let result = '';
    for(let i = 0; i < number; i++){
        result += myString;
    }

    return result
};

// Do not edit below this line
module.exports = repeatString;

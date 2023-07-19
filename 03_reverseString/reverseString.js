const reverseString = function(myString) {
    let result = '';
    
    for(let i = myString.length - 1; i >= 0; i-- ){
        result += myString[i];
    } 

    return result;
};

// Do not edit below this line
module.exports = reverseString;

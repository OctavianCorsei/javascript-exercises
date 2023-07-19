const caesar = function(myString, shiftNumber1) {
    let result = '';
    let shiftNumber = shiftNumber1;
    while(shiftNumber < 0) shiftNumber += 26;
    while(shiftNumber > 26) shiftNumber -= 26;
    for(let letter of myString){
        letterCode = letter.charCodeAt(0);
        // solve large negative numbers

        let shiftedLetter;
        //for capital letters overflow
        if(letterCode >= 65 && letterCode <= 90 && (letterCode + shiftNumber) > 90)
            shiftedLetter = letterCode + shiftNumber - 26;
        //for small letters overflow
        else if(letterCode >= 97 && letterCode <= 122 && (letterCode + shiftNumber) > 122)
            shiftedLetter = letterCode + shiftNumber - 26; 
        else if(letter == ' ' || letter == ',' || letter == '!')
            shiftedLetter = letterCode;
        else
            shiftedLetter = letterCode + shiftNumber;
        result += String.fromCharCode(shiftedLetter);
    }

    return result;
};

// Do not edit below this line
module.exports = caesar;

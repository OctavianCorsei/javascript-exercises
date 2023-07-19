const palindromes = function (mystring) {
    if(mystring.length == 1 || mystring.length == 0)return true;

    let newstring = '';
    for(i = 0; i< mystring.length; i++){
        if(mystring[i] == ' ' || mystring[i] == ',' || mystring[i] == '!' || mystring[i] == '.') continue;

        newstring += mystring[i];
    }
    newstring = newstring.toLocaleLowerCase();

    for(i = 0; i < newstring.length / 2 ; i++){
        if(newstring[i] != newstring[newstring.length - 1 - i]) return false;
    }
    return true;
};

// Do not edit below this line 
module.exports = palindromes;

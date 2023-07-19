const removeFromArray = function(thisArray, ...toRemove) {
    let myArray = thisArray;
    
    for(const number of toRemove){
        for( let i = 0; i < myArray.length; i++){
            if(myArray[i] === number){
                myArray.splice(i,1);
            }
        }
    }
    
    return myArray;
};

// Do not edit below this line
module.exports = removeFromArray;

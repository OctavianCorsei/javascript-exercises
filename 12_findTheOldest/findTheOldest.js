const findTheOldest = function(peopleArray) {
    let currentyear = 2023;
    let oldestAge = -Infinity;
    let oldestPerson;

    for(person of peopleArray){
        let birth = person.yearOfBirth;
        let death;
        let age;
        if(person.yearOfDeath === undefined) death = currentyear;
        else death = person.yearOfDeath;
        age = death - birth;

        if(age > oldestAge){
            oldestAge = age;
            oldestPerson = person;
        }
    }

    return oldestPerson;

};

// Do not edit below this line
module.exports = findTheOldest;

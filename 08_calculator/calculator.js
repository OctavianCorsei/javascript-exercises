const add = function(...numbers) {
    let sum = 0;
    for(let num of numbers){
      if(!Number.isInteger(num)) return 'ERROR';
      sum += num;
    }
    
    return sum;
};

const subtract = function(numberOne, numberTwo) {
  if(!Number.isInteger(numberOne) || !Number.isInteger(numberTwo)) return 'ERROR';
    return numberOne - numberTwo;
};

const sum = function(numbers) {
  let sumsum = 0;
  for(let num of numbers){
    if(!Number.isInteger(num)) return 'ERROR';
      sumsum += num;
  }
	
  return sumsum;
};

const multiply = function(numbers) {
  let sum = 1;
  for(let num of numbers){
    if(!Number.isInteger(num)) return 'ERROR';
    sum *= num;
  }
  
  return sum;
};

const power = function(numberOne, numberTwo) {
    let sum;
    if(!Number.isInteger(numberOne) || !Number.isInteger(numberTwo)) return 'ERROR';
    sum = numberOne ** numberTwo;

    return sum;
	
};

const factorial = function(number) {
	let sum = 1;
  if(!Number.isInteger(number)) return 'ERROR';
  else if(number == 0) return 1;

  for(let i = 1; i <= number; i++ ) sum *= i;

  return sum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

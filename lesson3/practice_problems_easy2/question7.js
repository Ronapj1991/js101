let flintstones = { 
  Fred: 0, 
  Wilma: 1, 
  Barney: 2, 
  Betty: 3, 
  Bambam: 4, 
  Pebbles: 5
};

let barneyArray = Object.entries(flintstones).filter(element => element.includes('Barney')).shift();
console.log(barneyArray);
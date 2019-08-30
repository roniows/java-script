/*
************************
Arrays
************************

*/
var array = ['a','b','c'];

//array push function element add in last of this array
array.push('f');
//array unshift function element add in begaining of this array
array.unshift('-1');

//array pop function element remove from last of this array
array.pop();
//array shift function element remove from first of this array
array.shift();
console.log(array)

/*
//index of
*****************
indexOf will return position of the argument that we pass in inside of this array

*/
console.log(array.indexOf('b'))

var valueInArray = array.indexOf('b') === -1 ? 'value is not stored in array' : 'value stored in array';
console.log(valueInArray);
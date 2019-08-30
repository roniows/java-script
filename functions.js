/*
****************************
Function 
*****************************
Functions like container that hold some lines of code and we can pass argument and they can then return us result

*/

// get age function

function calculateAge(birthYear){
	var date = new Date();
	var currentYear = date.getFullYear();
	return currentYear - birthYear;
}

// calculate retirement

function calculateUntillRetirement(year) {
	var year = 65 - calculateAge(year);
	var month = year * 12;
	console.log(year)
	console.log(month)
	

}

calculateUntillRetirement(1995);

/*
part 2 
**************************************
Function statement and expression
***************************************
*/


//function declaration
//***************************
/*function whatDoYouDo(job,name) {
	// body...
}
whatDoYouDo()
*/

// Function expression
var whatDoYouDo = function (job,name) {
	switch(job){
		case 'developer':
			return name + ' is a web developer';
		case 'designer':
			return name + ' is a web designer';
		default:
			return name + ' does something else';
	}
}
console.log(whatDoYouDo('abc','roni'))

/*
Difference between statements and expressions
********************************************
expressions
****************
Javascript expressions are pieces of code that always produce a value and 
it doesn't matter how they are  as long as the code results return in a single value, then it is expression.

ex:- in console
expression
***********
2+3
//that return 5 and this Js called expression

whatDoYouDo('abc','roni')
return the result from this function so called expression
***************************
statements
***************************

They do perform actions so, they do things but they do not produce immdiate results,
so these are things like if/else statements, a while loop or even afunction declaration. 
they don't produce any immidiate value so they are called statement 




























*/








































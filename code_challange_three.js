/*
john and his family went to 3 different resturent .the bills were $124,$48,$268

tip waiter a fair amount.create a tip calculator. tip 20% bill amount less than $50,
15%  bill is between $50 and $200,10% if the bill > $200.
In the end would like to have 2 array:
1.containing all three tips (one for each bill)
2.containing all three final paid amount (bill + tip)

Note:- to calculate 20% of a value,multiply if with 20/100 = 0.2

*/


var allThreeTip = [];
var totalPaid = [];

var calculateTips = function (amount) {
	
	if (amount < 50) {
		//var cal = ;
		return amount * (20/100);
	}
	else if(amount >=50 && amount <= 200){
		return amount * (15/100);
	}else if(amount > 200){
		return amount * (10/100);
	}
}
var finalBill = function (amount) {
	return amount + calculateTips(amount);
}
allThreeTip.push(calculateTips(124));
allThreeTip.push(calculateTips(48));
allThreeTip.push(calculateTips(268));

totalPaid.push(finalBill(124));
totalPaid.push(finalBill(48));
totalPaid.push(finalBill(268));
console.log(allThreeTip,totalPaid)
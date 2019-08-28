

/* 
Mark and john are trying to compare their BMI (body mass index)
which is calculated using the formula
BMI = mass/height^2 = mass / (height * height).
(mass in kg and height in meter)

1. Store Mark's and john's height in variables
2.calculate both their BMIs
3.Create a boolean variable containing information about whether Mark has a higher BMI than john.
4.Print a string to the console containg the variable from steo 3.(ex- Is Marks BMI higher than John's? true)
*/
// solution 1
var markHight,markMass,JohnHight,johnMass;
markMass = 80; //kg
markHight = 1.5; //meter


johnMass = 90;
johnHeight = 1.8;

// solution 2
markBmi = markMass/(markHight^2);
johnBmi = johnMass/(johnHeight^2);

//solution 3

var isTrue = markBmi > johnHeight;


//solution 4

console.log("Is Marks BMI higher than John\'s?"+isTrue);
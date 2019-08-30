/*
John and Mika both play basket ball in different teams. In the latest 3 games,
John's team scored 89,120 and 103 points,while Mike's team scored 116,94 and 123 points.

*/

// Calculate the avarage score for each team
var johnTeamAvarage,mikeTeamAvarage;

	johnTeamAvarage = (89 + 120 + 103) / 3; //calculate avarage
	mikeTeamAvarage = (116 + 94 + 123) / 3; //calculate avarage
	maryTeamAvarage = (97 + 134 + 105) / 3;

// Decide which teams wins in average (highest average score),and print the winnner to the console.
// Also include the average score in the output
/*if (johnTeamAvarage > mikeTeamAvarage) {
	console.log("highest average score John's team and score is "+johnTeamAvarage)
}else if(mikeTeamAvarage > johnTeamAvarage){
	console.log("highest average score Mike's team and score is "+mikeTeamAvarage)
}else{
	console.log("Boths team score average same and score is "+mikeTeamAvarage)
}*/
if (johnTeamAvarage > mikeTeamAvarage && johnTeamAvarage > maryTeamAvarage) {

	console.log("highest average score John's team and score is "+johnTeamAvarage)
}else if(mikeTeamAvarage > johnTeamAvarage && mikeTeamAvarage > maryTeamAvarage){
	console.log("highest average score Mike's team and score is "+mikeTeamAvarage)
}else if(maryTeamAvarage > johnTeamAvarage && maryTeamAvarage > mikeTeamAvarage){
	console.log("highest average score Mary's team and score is "+maryTeamAvarage)
}

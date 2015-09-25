/*
$("#main").append(["Tommy Brennan"]);
var awesomeThoughts = "I am Tom and I am Awesome!"
console.log(awesomeThoughts);
var funThoughts = awesomeThoughts.replace("Awesome", "Fun");
console.log(funThoughts);
$("#main").append([funThoughts]);
*/

var name = "Tommy Brennan";
var formattedName = HTMLheaderName.replace("%data%", name);

var role = "Front End Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);

$('#header').append(formattedName);
$('#header').append(formattedRole);



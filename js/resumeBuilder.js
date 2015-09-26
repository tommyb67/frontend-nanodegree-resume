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

var skills = ["HTML", "CSS", "JavaScript", "Ruby"];

var bio  = {
  "name" : "Tommy",
  "role" : "Front End Web Developer",
  "phone" : "718-440-4306",
  "email" : "tommybrennan@gmail.com",
  "image" : "images/headshot.jpg",
  "message" : "Hello and welcome to my online resume",
  "skills" : skills
};

$('#main').append(bio.name);
$('#main').append(bio.role);
$('#main').append(bio.phone);
$('#main').append(bio.email);
$('#main').append(bio.image);
$('#main').append(bio.message);
$('#main').append(bio.skills);

